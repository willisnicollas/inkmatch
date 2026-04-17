export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  origins: string;
  characteristics: string[];
  bestFor: string;
  imageUrl: string;
  gallery: string[];
}

export interface Artist {
  id: string;
  name: string;
  studioName?: string;
  city: string;
  country: string;
  styles: string[];
  bio: string;
  imageUrl: string;
  gallery: string[];
  rating: number;
  reviews: Review[];
  socials: {
    instagram?: string;
    tiktok?: string;
    website?: string;
  };
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
