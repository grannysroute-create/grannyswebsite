// Book and chapter data for The $5 Ranger Squad
export interface Chapter {
  id: string;
  bookNumber: number;
  chapterNumber: number;
  title: string;
  subtitle: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
}

export interface Book {
  number: number;
  title: string;
  chapters: Chapter[];
}

export const books: Book[] = [
  {
    number: 1,
    title: "The Beginning",
    chapters: [
      {
        id: "ch0",
        bookNumber: 1,
        chapterNumber: 1,
        title: "The Four Jars",
        subtitle: "For Ranger Xander",
        sections: [
          {
            title: "The Campfire Question",
            paragraphs: [
              "The campfire crackled. Granny sat on a log with her grandson, Ranger Xander, age 10.",
              "\"Granny,\" Xander asked, \"why do you always say 'money is like camping water'?\"",
              "Granny smiled. She pulled 4 empty mason jars from her tote bag and set them on the log. \"Because if you don't plan, you run out when you need it most.\"",
              "She held up the first jar. \"This is your Camp jar. It's for tomorrow. Saving up for the big stuff — like a new tent, or college, or a car someday.\"",
              "Xander nodded. \"Like filling the RV water tank before a trip.\"",
              "\"Exactly!\" Granny said. \"Now this one,\" she tapped the second jar, \"is your Fix jar. It's for emergencies. Flat tire. Broken tablet. Surprise dentist visit.\"",
              "She held up the third jar with a smiley sticker. \"And this is your Fun jar. This is for now. Ice cream. Movies. That Lego set you want.\"",
              "Pappy walked over and picked up the 4th jar. \"And this one's shy — the Giving jar. The humble, timid, joyful jar. For paying it forward.\""
            ]
          },
          {
            title: "The $5 Test",
            paragraphs: [
              "Granny pulled a $5 bill from her wallet. \"You found $5 on the trail. You're a Ranger now. How do you split it?\"",
              "BOOM. A squirrel knocked over the Camp jar. It rolled into the fire pit.",
              "Granny grabbed it just in time. \"See? Life happens. If all your money was in Fun, and your tent ripped, what would you do?\"",
              "Xander thought hard. He put $2 in the Camp jar. \"For later.\"",
              "He put $1.50 in the Fix jar. \"For problems.\"",
              "He put $1 in the Fun jar. \"For now.\"",
              "And the last 50¢ for the Giving jar. \"For someone else.\"",
              "Pappy beamed. \"That's a Ranger split. Save some, fix some, fun some, give some.\"",
              "The fire popped, like it was clapping. The Giving jar glowed quietly."
            ]
          }
        ]
      },
      {
        id: "ch1",
        bookNumber: 1,
        chapterNumber: 2,
        title: "The Great Split",
        subtitle: "For Rangers Xander, Addie, and Bear",
        sections: [
          {
            title: "The Recap",
            paragraphs: [
              "The campfire crackled. Ranger Xander held his $5 jar tight.",
              "Crunch. Crunch. Ranger Addie, age 7, ran up, ponytail flying. \"Am I late for money school?\"",
              "Xander explained: \"Camp jar is for saving. Fix jar is for problems. Fun jar is for now. Giving jar is for paying it forward.\"",
              "Addie grinned. \"Okay, I'm caught up. Xander, split it!\""
            ]
          },
          {
            title: "Bear Arrives",
            paragraphs: [
              "Crunch. Crunch. Crunch. A little head with slicked hair popped out from behind a tree.",
              "Ranger Bear, age 5, grinned big. \"Is this money school? I wanna be a Ranger too!\"",
              "Bear scampered to the log. He pointed at the jars. \"Those for cookies?\"",
              "Fun jar spun so fast it almost tipped over."
            ]
          },
          {
            title: "The Lesson",
            paragraphs: [
              "Granny put her arm around Bear. \"No, Ranger. You learned about the Fix jar.\"",
              "Xander handed Granny $1 from the Fix jar. \"Can we buy a new Fun jar tomorrow?\"",
              "Granny: \"Your savings didn't break. Your future is still camping right there.\"",
              "Bear put his last penny into the Giving jar. \"For the next kid who breaks a jar.\"",
              "Together they shouted: \"Save some, fix some, fun some, GIVE some — just like Mom and Dad!\""
            ]
          }
        ]
      },
      {
        id: "ch2",
        bookNumber: 1,
        chapterNumber: 3,
        title: "Team Job — Camp Cleanup",
        subtitle: "For Rangers Xander, Addie, Bear & Pappy",
        sections: [
          {
            title: "Team Pappy & Granny",
            paragraphs: [
              "Vroom... putt-putt-putt. An old green RV rolled in. Out stepped Pappy, with a toolbox and a brand-new mason jar.",
              "Granny pulled 4 BIG jars from the RV — labels: HOUSEHOLD, FIXES, FUN, GIVING.",
              "Pappy held up the tiny Giving jar. \"Granny and I used ours to buy your new Fun jar, Bear.\"",
              "Bear's eyes got watery. \"You… used your Give jar for me?\"",
              "\"That's what it's for,\" Granny said. \"Joy gets louder when you share it.\""
            ]
          },
          {
            title: "The Job Offer",
            paragraphs: [
              "Pappy handed Bear tiny work gloves. \"Team job. We pay $1 for a full bag.\"",
              "\"$1?!\" Bear's eyes got huge. \"That's a whole Fun jar dollar!\"",
              "\"Rule is,\" Granny said, \"we all work, we all earn.\""
            ]
          },
          {
            title: "The Split — Team Style",
            paragraphs: [
              "Bear put 20¢ in Camp. 20¢ in Fix. 50¢ in Fun. 10¢ in Give.",
              "He held the Give jar out. \"Who wants to buy a marshmallow for the campground dog tomorrow?\"",
              "Everyone shouted: \"We do!\"",
              "Together: \"Work together, earn together, save some, fix some, fun some, GIVE some — as a team!\""
            ]
          }
        ]
      }
    ]
  },
  {
    number: 2,
    title: "The Lemonade Stand",
    chapters: [
      {
        id: "ch3",
        bookNumber: 2,
        chapterNumber: 4,
        title: "The Lemonade Stand",
        subtitle: "For Rangers Xander & Addie",
        sections: [
          {
            title: "The Business Idea",
            paragraphs: [
              "The sun was HOT. Addie wiped her forehead. \"Xander, I want more Fun jar money.\"",
              "Xander thought. \"We could sell lemonade!\"",
              "Granny smiled. \"That's called a business. But businesses have costs.\""
            ]
          }
        ]
      },
      {
        id: "ch4",
        bookNumber: 2,
        chapterNumber: 5,
        title: "The Broken Wagon",
        subtitle: "For Ranger Bear",
        sections: [
          {
            title: "The Problem",
            paragraphs: [
              "Bear's wagon wheel cracked. He started to cry.",
              "Pappy knelt down. \"Remember the Fix jar?\"",
              "Bear sniffled. \"For problems?\"",
              "\"Exactly. This is what it's for.\""
            ]
          }
        ]
      }
    ]
  },
  {
    number: 3,
    title: "The Empty Picnic Table",
    chapters: [
      {
        id: "ch5",
        bookNumber: 3,
        chapterNumber: 1,
        title: "The Empty Picnic Table",
        subtitle: "For the Rangers",
        sections: [
          {
            title: "A Hungry Family",
            paragraphs: [
              "The Rangers saw a family at the next campsite. No food on their table.",
              "\"They look hungry,\" Bear whispered.",
              "Addie looked at her Giving jar. \"I have an idea.\""
            ]
          }
        ]
      },
      {
        id: "ch6",
        bookNumber: 3,
        chapterNumber: 2,
        title: "Diane's Dollar Cornbread Lesson",
        subtitle: "For the Rangers",
        sections: [
          {
            title: "Learning to Cook",
            paragraphs: [
              "Diane showed the Rangers how to make cornbread with just $1 of ingredients.",
              "\"Cooking is like saving,\" she said. \"A little can go a long way.\""
            ]
          }
        ]
      },
      {
        id: "ch7",
        bookNumber: 3,
        chapterNumber: 3,
        title: "The Full Picnic Table",
        subtitle: "For the Rangers",
        sections: [
          {
            title: "Sharing the Meal",
            paragraphs: [
              "The Rangers brought the cornbread to the hungry family.",
              "The family's eyes lit up. \"Thank you!\"",
              "Bear smiled. \"That's our Giving jar at work!\""
            ]
          }
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Eli Joins",
    chapters: [
      {
        id: "ch8",
        bookNumber: 4,
        chapterNumber: 1,
        title: "The River Talk",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch9",
        bookNumber: 4,
        chapterNumber: 2,
        title: "The Scream",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch10",
        bookNumber: 4,
        chapterNumber: 3,
        title: "Eli Joins the Squad",
        subtitle: "For the Rangers",
        sections: []
      }
    ]
  },
  {
    number: 5,
    title: "Smoke on the Wind",
    chapters: [
      {
        id: "ch11",
        bookNumber: 5,
        chapterNumber: 1,
        title: "Smoke on the Wind",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch12",
        bookNumber: 5,
        chapterNumber: 2,
        title: "The Fire Whistle",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch13",
        bookNumber: 5,
        chapterNumber: 3,
        title: "Saundra Arrives",
        subtitle: "For the Rangers",
        sections: []
      }
    ]
  },
  {
    number: 6,
    title: "Saundra's Wheels",
    chapters: [
      {
        id: "ch14",
        bookNumber: 6,
        chapterNumber: 1,
        title: "Skrrt — Saundra's Wheels",
        subtitle: "For Saundra",
        sections: []
      },
      {
        id: "ch15",
        bookNumber: 6,
        chapterNumber: 2,
        title: "The Parking Lot Practice",
        subtitle: "For Saundra",
        sections: []
      },
      {
        id: "ch16",
        bookNumber: 6,
        chapterNumber: 3,
        title: "The Real Road Test",
        subtitle: "For Saundra",
        sections: []
      }
    ]
  },
  {
    number: 7,
    title: "Meet Diane",
    chapters: [
      {
        id: "ch17",
        bookNumber: 7,
        chapterNumber: 1,
        title: "Meet Diane — The Dancing Helper",
        subtitle: "For Diane",
        sections: []
      },
      {
        id: "ch18",
        bookNumber: 7,
        chapterNumber: 2,
        title: "Diane's Dollar Cornbread Lesson",
        subtitle: "For Diane",
        sections: []
      },
      {
        id: "ch19",
        bookNumber: 7,
        chapterNumber: 3,
        title: "The Campfire Divide",
        subtitle: "For Diane",
        sections: []
      }
    ]
  },
  {
    number: 8,
    title: "Little Legs",
    chapters: [
      {
        id: "ch20",
        bookNumber: 8,
        chapterNumber: 1,
        title: "Little Legs Arrive",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch21",
        bookNumber: 8,
        chapterNumber: 2,
        title: "Tres's Trail Test",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch22",
        bookNumber: 8,
        chapterNumber: 3,
        title: "The Sibling Graduation",
        subtitle: "For the Rangers",
        sections: []
      }
    ]
  },
  {
    number: 9,
    title: "The Storm",
    chapters: [
      {
        id: "ch23",
        bookNumber: 9,
        chapterNumber: 1,
        title: "The Sky Goes Green",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch24",
        bookNumber: 9,
        chapterNumber: 2,
        title: "The Basement Drill",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch25",
        bookNumber: 9,
        chapterNumber: 3,
        title: "After the Roar",
        subtitle: "For the Rangers",
        sections: []
      }
    ]
  },
  {
    number: 10,
    title: "The Season Closes",
    chapters: [
      {
        id: "ch26",
        bookNumber: 10,
        chapterNumber: 1,
        title: "The Season Closes",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch27",
        bookNumber: 10,
        chapterNumber: 2,
        title: "Granny's Brownie Ledger",
        subtitle: "For the Rangers",
        sections: []
      },
      {
        id: "ch28",
        bookNumber: 10,
        chapterNumber: 3,
        title: "The Last TWEET",
        subtitle: "For the Rangers",
        sections: []
      }
    ]
  }
];

export const allChapters = books.flatMap(book => book.chapters);

export function getChapterById(id: string): Chapter | undefined {
  return allChapters.find(ch => ch.id === id);
}

export function getNextChapter(currentId: string): Chapter | undefined {
  const index = allChapters.findIndex(ch => ch.id === currentId);
  return index >= 0 && index < allChapters.length - 1 ? allChapters[index + 1] : undefined;
}

export function getPreviousChapter(currentId: string): Chapter | undefined {
  const index = allChapters.findIndex(ch => ch.id === currentId);
  return index > 0 ? allChapters[index - 1] : undefined;
}

export const jarColors = {
  camp: "#22c55e",    // green
  fix: "#f59e0b",     // amber
  fun: "#ec4899",     // pink
  give: "#8b5cf6"     // purple
};
