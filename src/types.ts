export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

export interface SiteContent {
  brandName: string;
  tagline: string;
  navigation: { name: string; href: string }[];
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    image: string;
  };
  categories: Category[];
  products: Product[];
  footer: {
    about: string;
    links: { name: string; href: string }[];
    social: { name: string; href: string }[];
  };
}
