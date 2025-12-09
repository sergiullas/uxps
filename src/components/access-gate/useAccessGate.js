import * as React from 'react';

export async function hashPassword(text) {
  if (typeof crypto === 'undefined' || !crypto.subtle?.digest) {
    throw new Error('Secure hashing is unavailable in this browser.');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export default function useAccessGate(slug, expectedHash) {
  const storageKey = slug ? `gate-${slug}` : null;
  const [unlocked, setUnlocked] = React.useState(() => {
    if (!expectedHash) return true;
    if (typeof window === 'undefined' || !storageKey) return false;

    try {
      return window.sessionStorage.getItem(storageKey) === '1';
    } catch (error) {
      return false;
    }
  });

  React.useEffect(() => {
    if (!expectedHash) {
      setUnlocked(true);
      return;
    }

    if (!storageKey || typeof window === 'undefined') return;

    try {
      const stored = window.sessionStorage.getItem(storageKey) === '1';
      setUnlocked(stored);
    } catch (error) {
      setUnlocked(false);
    }
  }, [expectedHash, storageKey]);

  const attempt = React.useCallback(
    async (password) => {
      if (!expectedHash) return true;
      let hash = '';

      try {
        hash = await hashPassword(password);
      } catch (error) {
        return false;
      }

      const isValid = hash === expectedHash;

      if (isValid && storageKey && typeof window !== 'undefined') {
        try {
          window.sessionStorage.setItem(storageKey, '1');
        } catch (error) {
          // sessionStorage may be blocked; do nothing
        }
      }

      setUnlocked(isValid);
      return isValid;
    },
    [expectedHash, storageKey],
  );

  return { unlocked, attempt };
}
