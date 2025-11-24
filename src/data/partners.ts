// src/data/partners.ts

export type Partner = {
  name: string;
  url?: string | null;
  image: string; // must point to a file inside /public/partners/
};

export const partners: {
  monthly: Partner[];
  oneTime: Partner[];
} = {
  monthly: [
      {
        name: "Lion's Pride MM",
        url: "https://lionspridemm.com",
        image: "/partners/monthly/lions-pride-mm.jpg",
      },
      {
        name: "Mabry Family",
        url: null, // no link if they’re an individual
        image: "/partners/monthly/mabry-family.jpg",
      },
    ],
    oneTime: [
      {
        name: "Colossians Handyman",
        url: "https://colossianshandyman.com",
        image: "/partners/one-time/colossians-handyman.png",
      },
    ],
};