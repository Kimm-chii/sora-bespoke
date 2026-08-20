import { SiteContent } from "../types";

export const content: SiteContent = {
  brandName: "SORA",
  tagline: "Elegance in Every Story",
  navigation: [
    { name: "Collections", href: "#collections" },
    { name: "Bespoke", href: "#bespoke" },
    { name: "Our Story", href: "#" },
  ],
  hero: {
    headline: "Symbols of an Eternal Promise",
    subheadline: "Discover our collection of timeless and custom-designed rings, crafted for a lifetime of love.",
    cta: "Explore Collection",
    image: "/images/hero-banner.jpg",
  },
  categories: [
    { id: "all", name: "All Rings" },
    { id: "engagement", name: "Engagement" },
    { id: "wedding", name: "Wedding Bands" },
    { id: "bespoke", name: "Bespoke" },
  ],
  products: [
    {
      id: "1",
      name: "The Classic Solitaire",
      price: "$2,500",
      category: "engagement",
      image: "/images/ring-1.jpg",
      description: "Timeless 1ct diamond set in 18k yellow gold."
    },
    {
      id: "2",
      name: "Eternity Band",
      price: "$1,800",
      category: "wedding",
      image: "/images/ring-2.jpg",
      description: "Seamless circle of pavé diamonds in platinum."
    },
    {
      id: "3",
      name: "Vintage Halo",
      price: "$3,200",
      category: "engagement",
      image: "/images/ring-3.jpg",
      description: "Art deco inspired halo setting with milgrain detailing."
    },
    {
      id: "4",
      name: "Minimalist Gold Band",
      price: "$850",
      category: "wedding",
      image: "/images/ring-4.jpg",
      description: "A simple, elegant 14k rose gold band with a brushed finish."
    },
    {
      id: "5",
      name: "Custom Sapphire Ring",
      price: "Price upon request",
      category: "bespoke",
      image: "/images/ring-5.jpg",
      description: "A unique commission featuring a deep blue sapphire."
    },
    {
      id: "6",
      name: "Three-Stone Diamond",
      price: "$4,100",
      category: "engagement",
      image: "/images/ring-6.jpg",
      description: "Representing past, present, and future."
    }
  ],
  footer: {
    about: "Sora specializes in fine bespoke jewelry, crafting symbols of love that last generations.",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "Care Guide", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    social: [
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
      { name: "Facebook", href: "#" },
    ]
  }
};
