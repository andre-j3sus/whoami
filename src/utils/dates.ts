/**
 * Format an ISO year-month string ("2024-05") into a short human-readable
 * form ("May 2024" in English, "mai. 2024" in Portuguese).
 */
export function formatYearMonth(iso: string, locale = "en-US"): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString(locale, { year: "numeric", month: "short" });
}
