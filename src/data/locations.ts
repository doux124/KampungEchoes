import type { LocationData } from "../types";

export const locations: LocationData[] = [
  {
    id: "chinatown-smith-street",
    name: "Chinatown — Smith Street Memory Corridor",
    shortName: "Smith Street",
    area: "Chinatown",
    description:
      "A historic street once filled with food stalls, shophouses, street life, and family routines.",
    status: "ready",
    image: "assets/chinatown-smith-street.jpg",
    coordinatesLabel: "1.2833° N, 103.8437° E",
    memoryCue: "Food stalls, shophouse corridors, night market glow",
  },
  {
    id: "tiong-bahru-old-estate",
    name: "Tiong Bahru — Old Estate Walk",
    shortName: "Old Estate Walk",
    area: "Tiong Bahru",
    description:
      "One of Singapore’s oldest housing estates, remembered for its markets, curved flats, and neighbourhood rhythms.",
    status: "coming-soon",
    image: "assets/tiong-bahru-market.jpg",
    coordinatesLabel: "1.2851° N, 103.8328° E",
    memoryCue: "Market mornings, curved flats, familiar coffee aromas",
  },
  {
    id: "queenstown-first-satellite-town",
    name: "Queenstown — First Satellite Town",
    shortName: "First Satellite Town",
    area: "Queenstown",
    description:
      "A pioneering estate where generations grew up around schools, cinemas, markets, and community spaces.",
    status: "preview",
    image: "assets/queenstown-estate.jpg",
    coordinatesLabel: "1.2942° N, 103.7861° E",
    memoryCue: "Schools, cinemas, estate paths, first homes",
  },
];

export const demoLocation = locations[0];
