export function normalizeBrand(brand) {
  if (!brand) return null;

  const primaryColor = brand.primaryColor;
  if (!primaryColor) return null;

  return {
    primaryColor,
    accentColor: brand.accentColor || primaryColor,
    applyToHeader: brand.applyToHeader !== false,
  };
}
