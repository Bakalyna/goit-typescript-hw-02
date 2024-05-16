export interface ImgData {
  id: string;
  urls: { small: string; regular: string };
  alternative_slugs: { en: string };
}

export interface FetchedData {
  results: ImgData[];
  total: number;
  total_pages: number;
}
