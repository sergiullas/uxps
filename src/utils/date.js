export function formatDate(value, { month = 'short', year = 'numeric' } = {}) {
  if (!value) return 'Present';
  const date = new Date(`${value}-01`);
  if (Number.isNaN(date.getTime())) return value;
  try {
    return new Intl.DateTimeFormat('en', { month, year }).format(date);
  } catch (error) {
    console.error('formatDate error', error);
    return value;
  }
}

export function formatDateRange(startDate, endDate, options) {
  const start = formatDate(startDate, options);
  const end = endDate ? formatDate(endDate, options) : 'Present';
  return `${start} – ${end}`;
}
