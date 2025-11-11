// src/app/officers/page.tsx
import type { Metadata } from "next";
import path from "path";
import fs from "fs";
import OfficerGallery from "@/components/OfficerGallery";

export const metadata: Metadata = {
  title: "Officers — Lion’s Pride MM",
  description: "Leadership team of Lion’s Pride Motorcycle Ministry.",
};

// Source of truth
const OFFICERS = [
  { name: "Don Aulbert",    nickname: "Big D",     title: "President",                  slug: "don-aulbert" },
  { name: "Angela Aulbert", nickname: "Wisdom",    title: "Secretary / Chaplain",       slug: "angela-aulbert" },
  { name: "Jeff Miller",    nickname: "Spoof",     title: "Road Captain",               slug: "jeff-miller" },
  { name: "Jon Sansoucie",  nickname: "Fish",      title: "Media Officer",              slug: "jon-sansoucie" },
  { name: "Nick Lanham",    nickname: "Grandpa",   title: "Vice President / Chaplain",  slug: "nick-lanham" },
] as const;

type OfficerDef = (typeof OFFICERS)[number];

function resolveImage(slug: string): string | null {
  const base = path.join(process.cwd(), "public", "officers");
  const full = path.join(base, `${slug}.jpg`);
  return fs.existsSync(full) ? `/officers/${slug}.jpg` : null;
}

// Testimonies keyed by slug (multi-paragraph: use backticks)
const TESTIMONIES: Record<string, string> = {
  "jon-sansoucie": `Hi, I’m Jon. I’ve always been drawn to anything with two wheels. I grew up riding ATVs and fell in love with the open air early on. These days, cruiser motorcycles are my pace; I traded daredevil speed for deeper purpose. When I went searching for a motorcycle ministry, I found Don and the Lion’s Pride, and it’s been home ever since. This brotherhood has become a family away from family, a pillar in my life built on faith, loyalty, and shared purpose.

My walk with Christ began at 26. I said the prayer and started learning who God really is, but it became real when I launched my business about 3 years ago. Suddenly I had to rely on Him daily, for provision, for wisdom, for everything. I started writing down my prayers: "Lord, help me pay the bills." "Bring me work." One by one, God showed up. He’s been showing up ever since.

Because of the love I’ve received from my Abba (God), I can’t help but want to serve His Kingdom. My heart is for acts of service, helping those who can’t help themselves. In my business I run a widows and orphans program to bless those in need. With the Pride, that same spirit carries on as we visit boys’ homes, pray with people, and pour into our community wherever God opens doors.

Through this journey I’ve learned that no one is just one thing. We’re all made of many facets, and when you surround yourself with strong believers, the best in you starts to rise. My hope is that my brothers and sisters in the Pride feel built up and encouraged by me, just as they constantly sharpen me.

In the end, I tell everyone the same thing: if you’re searching for peace or fulfillment, go get Jesus. Everything else follows.
"Seek first the kingdom of God and His righteousness, and all these things will be added to you." Matthew 6:33`,

  "don-aulbert": `Hi, I’m Don. My parents say that I had a passion for motorcycles since I could talk. They were not proponents of motorcycles, so I was not able to get my first one until I was 23 years old; I’ve had one ever since.
Christ has used motorcycles as a ministry opportunity for me. He took my passion for HIM, and my passion to ride, and planted the idea of a motorcycle ministry into my heart while sitting in church in 2014. I went down after that service to discuss this “seed” that Christ had given me with a member of the church staff, and the beginnings of the Lion’s Pride Motorcycle Ministry had begun!
God has used my motorcycle as a bridge to share my faith and God’s faithfulness to His children. My bike has opened countless doors to pray for other bikers, their friends, and their family members. It has also allowed me to celebrate as I have helped lead non-believers to eternal salvation in Christ, while also officiating a few funerals as others appreciated my faith and lifestyle to be the best version of me that I could. Some of those funerals were for believers, others were not, but they respected me and my love for Christ, and I was given the opportunity to officiate their funerals because of that.
My journey with Christ got real when I lost my oldest son’s mom to an automobile accident when he was six months old. I was 19 years old at the time, and Christ, along with family, friends, and my son, helped guide me out of a very dark time in my life.
I’ve tried to serve the Lord whenever I could, and that included many different roles and opportunities, but when He planted the idea of a motorcycle ministry in my heart, I knew that I had found my calling to serve Christ in this capacity. I was in my lane of traffic, as they say.
I have found that the motorcycle community has really expanded my opportunity to serve others and serve Christ. I have hundreds of friends that I would not have had without serving in this ministry, and because of it, most riders in the area either know of me or our ministry, the Lion’s Pride Motorcycle Ministry. Because of this, I have had opportunities to visit and pray for riders and their family members who have been hospitalized for various reasons; I have led non-believers to eternal salvation through Christ; I’ve been able to help when bikers have broken down; led individual and corporate prayers at secular biker events; and, as mentioned before, officiated a few funerals as well.
The Lion’s Pride has given, taught, and encouraged me to become a bold servant and evangelist for Christ. It has strengthened my faith, as well as helped me to become confident in sharing the gospel and becoming a warrior for Christ and HIS kingdom.
I would like to believe that my brothers and sisters in the ministry as well as outside the ministry would say that I am a man of integrity and character, and that I do my best to serve the Lord and our community, both inside and outside of motorcycles.
God has recently taught me that He always has my back and the best for me, even when it doesn’t seem like it at the time. A quote that I recently read really resonated with me. It said, “Sometimes what didn’t work out for you, really worked out for you.” I had gone through a long divorce after being married just shy of 28 years, and I was crushed. Since then, I have found and married my soulmate, and she is a wonderful woman of Christ and is literally unimaginable. Every day she blows my mind with how great she is to me and our family.
I would challenge everyone to give their life to Christ and really try to follow Him. We all fall short, but do your best to live for Christ and emulate His teachings. Do that for one year and see how different your life is after just 365 days. Give Him your heart, and He will give you eternal life.
“For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life.” John 3:16`,

  "angela-aulbert": `God has a way of leading us into chapters of our lives, sometimes without us even realizing that He has a greater plan than what we see on the surface. Hi, I'm Angela, and although riding is a new adventure for me, I have felt the calling to serve others and show them Christ's love since I was a young adult. The passion and dedication I see from the motorcycle community is inspiring, and to be able to harness and hone that intensity toward helping others find the freedom that comes from Christ's salvation is an honor. Seeing people's genuine curiosity about our bikes, followed by their even greater curiosity about our patch, opens an opportunity to minister to people of all ages and nationalities—men and women—people who may never hear or feel God's love for whatever reason. The patch opens a world of possibilities for fellowship. I didn't seek out the Lion's Pride, but I was embraced wholeheartedly by each member, truly embodying the Spirit of Christ through brotherhood. That example sparked a fire in me to continue sharing and spread the Good News through the community. Sometimes the simplest of things, like praying with a stranger while on a pit stop during a ride, can have a greater impact than we will ever know. Being a part of this ministry brings me great joy, and seeing what my Lord can do through His faithful servants on two wheels is awesome!`,

  "jeff-miller": `I was living in Boston and, while living there, I gave up my car because it was too much of a hassle and too expensive to keep. So I sold the car and started using my mountain bike to get around town. I eventually bought a little 49cc Kymco Agility scooter and then upgraded to a Honda PCX 150cc scooter. I ended up moving back to St. Louis and rode that scooter from Boston to St. Louis. I started attending a church in St. Charles called The Refuge and met a girl there who was part of the CMA Lion's Pride chapter. She invited me to go to one of the chapter meetings and go on a ride with them, which I did. Everyone was extremely welcoming and friendly toward me. Even though they were all on big Harleys and other bikes and I was on this tiny little scooter, I really enjoyed the friends and the fellowship there. About six months later, I bought my first motorcycle and I became a member of the Lion's Pride.
God has used motorcycling and mountain biking as a way to create fellowship and relationships with others and has allowed me to share the gospel in those activities. When I moved to New Mexico around 2018 I got into adventure-bike and dual-sport motorcycle riding. I've created a lot of friendships and had a lot of fellowship through that. I became a member of Fastlane Roads and Trails, and we would always go on big group rides out in the desert and the mountains together. I'm hoping to bring something like that here to Missouri.
I became a Christian when I was about 25 and had literally heard Jesus calling my name and telling me that He loved me, which was all I needed to hear at that time in my life. So I asked Christ into my life before I even understood what Christianity—and how to become saved—was all about. It's been a long, difficult, and challenging road, but I've learned so much about what it means to be a Christian and to love others. Every lesson I've been through has made me a better, stronger person. Christ is the center of my life, and I let Him lead me in everything I do, whether it's riding some mountainous trail out into the wilderness or the desert, or even on city streets in the urban jungle. I love the thrill and adventure of riding and sharing that passion with others and sharing my faith with them.
One of the things that my brothers in the Lion's Pride chapter will say about me is, "Don't follow him. You won't make it." Why they decided to make me Road Captain? Well, I'm still trying to figure that out. Don't worry though, we have fun and safe rides!! lol
One lesson that God has been teaching me is trusting Him in all aspects of my life—that He'll provide with His grace and provision no matter what happens.`,

  "nick-lanham": `My desire to have a motorcycle was always something I dreamed of but never considered until one of my sons got his first bike in his twenties. My wife "made" me take the MSF with him so that he wouldn't be doing it by himself. My stipulation was: if I got my endorsement, I was getting a bike. So, at 50-something... I got my first bike. My son lived several miles away, so I was searching for like-minded people to ride with. And since I was new to riding, I searched and found a group of folks who loved to ride and, more importantly, loved Jesus. I found Lion's Pride...
Since a very early age I was drawn to Christ. However, growing up being drawn to Him and having an intimate relationship with Him were totally different, and it took me years to figure that out. At 21 I lost my parents in an automobile accident. Over the years I lost sight of my Lord and didn't really care if I found Him. But He never lost sight of me. With a lot of prayers from my wife, mother-in-law, and father-in-law, I found Jesus again and realized that all the BAD things that had happened to me really didn't happen to ME. My Lord loves me for who I am, not for what I have been.
Ministering to other folks has never been easy for me, but always something I knew I was called to do... Matthew 4:19 "Come, follow me, and I will make you fishers of men." Well, I love to fish and I love to ride... they definitely go together.
I know that God works in His ways and in His timeline. What I don't know is why He works with the broken to save the lost... but He does.
Come join in the fun and ride with the Pride.`,
};

export default function OfficersPage() {
  const officers = OFFICERS.map((o: OfficerDef) => ({
    name: o.name,
    title: o.title,
    nickname: o.nickname,
    image: resolveImage(o.slug),
    testimony:
      (TESTIMONIES[o.slug]?.trim()?.length ?? 0) > 0
        ? TESTIMONIES[o.slug]
        : "Testimony coming soon.",
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-white">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Officers</h1>
      </header>

      <OfficerGallery officers={officers} />
    </section>
  );
}
