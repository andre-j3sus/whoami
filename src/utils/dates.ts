/**
 * Format an ISO year-month string ("2024-05") into a short human-readable form ("May 2024").
 *
 * TODO: Accept a locale parameter when i18n support is added (English + Portuguese).
 * Replace with Intl.DateTimeFormat(locale, { year: "numeric", month: "short" }).
 */
export function formatYearMonth(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
