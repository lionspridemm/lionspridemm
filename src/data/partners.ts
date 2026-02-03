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

    ],
};