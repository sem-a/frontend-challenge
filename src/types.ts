interface Breed {
  weight?: Weight;
  id: string;
  name?: string;
  temperament?: string;
  origin?: string;
  country_codes?: string;
  country_code?: string;
  life_span?: string;
  wikipedia_url?: string;
}

interface Weight {
  imperial?: string;
  metric?: string;
}

export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: Breed[];
}