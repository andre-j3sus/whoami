export interface Hobby {
  title: string;
  subtitle: string;
  emoji: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

export const hobbies: Hobby[] = [
  {
    title: "Reading",
    subtitle: "One Book to Rule Them All",
    emoji: "\u{1F4DA}",
    content:
      "I love reading all kinds of genres, but fantasy is my favorite. One does not simply put down a good book.",
    link: {
      url: "https://www.goodreads.com/user/show/108854374-andr-jesus",
      text: "Check out my Goodreads",
    },
  },
  {
    title: "Active Lifestyle",
    subtitle: "Who's Gonna Carry The Boats?!",
    emoji: "\u{1F4AA}",
    content:
      "Swimming for 8 years, field hockey for 4, badminton for 3. University made me switch to gym, which I now love and do regularly with friends or alone.",
  },
  {
    title: "Guitar & Music",
    subtitle: "Livin' on a prayer!",
    emoji: "\u{1F3B8}",
    content:
      "I picked up the guitar in September 2023, teaching myself with JustinGuitar and other online resources. Work and my thesis slowed me down in March 2024, but I'll be back at it soon. Rock is my jam, though my girlfriend has also pulled me into the indie scene.",
  },
  {
    title: "Travel & Food",
    subtitle: "Wander Often, Eat Well",
    emoji: "\u{1F30D}",
    content:
      "Love exploring new places and cultures, aiming for 3+ trips a year. I also really like food. Portuguese cuisine is home, but Japanese, Spanish, and Italian are close contenders.",
  },
  {
    title: "Soccer",
    subtitle: "SIUUUU!",
    emoji: "\u26BD",
    content:
      "Not a fanatic, but I love to watch a good football (or soccer for my American friends) match with a cold beer in my hand. I support Sporting Clube de Portugal since I was little, and I'm also a sympathizer of Manchester United in England.",
  },
  {
    title: "Gaming",
    subtitle: "Game On",
    emoji: "\u{1F3AE}",
    content:
      "I started gaming on a Nintendo DSi, moved to the PSP, then PC (spent countless hours playing Minecraft, CS:GO, Overwatch, and more). I also had a PS4 where I played Call of Duty, FIFA, Fortnite and Horizon Zero Dawn. My comfort game? Hollow Knight.",
    link: {
      text: "Check out my Steam profile",
      url: "https://steamcommunity.com/id/andre-jesus/",
    },
  },
];
