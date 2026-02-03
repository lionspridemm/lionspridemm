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

    ],
    oneTime: [
        {
            name: "Colossians Handyman",
            url: "https://colossianshandyman.com",
            image: "/partners/one-time/colossians_handyman.png",
          },
    ],
};