export interface TravelData {
  home: string;
  visited: string[];
  total: number;
}

/** ISO 3166-1 alpha-2 country codes */
export const travel: TravelData = {
  home: "PT",
  visited: ["ES", "FR", "GB", "HU"],
  total: 195,
};
