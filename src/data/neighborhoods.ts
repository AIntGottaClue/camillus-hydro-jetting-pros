export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "village-of-camillus",
    "name": "Village of Camillus",
    "h1": "Hydro Jetting in Village of Camillus, Camillus NY",
    "title": "Hydro Jetting in Village of Camillus, Camillus | Camillus Hydro Jetting Pros",
    "description": "Hydro jetting in the Village of Camillus, NY: how older buildings near Nine Mile Creek shape drain line questions and how cleaning gets planned. Call (877) 761-0283.",
    "intro": "The village grew up around mills on Nine Mile Creek after the Erie Canal opened. An older building may carry a mix of original and replacement pipe.",
    "heroPs": [
      "Older homes and buildings in the Village of Camillus can develop slow drains from grease, scale, roots or years of mixed repairs. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Ask what the camera shows rather than assuming the pipe from the building's age."
    ],
    "bodyH2": "Hydro Jetting for Village of Camillus Properties",
    "bodyPs": [
      "The town history describes mills along Nine Mile Creek after the Erie Canal opened, and a long record of industry in the village. A place with that much history has buildings from many periods, and many have been altered more than once.",
      "Alterations leave a mark on plumbing. A line may have been clay when installed, patched decades later, and rerouted during a renovation nobody remembers. Each detail changes what cleaning method makes sense and how much risk a high-pressure stream carries.",
      "Hydro jetting can scour grease, scale and roots from a sound pipe in a way snaking cannot. On an older line, the inspection behind it matters more than the method itself. A weak or cracked section may need repair before it needs cleaning."
    ],
    "considerations": [
      "What the line is made of, and whether it is original, patched or replaced",
      "Past repairs, renovations or reroutes, even partial records",
      "Mature trees near the path of the line",
      "Where the cleanout or access point is",
      "Whether the property is a house, a converted building or a commercial space",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Village of Camillus",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Older kitchens and small food businesses can load a line with grease over many years.",
      "tree-root-intrusions": "Mature village trees and aged joints are a common pair.",
      "recurring-clogs-and-slow-drains": "A line with a patchwork history may hold residue at the transitions.",
      "mineral-and-scale-deposits": "Scale can build up in older pipe and narrow it at joints.",
      "preventative-maintenance": "A camera look before a problem shows up helps decide what the line needs."
    },
    "appsH2": "Hydro Jetting Situations in an Older Village Center",
    "apps": [
      {
        "h": "Buildings with several generations of pipe",
        "ps": [
          "A single lateral can run from original material to a modern replacement. The crew needs to know where the changes are before using high pressure."
        ]
      },
      {
        "h": "Converted and mixed-use buildings",
        "ps": [
          "A house turned into an office or shop changes how a drain is used. Describe the current use so the inspection looks for the right loads."
        ]
      },
      {
        "h": "Roots at aged joints",
        "ps": [
          "Older joints give roots an opening. Jetting can clear them from a sound line, and the camera shows whether the opening needs repair."
        ]
      },
      {
        "h": "Planned upkeep for a known history",
        "ps": [
          "Where a line has clogged before, a cleaning paired with an inspection beats waiting for the next backup."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Village of Camillus",
    "implPs": [
      "Older villages reward a careful first look. The history in the walls is rarely documented in one place.",
      "These are the points that shape the work in the Village of Camillus."
    ],
    "impl": [
      {
        "h": "Pipe material is a question for the camera",
        "ps": [
          "Clay, cast iron and newer plastic can all appear in one building. Condition, not age, decides the method."
        ],
        "bullets": [
          "Share any repair or replacement records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Repairs and renovations",
        "ps": [
          "Past work can have moved or narrowed the line without anyone writing it down."
        ],
        "bullets": [
          "Describe any remodels you know of",
          "Ask what the camera shows at the transitions"
        ]
      },
      {
        "h": "Private line, public main",
        "ps": [
          "The village or town sewer is separate from your lateral. The location of the blockage decides who handles it."
        ],
        "bullets": [
          "Note whether neighbors have the same problem",
          "Ask the municipality about the public side"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Village of Camillus",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Find the cleanout",
        "d": "Locate the access point and note any remodel work that could have moved or covered it."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Village of Camillus, Camillus NY",
    "mapIntro": "Camillus Hydro Jetting Pros takes requests in Village of Camillus and across Camillus. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Village of Camillus, NY",
    "mapTitle": "Map of Village of Camillus, Camillus, NY",
    "nearbyH2": "Serving Village of Camillus and Nearby Camillus Neighborhoods",
    "nearbyP": "Camillus Hydro Jetting Pros serves Village of Camillus and the rest of Camillus, including Fairmount and Amboy-Belle Isle. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Village of Camillus",
    "faqs": [
      {
        "q": "Does an old village mean old pipes?",
        "a": "Not always. The age of the village is not the age of your line. Records and an inspection tell you what is in the ground at your address."
      },
      {
        "q": "Is high pressure risky for older pipe?",
        "a": "It can be if the pipe is cracked or weak. That is why a camera inspection comes first, and why some lines need repair before cleaning."
      },
      {
        "q": "What if my building has been converted for a different use?",
        "a": "Tell the crew. A change in use changes the load on the drain, and the inspection should look at what the line carries today."
      },
      {
        "q": "Can hydro jetting remove roots?",
        "a": "On a sound pipe, yes. It can flush root growth, though the opening where the roots entered may still need repair."
      },
      {
        "q": "Who is responsible for a public sewer backup?",
        "a": "The public side belongs to the municipality. A blockage in the private lateral is the property owner's to resolve."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Village of Camillus Hydro Jetting Project With Camillus Hydro Jetting Pros",
    "ctaPs": [
      "A village with this much history means every property has its own pipe story. A clear description of the symptoms and any past work gets the inspection started on solid footing.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "fairmount",
    "name": "Fairmount",
    "h1": "Hydro Jetting in Fairmount, Camillus NY",
    "title": "Hydro Jetting in Fairmount, Camillus | Camillus Hydro Jetting Pros",
    "description": "Hydro jetting in Fairmount, Camillus NY: how homes and businesses along West Genesee Street plan drain cleaning. Call (877) 761-0283.",
    "intro": "Fairmount is part of Camillus, with a business corridor along West Genesee Street. A single slow sink and several backing-up fixtures call for different checks.",
    "heroPs": [
      "Homes and businesses in Fairmount can develop slow drains from kitchen grease, scale or roots, and the mix of residential and commercial use shapes what a line carries. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Keep a record of which fixtures are affected so the crew can start in the right place."
    ],
    "bodyH2": "Hydro Jetting for Fairmount Properties",
    "bodyPs": [
      "The town identifies Fairmount as part of Camillus and describes its business corridor along West Genesee Street. Homes and businesses sit close together here, and the drain load on a restaurant, a shop and a house on the same street can look very different.",
      "A business corridor brings one extra question to a drain call. Is this a household problem, a commercial one, or a shared line? The answer decides who needs to be involved and what the cleaning should aim to remove.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. For a line that carries commercial kitchen waste or heavy daily use, grease is often the first thing to check, and an inspection shows how far it has built up."
    ],
    "considerations": [
      "Which fixtures are slow, and whether the whole property is affected",
      "Whether the line serves a house, a business or both",
      "Grease handling in any kitchen on the line",
      "Trees near the path of the lateral",
      "Where the cleanout is and whether it is easy to reach",
      "Whether neighboring properties see the same symptoms"
    ],
    "svcH2": "Hydro Jetting Services in Fairmount",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "Commercial and busy home kitchens along a corridor can build thick grease layers.",
      "tree-root-intrusions": "Roots reach lines on residential side streets as well as the main corridor.",
      "recurring-clogs-and-slow-drains": "A line with several users can slow in ways one household would not notice.",
      "mineral-and-scale-deposits": "Scale builds in lines of any use and narrows them gradually.",
      "preventative-maintenance": "Scheduled cleaning can suit properties with heavy daily drain use."
    },
    "appsH2": "Hydro Jetting Situations Along a Business Corridor",
    "apps": [
      {
        "h": "Kitchens that serve customers",
        "ps": [
          "A small food business can load a line with grease faster than a household can. Jetting strips the layer off the wall rather than opening a narrow path."
        ]
      },
      {
        "h": "Homes behind the corridor",
        "ps": [
          "Residential side streets have the usual concerns: roots, buildup and past repairs. The setting does not change those, and neither does the traffic nearby."
        ]
      },
      {
        "h": "Shared lines and shared problems",
        "ps": [
          "If several properties share a line, a backup may not start with the one that shows it. An inspection can find where the trouble begins."
        ]
      },
      {
        "h": "Upkeep on a schedule",
        "ps": [
          "A property with heavy daily drain use can benefit from planned cleaning, timed after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Fairmount",
    "implPs": [
      "Properties that mix residential and commercial use ask a different set of questions. They are worth settling before the visit.",
      "These are the points that shape the work in Fairmount."
    ],
    "impl": [
      {
        "h": "Know what the line serves",
        "ps": [
          "A line that serves more than one use needs a different plan than a single household line."
        ],
        "bullets": [
          "Describe all the users on the line",
          "Share any shared-line arrangements"
        ]
      },
      {
        "h": "Grease handling",
        "ps": [
          "Where there is a kitchen, grease is the first suspect and the most common cause."
        ],
        "bullets": [
          "Ask how grease is handled today",
          "Expect the inspection to look for buildup"
        ]
      },
      {
        "h": "Access on busy sites",
        "ps": [
          "A cleanout can sit near parking, loading areas or landscaping."
        ],
        "bullets": [
          "Locate it ahead of the visit",
          "Clear the path for the crew"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Fairmount",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Identify who uses the line",
        "d": "Note whether it serves a home, a business or both, and find the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Fairmount, Camillus NY",
    "mapIntro": "Camillus Hydro Jetting Pros takes requests in Fairmount and across Camillus. The map shows the neighborhood area, not a business office.",
    "mapQuery": "W Genesee St, Fairmount, Camillus, NY",
    "mapTitle": "Map of Fairmount, Camillus, NY",
    "nearbyH2": "Serving Fairmount and Nearby Camillus Neighborhoods",
    "nearbyP": "Camillus Hydro Jetting Pros serves Fairmount and the rest of Camillus, including Village of Camillus and Amboy-Belle Isle. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Fairmount",
    "faqs": [
      {
        "q": "Is Fairmount its own town?",
        "a": "The town identifies Fairmount as part of Camillus, which is how this page treats it."
      },
      {
        "q": "Does a business corridor change how a drain is cleaned?",
        "a": "It can. Commercial use, shared lines and grease loads all affect the plan, and the inspection should account for them."
      },
      {
        "q": "I only have one slow sink. Is that serious?",
        "a": "It may be a local clog rather than a main-line issue. Several fixtures affected at once point toward the main line."
      },
      {
        "q": "Can hydro jetting prevent grease backups?",
        "a": "Where an inspection shows grease buildup, planned cleaning can remove it before it blocks the line. Whether that makes sense depends on what the camera finds."
      },
      {
        "q": "What if neighbors have the same problem?",
        "a": "That can point to a shared or public line. Tell the crew and report it to the municipality as well."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Fairmount Hydro Jetting Project With Camillus Hydro Jetting Pros",
    "ctaPs": [
      "A corridor of homes and businesses makes it important to know what a line actually serves. A clear description of the symptoms gets the inspection pointed in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  },
  {
    "slug": "amboy-belle-isle",
    "name": "Amboy-Belle Isle",
    "h1": "Hydro Jetting in Amboy-Belle Isle, Camillus NY",
    "title": "Hydro Jetting in Amboy-Belle Isle, Camillus | Camillus Hydro Jetting Pros",
    "description": "Hydro jetting in Amboy-Belle Isle, Camillus NY: how to plan drain inspection and cleaning in a hamlet with early aviation history. Call (877) 761-0283.",
    "intro": "Amboy-Belle Isle is part of Camillus and the site of early aviation activity at Amboy. Local history is not evidence about a particular sewer pipe.",
    "heroPs": [
      "Homes in Amboy-Belle Isle can develop slow drains from grease, scale or roots, and local history tells you nothing about the line itself. Hydro jetting can clear buildup from a sound pipe when an inspection shows it is the right method. Locate your access points and note any past work before you request an inspection."
    ],
    "bodyH2": "Hydro Jetting for Amboy-Belle Isle Properties",
    "bodyPs": [
      "The town history includes Amboy-Belle Isle within Camillus and records early aviation activity at Amboy. It is an interesting piece of local history, and it says nothing about the age, material or condition of the pipes in any home.",
      "Homes in a hamlet like this tend to span a range of ages, with updates made at different times. That is why two neighbors can have very different lines, and why the first step is to look rather than assume.",
      "Hydro jetting uses a high-pressure stream of water to scour grease, scale and roots from a sound pipe wall. It does not repair a cracked pipe, so the inspection matters as much as the cleaning, and the crew should tell you plainly what the camera shows."
    ],
    "considerations": [
      "Where the cleanout or access points are",
      "Any past repairs, replaced sections or earlier cleanings",
      "Which fixtures are slow and for how long",
      "Mature trees close to the path of the lateral",
      "Whether the property is on a public sewer connection",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Amboy-Belle Isle",
    "svcLead": "A symptom usually points to one of these services. Read the page that fits, then ask for an inspection.",
    "svcNotes": {
      "severe-grease-and-sludge": "A kitchen line that backs up after cooking is a common sign of grease buildup.",
      "tree-root-intrusions": "A line that clears and then fails again may have roots entering a joint.",
      "recurring-clogs-and-slow-drains": "A drain that keeps returning to the same symptom is worth a camera inspection.",
      "mineral-and-scale-deposits": "Scale can narrow a line over time, especially in older pipe.",
      "preventative-maintenance": "A planned cleaning after an inspection can keep a small buildup from becoming a backup."
    },
    "appsH2": "Hydro Jetting Situations in a Hamlet Setting",
    "apps": [
      {
        "h": "A line that clears and fails again",
        "ps": [
          "If a drain returns to its old symptom after cleaning, roots or buildup may be re-forming. The camera shows which, and whether the pipe needs repair."
        ]
      },
      {
        "h": "Kitchen lines that back up after cooking",
        "ps": [
          "Grease is the usual cause. Jetting clears the layer from the wall rather than opening a path through it, as long as the pipe can take it."
        ]
      },
      {
        "h": "Homes with additions or updates",
        "ps": [
          "Updates made at different times can leave a line with mixed sections. Share what you know, because it changes how the cleaning should be done."
        ]
      },
      {
        "h": "Planned cleaning before the next backup",
        "ps": [
          "A line with a history of clogs will often clog again. A planned visit after an inspection beats an emergency."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Amboy-Belle Isle",
    "implPs": [
      "A hamlet setting can feel simple, and the pipe still needs a proper look. History helps tell the story of a place and little else.",
      "These are the points that shape the work in Amboy-Belle Isle."
    ],
    "impl": [
      {
        "h": "Do not infer pipe from place",
        "ps": [
          "The story of an area is not the story of a line. Records and a camera are."
        ],
        "bullets": [
          "Gather any repair records you have",
          "Ask what the camera shows"
        ]
      },
      {
        "h": "Access points",
        "ps": [
          "Cleanouts can be hard to find, especially after landscaping or additions."
        ],
        "bullets": [
          "Locate yours before the visit",
          "Clear a path to it"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Jetting clears an obstruction and does not mend a crack."
        ],
        "bullets": [
          "Ask whether the inspection shows damage",
          "Plan for a repair assessment if needed"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Amboy-Belle Isle",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Locate access points",
        "d": "Find the cleanout and note any past work, so the crew can start without a search."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Amboy-Belle Isle, Camillus NY",
    "mapIntro": "Camillus Hydro Jetting Pros takes requests in Amboy-Belle Isle and across Camillus. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Amboy, Camillus, NY",
    "mapTitle": "Map of Amboy-Belle Isle, Camillus, NY",
    "nearbyH2": "Serving Amboy-Belle Isle and Nearby Camillus Neighborhoods",
    "nearbyP": "Camillus Hydro Jetting Pros serves Amboy-Belle Isle and the rest of Camillus, including Village of Camillus and Fairmount. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Amboy-Belle Isle",
    "faqs": [
      {
        "q": "Does the area's aviation history say anything about my drains?",
        "a": "No. It is local history and not evidence about a private pipe. Only records and an inspection can speak to your line."
      },
      {
        "q": "What should I do before calling?",
        "a": "Note which fixtures are slow, when it started and where your cleanout is. That information speeds up the inspection."
      },
      {
        "q": "If a cleaning only helps for a while, why?",
        "a": "Something is probably still building up or growing in the line. Ask whether roots, grease or scale is the cause."
      },
      {
        "q": "Does hydro jetting fix cracks?",
        "a": "No. It removes an obstruction. A cracked or shifted pipe needs a repair assessment."
      },
      {
        "q": "Is hydro jetting right for every home?",
        "a": "No. The crew should check the line first and tell you whether the method fits."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Amboy-Belle Isle Hydro Jetting Project With Camillus Hydro Jetting Pros",
    "ctaPs": [
      "Every home has its own line and its own history, and an inspection is the best way to learn both. A clear description of what you are seeing gets the process started.",
      "Use the request form on this page or call (877) 761-0283 to describe the symptoms."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
