export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences?: string;
}

export interface HotelEdit {
  id: string;
  name: string;
  address1: string;
  city: string;
  shortDescription: string;
  hotelRating: number;
}
