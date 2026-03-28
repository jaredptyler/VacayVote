// ============================================================
// TRIP PLANNER — ITINERARY DATA
// ============================================================
// To add a new activity, copy the template at the bottom of
// this file, fill in each field, and add it to ITINERARY_ITEMS.
//
// Image URLs: Find a photo at https://unsplash.com, click it,
// right-click the image → Copy Image Address, then trim to:
//   https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80
// ============================================================

export const TRIP_CONFIG = {
  name: "Charleston & Savannah Adventure",
  year: 2026,
  days: 5,
  travelers: 7,
  destinations: ["Charleston, SC", "Savannah, GA"]
};

export const FAMILY_MEMBERS = [
  "Jared T.",
  "Jessica",
  "Audrey",
  "Jake",
  "Jacquie",
  "Wendy",
  "Dennis"
];

// ── ITEM TEMPLATE ───────────────────────────────────────────
// Copy this block and fill it in to add a new activity:
//
// {
//   id: "unique-slug",              // kebab-case, no spaces, must be unique
//   city: "charleston",             // "charleston" or "savannah"
//   group: "activities",            // "activities" or "food"
//   title: "Activity Name",
//   location: "Neighborhood, City, SC/GA",
//   category: "Culture & History",  // Food & Dining, Beach, Adventure, etc.
//   priceLevel: "$$",               // "$", "$$", "$$$", or "Free"
//   duration: "2 Hours",
//   rating: 4.8,
//   reviewCount: 215,
//   shortDescription: "One punchy sentence that hooks the reader.",
//   longDescription: `Paragraph one.\n\nParagraph two.\n\nParagraph three.`,
//   pullQuote: {
//     text: "A quote about this experience.",
//     attribution: "— First Name L., City"
//   },
//   reviews: [
//     { initials: "AB", name: "Alex B.", date: "Spring 2025", text: "Short review." },
//     { initials: "CD", name: "Chris D.", date: "Fall 2024", text: "Another review." }
//   ],
//   imageUrl: "https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80"
// },
// ────────────────────────────────────────────────────────────

export const ITINERARY_ITEMS = [

  // ══ CHARLESTON, SC ══════════════════════════════════════════


  {
    id: "chs-fort-sumter",
    city: "charleston",
    group: "activities",
    title: "Fort Sumter Boat Tour",
    location: "Charleston Harbor, Charleston, SC",
    category: "History & Adventure",
    priceLevel: "$$$",
    duration: "3 Hours",
    rating: 4.7,
    reviewCount: 892,
    shortDescription: "Board a ferry to the island fort where the Civil War's first shots were fired — a powerful piece of American history right in Charleston Harbor.",
    longDescription: `The boat ride out to Fort Sumter is half the experience — Charleston's famous skyline recedes behind you as pelicans skim the harbor's surface and the Atlantic breeze picks up. The fort itself is a study in quiet drama: crumbling brick walls, silent cannon batteries, and a flag that flies defiantly over the spot where the nation split.

Park rangers tell the story with surprising nuance, covering both Confederate and Union perspectives with equal care. The museum inside holds original artillery shells, regimental flags, and period photographs that bring the scale of the conflict into focus.

Plan about 3 hours total including the ferry crossing. Children are often surprised by how engaging the history becomes when you're standing in the exact spot where it happened — it's one of those rare historic sites that lives up to its reputation.`,
    pullQuote: {
      text: "Our kids knew the history from school, but standing inside the fort made everything click in a way textbooks never could.",
      attribution: "— David L., Atlanta"
    },
    reviews: [
      { initials: "PB", name: "Patricia B.", date: "Summer 2024", text: "Buy tickets in advance — sells out on weekends. Worth every penny." },
      { initials: "MW", name: "Mark W.", date: "Spring 2025", text: "The boat ride alone is worth it for the harbor views. History is a bonus." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1628700300389-3a09d6ca6f9a?w=800&q=80"
  },

  {
    id: "chs-city-market",
    city: "charleston",
    group: "activities",
    title: "Charleston City Market",
    location: "188 Meeting St, Charleston, SC",
    category: "Shopping & Culture",
    priceLevel: "$",
    duration: "1.5 Hours",
    rating: 4.6,
    reviewCount: 2100,
    shortDescription: "A four-block open-air marketplace where Gullah artisans weave sweetgrass baskets alongside vendors selling pralines, jewelry, and local art.",
    longDescription: `Charleston City Market has operated continuously since 1804, making it one of the oldest public markets in America. The long brick sheds stretch four blocks from Meeting Street toward the Cooper River, and inside you'll find everything from handmade sweetgrass baskets to local honey, pecan pralines, handcrafted jewelry, and original paintings of the Lowcountry.

The Gullah basket-weavers are the market's true heart. Watching them work is mesmerizing — each basket is coiled from native sweetgrass, bulrush, and palmetto, an art form brought from West Africa that's now recognized as a UNESCO cultural treasure. Each basket can take twenty or more hours to complete, and every one is unique.

Budget time to browse, taste, and chat with the vendors. The market is covered and breezy, making it a great mid-day respite from the Charleston heat. The nearby restaurants on North Market Street make a natural lunch stop afterward.`,
    pullQuote: {
      text: "I bought a sweetgrass basket that's now the centerpiece of my living room. Three years later it still makes me happy.",
      attribution: "— Caroline F., Raleigh"
    },
    reviews: [
      { initials: "LH", name: "Laura H.", date: "April 2025", text: "Arrive early before the cruise ship crowds. Morning is magical in here." },
      { initials: "DM", name: "Dan M.", date: "Winter 2024", text: "The praline samples alone are worth the trip inside." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1715734086507-596aa78a4927?w=800&q=80"
  },

  {
    id: "chs-magnolia-plantation",
    city: "charleston",
    group: "activities",
    title: "Magnolia Plantation & Gardens",
    location: "3550 Ashley River Rd, Charleston, SC",
    category: "Nature & History",
    priceLevel: "$$",
    duration: "3 Hours",
    rating: 4.7,
    reviewCount: 1560,
    shortDescription: "America's oldest public garden — 500 acres of azalea-draped swamps, wildlife refuge, and antebellum grounds wrapped in Spanish moss.",
    longDescription: `Magnolia Plantation has been owned by the same family since 1676, making it one of the oldest continuously owned properties in the South. The gardens themselves are the main event: 500 acres of romantic, slightly wild beauty where bridges arch over black-water swamps, ancient live oaks stretch their limbs nearly to the ground, and azaleas explode in clouds of pink and white every spring.

The estate is refreshingly honest about its history — the slavery narratives are thoughtfully and prominently presented, and the Gullah culture tour offered on the grounds is among the best in the region. Rent a bike to cover more ground, or take the tram if the heat is fierce.

The wildlife refuge section is exceptional for nature lovers: egrets, herons, anhingas, wood ducks, and alligators are all regular residents. This is one of those places that rewards a slow pace — rush through it and you'll miss the magic.`,
    pullQuote: {
      text: "Otherworldly beautiful — like walking through a Southern Gothic painting brought to life.",
      attribution: "— Helen R., Columbia"
    },
    reviews: [
      { initials: "TN", name: "Tyler N.", date: "March 2025", text: "Go in spring when the azaleas are in bloom — absolutely stunning." },
      { initials: "AP", name: "Anna P.", date: "Fall 2024", text: "Allow at least three hours. It's much larger and more beautiful than it looks on a map." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1762626095771-7ad8989fa4c3?w=800&q=80"
  },


  {
    id: "chs-sullivans-island",
    city: "charleston",
    group: "activities",
    title: "Sullivan's Island Beach Day",
    location: "Sullivan's Island, SC",
    category: "Beach & Relaxation",
    priceLevel: "Free",
    duration: "Half Day",
    rating: 4.8,
    reviewCount: 618,
    shortDescription: "A quiet, local-loved barrier island beach with wide sands, a lighthouse, and a laid-back vibe — Charleston's best-kept beach secret.",
    longDescription: `Sullivan's Island sits just across Charleston Harbor from the peninsula — a short drive over the Ben Sawyer Bridge — and it feels like a different world from the tourist buzz of downtown. The beach is wide, clean, and rarely crowded: a long arc of pale sand backed by sea oats and the occasional pastel beach cottage.

The waves are gentle enough for children, and the water is warm from late May through October. Walk to the southern tip to see Fort Moultrie, another Revolutionary War site, or stroll north along the beach to the 1962 lighthouse. Station 22 is the locals' brunch spot; grab a table on the porch and watch the pelicans patrol the shoreline.

Parking is free and relatively easy to find outside of July 4th weekend. Pack a cooler, bring sunscreen, and plan to stay all day. The sunset from the beach — with the lights of Charleston visible across the harbor — is one of the great free sights of the Lowcountry.`,
    pullQuote: {
      text: "Half an hour from downtown and we had the beach almost entirely to ourselves on a Tuesday.",
      attribution: "— Chris M., Greenville"
    },
    reviews: [
      { initials: "KL", name: "Kim L.", date: "July 2024", text: "Our favorite spot of the whole trip. Less crowded than Folly Beach and so much prettier." },
      { initials: "BT", name: "Ben T.", date: "June 2025", text: "The sunset from here with the Charleston skyline in the background is unforgettable." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616991597521-9d4de40aba0d?w=800&q=80"
  },

  {
    id: "chs-husk-dinner",
    city: "charleston",
    group: "food",
    title: "Husk Restaurant Dinner",
    location: "76 Queen St, Charleston, SC",
    category: "Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.9,
    reviewCount: 2340,
    shortDescription: "The restaurant that put Southern farm-to-table dining on the national map — housed in a 19th-century mansion where every ingredient hails from below the Mason-Dixon line.",
    longDescription: `Chef Sean Brock opened Husk in a historic Queen Anne house on Queen Street in 2010, and it immediately became one of the most celebrated restaurants in America. The rule is simple and radical: if it's not from the South, it doesn't come through the door. That devotion to place produces menus that change daily based on what farmers and fishers deliver that morning.

Expect wood-fired heritage pork, line-caught local fish, heirloom grains ground in-house, and vegetables that taste like they were picked hours ago — because they were. The bar program is equally committed: Southern whiskeys, local craft beers, and seasonal cocktails made with foraged herbs and house-preserved fruit.

The verandah tables overlooking Queen Street are among the most coveted dining seats in Charleston. Reserve two to three weeks in advance, especially on weekends. Dress is smart casual; the vibe is celebratory without being stuffy.`,
    pullQuote: {
      text: "The best meal of our entire trip, and we'd eaten extremely well all week.",
      attribution: "— Monica P., Washington DC"
    },
    reviews: [
      { initials: "GH", name: "Greg H.", date: "May 2025", text: "Book early — this place deserves its reputation and it shows in the reservations." },
      { initials: "NW", name: "Natalie W.", date: "Spring 2024", text: "The cast iron skillet cornbread alone is worth making a reservation." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1774509619298-5ee42287b75b?w=800&q=80"
  },

  {
    id: "chs-waterfront-park",
    city: "charleston",
    group: "activities",
    title: "Waterfront Park & Pineapple Fountain",
    location: "Vendue Range, Charleston, SC",
    category: "Sightseeing",
    priceLevel: "Free",
    duration: "1 Hour",
    rating: 4.7,
    reviewCount: 1890,
    shortDescription: "Charleston's beloved harbor park with its iconic pineapple fountain, swinging benches, and the perfect spot to watch the shrimp boats come home.",
    longDescription: `Waterfront Park stretches along the Cooper River at the foot of Vendue Range, offering some of the finest harbor views in Charleston without costing a cent. The star attraction is the Pineapple Fountain — a 12-foot cast-bronze symbol of Southern hospitality where children splash happily on hot afternoons and visitors inevitably stop for photographs.

But wander past the fountain toward the long pier and you'll find the park's real treasure: a row of swinging benches facing the open harbor, where container ships, sailboats, and the Fort Sumter ferry share the sparkling water. The shaded lawn is perfect for a picnic; the breezes are nearly constant, making this the coolest spot in downtown on a hot afternoon.

Sunsets here are spectacular — the light turns the steeples of the French Quarter gold behind you while the harbor blazes pink and orange ahead. It's become one of Charleston's most beloved gathering spots for exactly this reason.`,
    pullQuote: {
      text: "We came back every evening to watch the sunset from the swinging benches. It never got old.",
      attribution: "— Susan K., Ohio"
    },
    reviews: [
      { initials: "PT", name: "Phil T.", date: "August 2024", text: "Free, beautiful, breezy, and right in the heart of everything. A must." },
      { initials: "LM", name: "Lisa M.", date: "Spring 2025", text: "The kids loved wading in the pineapple fountain — bring a change of clothes!" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1601237089652-48cf3d839139?w=800&q=80"
  },

  {
    id: "chs-ghost-tour",
    city: "charleston",
    group: "activities",
    title: "Ghost Tour of Historic Charleston",
    location: "French Quarter, Charleston, SC",
    category: "Entertainment",
    priceLevel: "$$",
    duration: "1.5 Hours",
    rating: 4.6,
    reviewCount: 967,
    shortDescription: "Charleston is one of America's most haunted cities — lantern-lit evening walks through 300 years of duels, pirates, yellow fever, and restless spirits.",
    longDescription: `Charleston's history is long, violent, and genuinely strange — which makes it perfect ghost tour territory. The city saw yellow fever epidemics that killed thousands in weeks, pirate executions on the waterfront, dueling grounds with a body count, and a civil war fought within earshot of its church bells.

Evening ghost tours wind through the darkest corners of the French Quarter and the Unitarian churchyard, where grave markers lean at unsettling angles beneath a canopy of Spanish moss so thick it blocks the stars. The guides — historians with a flair for the dramatic — share stories that are more folklore and social history than cheap scares, making these tours genuinely educational as well as atmospheric.

Several companies run tours nightly; Bulldog Tours and Ghosts of Charleston both have excellent reputations. Tours run rain or shine. Children over ten generally love these; younger kids may find it too intense after dark. Either way, you'll see parts of the city you'd never find on your own.`,
    pullQuote: {
      text: "Scary in the best way — our guide clearly knew the history as well as the horror.",
      attribution: "— Rick D., New York"
    },
    reviews: [
      { initials: "EF", name: "Emily F.", date: "October 2024", text: "Bulldog Tours' Haunted Jail tour is the best one. Incredibly atmospheric." },
      { initials: "CM", name: "Chris M.", date: "Spring 2025", text: "Much more history than horror — perfect for curious families with older kids." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1543420578-0ddb5065f316?w=800&q=80"
  },

  {
    id: "chs-shem-creek-kayak",
    city: "charleston",
    group: "activities",
    title: "Kayaking through Shem Creek",
    location: "Shem Creek, Mount Pleasant, SC",
    category: "Adventure & Nature",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 445,
    shortDescription: "Paddle through tidal creeks and marsh behind Mount Pleasant, past shrimp boats and egrets, with the Charleston skyline gleaming in the distance.",
    longDescription: `Shem Creek is where Charleston's working shrimp boat fleet ties up, and paddling through it by kayak puts you at water level with the rusted hulls and weather-beaten wood of the vessels that supply the city's tables. The scale and texture of the boats — up close and personal — is something you simply can't appreciate from the shore.

Beyond the boats, the creek opens into the vast Lowcountry marsh: a labyrinth of tidal channels framed by cordgrass where dolphins are common visitors and roseate spoonbills occasionally turn the water pink. Several outfitters offer guided two-hour tours at sunrise and sunset, both magical in different ways. The creek is calm and protected from wind, making it approachable for beginners of all ages.

Combine your paddle with dinner at one of the waterfront restaurants on the creek's north bank afterward — watching the shrimp boats return under the evening light while you eat fresh-caught seafood is one of those Lowcountry moments that stays with you.`,
    pullQuote: {
      text: "We saw three dolphins in the first twenty minutes. Absolutely wild. Best two hours of the trip.",
      attribution: "— Jen B., Charlotte"
    },
    reviews: [
      { initials: "MR", name: "Mark R.", date: "June 2024", text: "The sunrise tour is the one to book — fewer crowds, golden light, dolphins everywhere." },
      { initials: "TL", name: "Tara L.", date: "July 2025", text: "Easy for complete beginners. The guides were patient and wonderful with the kids." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1550515710-9324b8e4262e?w=800&q=80"
  },


  // ══ SAVANNAH, GA ════════════════════════════════════════════

  {
    id: "sav-forsyth-park",
    city: "savannah",
    group: "activities",
    title: "Forsyth Park & Historic District Walk",
    location: "Forsyth Park, Savannah, GA",
    category: "Culture & History",
    priceLevel: "Free",
    duration: "2 Hours",
    rating: 4.9,
    reviewCount: 3200,
    shortDescription: "Savannah's grand Victorian park anchors a city of 22 historic squares — the most livable, walkable, and photographically perfect city in the American South.",
    longDescription: `Forsyth Park is the 30-acre green heart of Savannah, dominated by its ornate 1858 cast-iron fountain — a near-twin to one in Paris's Place de la Concorde. On weekend mornings, the park fills with farmers' market vendors, joggers circling the perimeter, and families settled on blankets under the live oaks.

From the park, Savannah's famous grid of 22 squares radiates outward in every direction — each square a shaded outdoor room furnished with benches, monuments, and Spanish moss overhead. Walking the squares is the best introduction to the city: Chippewa Square (where Forrest Gump sat on his bench), Madison Square with its Civil War memorial, Monterey Square with the famous Mercer-Williams House from Midnight in the Garden of Good and Evil.

A guided walking tour gives you the history; a solo wander gives you the feeling. Either way, budget at least two hours — and resist the urge to rush. Savannah rewards the slow pace.`,
    pullQuote: {
      text: "I've never felt so immediately at home in a city I'd never visited before. We stayed two hours longer than planned.",
      attribution: "— Kate H., Chicago"
    },
    reviews: [
      { initials: "SW", name: "Steve W.", date: "March 2025", text: "Saturday morning at the farmers market in Forsyth Park is an absolute must." },
      { initials: "DP", name: "Dana P.", date: "April 2024", text: "Walk every square — each one has its own distinct character and history." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1773759769991-90a5fdc03a48?w=800&q=80"
  },

  {
    id: "sav-bonaventure-cemetery",
    city: "savannah",
    group: "activities",
    title: "Bonaventure Cemetery Tour",
    location: "330 Bonaventure Rd, Savannah, GA",
    category: "History & Culture",
    priceLevel: "$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 1120,
    shortDescription: "One of America's most beautiful cemeteries — a Victorian garden of moss-shrouded oaks, marble angels, and extraordinary Lowcountry melancholy.",
    longDescription: `Bonaventure Cemetery became famous when John Berendt featured it in Midnight in the Garden of Good and Evil, but its beauty predates any book by a century. Established in 1846 on a bluff overlooking the Wilmington River, the cemetery is planted with ancient live oaks draped so heavily with Spanish moss that noon feels like dusk beneath their canopy.

The monuments range from simple headstones to elaborate family mausoleums and weeping marble figures that have turned green with age. Johnny Mercer, the Savannah-born composer of Moon River, is buried here in a simply beautiful plot. Guided tours reveal the stories behind the names; self-guided walks with a map from the gatehouse office are equally rewarding.

Spring brings azaleas in shocking pink bloom against the gray stone — a combination that feels simultaneously lush and melancholy. It is, paradoxically, one of the loveliest places you'll visit on the entire trip.`,
    pullQuote: {
      text: "Hauntingly beautiful in a way I wasn't prepared for. I didn't want to leave.",
      attribution: "— Patricia L., Boston"
    },
    reviews: [
      { initials: "HG", name: "Henry G.", date: "April 2025", text: "Go in the morning before the tour buses arrive. The solitude is part of the magic." },
      { initials: "AL", name: "Amanda L.", date: "Spring 2024", text: "Bring a book and just sit under the oaks for a while. Pure magic." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1773760504351-b1e1243ec866?w=800&q=80"
  },


  {
    id: "sav-wormsloe",
    city: "savannah",
    group: "activities",
    title: "Wormsloe Historic Site",
    location: "7601 Skidaway Rd, Savannah, GA",
    category: "Nature & History",
    priceLevel: "$",
    duration: "2 Hours",
    rating: 4.9,
    reviewCount: 890,
    shortDescription: "A 1.5-mile avenue of 400 ancient live oaks forming a cathedral canopy — the most dramatic entrance of any historic site in Georgia.",
    longDescription: `Nothing in Savannah prepares you for that first sight of Wormsloe's entrance drive: 1.5 miles of ancient live oaks stretch overhead in a perfect green tunnel, their branches interlocking into a cathedral canopy that filters the light into shifting, dappled patterns on the road below. It's one of those sights that stops conversation cold.

Noble Jones established Wormsloe in 1737 — just four years after Savannah was founded — making it one of Georgia's oldest documented estates. The tabby ruins of his fortified house still stand at the end of the drive, and the site includes hiking trails through maritime forest, a living history area demonstrating 18th-century colonial skills, and a small but excellent museum covering Georgia's colonial period.

Wormsloe is one of those rare places that photographs brilliantly but is even more powerful in person. The scale and silence of the oak avenue stop most visitors in their tracks. Plan to walk slowly, look up often, and stay longer than you think you will.`,
    pullQuote: {
      text: "I've visited a lot of the South over the years, but nothing quite like this avenue of oaks. Nothing.",
      attribution: "— George K., Tennessee"
    },
    reviews: [
      { initials: "CP", name: "Claire P.", date: "March 2025", text: "Go in the morning for the best light on the oak tunnel. Afternoon light is beautiful too." },
      { initials: "BM", name: "Brian M.", date: "April 2024", text: "Underrated gem — one of our favorite stops on the entire trip, and it surprised us most." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1487451686860-7507fcd0d65e?w=800&q=80"
  },

  {
    id: "sav-leopolds-ice-cream",
    city: "savannah",
    group: "food",
    title: "Leopold's Ice Cream",
    location: "212 E Broughton St, Savannah, GA",
    category: "Food & Treats",
    priceLevel: "$",
    duration: "30 Minutes",
    rating: 4.9,
    reviewCount: 4100,
    shortDescription: "A Savannah institution since 1919 — hand-cranked ice cream in flavors like honey almond and rum bisque, served in a gleaming art-deco parlor downtown.",
    longDescription: `Leopold's is not just an ice cream shop; it is a Savannah pilgrimage. Founded in 1919 by three Greek immigrant brothers, the original location closed in 1969 and was magnificently resurrected in 2004 by Stratton Leopold — who also happened to be a Hollywood film producer, hence the movie memorabilia and signed posters covering every wall.

The ice cream is hand-cranked in the old family tradition using fresh milk, cream, and egg yolks — no shortcuts, no cutting corners. Signature flavors include Tutti Frutti (the original house flavor from 1919), honey almond, and the cult favorite rum bisque. The parlor itself is a beauty: marble countertops, gleaming soda fountains, red leather stools, and an atmosphere that hasn't been artificially manufactured — it simply never left.

Expect a line out the door; it moves quickly and is entirely worth it. Walk two blocks south and eat your scoop in Chippewa Square, the very spot where Forrest Gump sat on his bench.`,
    pullQuote: {
      text: "The best ice cream I've ever had, in the most charming setting imaginable. I went back the next day.",
      attribution: "— Claire T., Richmond"
    },
    reviews: [
      { initials: "HT", name: "Hannah T.", date: "July 2024", text: "The rum bisque flavor is genuinely life-changing. Don't miss it." },
      { initials: "OP", name: "Oliver P.", date: "Summer 2025", text: "Go mid-morning to avoid the longest lines. Worth every minute of the wait." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1639413466302-34600bf7f72b?w=800&q=80"
  },

  {
    id: "sav-tybee-island",
    city: "savannah",
    group: "activities",
    title: "Tybee Island Lighthouse & Beach",
    location: "Tybee Island, GA",
    category: "Beach & Sightseeing",
    priceLevel: "$$",
    duration: "Half Day",
    rating: 4.8,
    reviewCount: 1670,
    shortDescription: "Georgia's oldest and tallest lighthouse crowns a barrier island with 3 miles of Atlantic beach — a perfect full-day family escape from the city.",
    longDescription: `Tybee Island is just 18 miles east of Savannah and feels like a world away. The island's main draw is its broad, relaxed beach — three miles of Atlantic coastline that's warm enough to swim from late April through October. The vibe is unmistakably laid-back coastal Georgia: ice cream shops, surf rentals, and seafood shacks all within walking distance of the sand.

The Tybee Island Light Station is the oldest and tallest lighthouse in Georgia, dating to 1736. Climbing its 178 steps rewards you with panoramic views of the Georgia coast and the shipping channel that leads back to Savannah. The nearby marine science center is excellent for children, with touch tanks and on-site sea turtle rehabilitation.

AJ's Dockside for steamed shrimp and The Crab Shack for a quintessential Georgia coastal experience are both institutions worth building your afternoon around. The drive back to Savannah at sunset, with the marsh turning gold on both sides of the highway, is itself a worthy memory.`,
    pullQuote: {
      text: "The lighthouse climb, the beach, the seafood — a perfect Georgia day from start to finish.",
      attribution: "— Linda F., Columbia"
    },
    reviews: [
      { initials: "RM", name: "Ryan M.", date: "August 2024", text: "Parking fills up fast in summer — arrive before 9 AM to get a good spot." },
      { initials: "KP", name: "Kelly P.", date: "June 2025", text: "The lighthouse climb is absolutely worth it. Views go on for miles." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1658521790408-7a5cb53e1778?w=800&q=80"
  },

  {
    id: "sav-mrs-wilkes",
    city: "savannah",
    group: "food",
    title: "Mrs. Wilkes Dining Room",
    location: "107 W Jones St, Savannah, GA",
    category: "Southern Dining",
    priceLevel: "$$",
    duration: "1.5 Hours",
    rating: 4.9,
    reviewCount: 2890,
    shortDescription: "A legendary boarding-house-style restaurant serving Savannah's most beloved Southern lunch — pass the biscuits, please.",
    longDescription: `Mrs. Wilkes Dining Room on Jones Street has been feeding Savannah since 1943, and the formula has never changed: long communal tables, strangers sharing bowls, and an all-you-can-eat spread of Southern cooking that arrives like a delicious avalanche. It is one of the most purely Southern dining experiences in America.

Fried chicken, collard greens, black-eyed peas, cornbread, sweet potato soufflé, squash casserole, macaroni pie, candied yams — the table fills with a dozen sides before the main course even appears. There's no menu; you eat what they cook, and what they cook changes daily and is always exceptional.

Lunch runs Monday through Friday, 11 AM to 3 PM. The line forms by 10:30 on most days — arrive early or expect to wait. The communal seating is half the magic: you'll be elbow-to-elbow with strangers within minutes and leave feeling like you shared something. Cash only, and worth every dollar.`,
    pullQuote: {
      text: "I grew up in Georgia and this is better than anything my grandmother ever made. I can't believe I'm saying that.",
      attribution: "— Dorothy S., Augusta"
    },
    reviews: [
      { initials: "MB", name: "Mike B.", date: "April 2025", text: "Arrive by 10:45 — the line can be an hour wait by noon and it is absolutely worth it." },
      { initials: "FR", name: "Felicia R.", date: "Winter 2024", text: "Cash only. Worth every penny and then some. Go twice if you can." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1586793783658-261cddf883ef?w=800&q=80"
  },

  {
    id: "sav-riverboat-cruise",
    city: "savannah",
    group: "activities",
    title: "Savannah Riverboat Dinner Cruise",
    location: "River Street Docks, Savannah, GA",
    category: "Dining & Entertainment",
    priceLevel: "$$$",
    duration: "2.5 Hours",
    rating: 4.5,
    reviewCount: 1340,
    shortDescription: "Board the Georgia Queen for a two-hour cruise on the Savannah River with live music, a Southern buffet, and the city's glowing skyline drifting past.",
    longDescription: `The Savannah Riverboat Company's dinner cruises depart from the dock at River Street aboard replica 19th-century steamboats — the Georgia Queen and the Savannah River Queen. The two-hour cruise heads upriver past the container ship terminals, then back past Savannah's illuminated skyline as the sun sets behind the city's steeples.

The Southern buffet is generous: shrimp, carved meats, seasonal vegetables, and a full dessert station. Live entertainment — typically a local band playing classic rock, Motown, or Southern soul — keeps the energy up on the open-air top deck, where the breeze and the views compete for your attention.

It's unapologetically touristy and completely wonderful, especially for groups who want a contained, festive experience with no logistics required beyond the reservation. Saturday night cruises sell out weeks in advance — book early. The moment Savannah's waterfront lights come on as you glide past is worth the ticket price alone.`,
    pullQuote: {
      text: "Corny? Maybe. Unforgettable? Absolutely. We'd do it again in a heartbeat.",
      attribution: "— Tom W., Philadelphia"
    },
    reviews: [
      { initials: "EG", name: "Ellen G.", date: "May 2025", text: "Book the Saturday dinner cruise — the live band was fantastic and the food was genuinely good." },
      { initials: "JL", name: "Joe L.", date: "Summer 2024", text: "Watching the city all lit up from the water as the sun goes down is simply stunning." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1691388205972-325956f0dfec?w=800&q=80"
  },

  {
    id: "sav-cathedral",
    city: "savannah",
    group: "activities",
    title: "Cathedral of St. John the Baptist",
    location: "222 E Harris St, Savannah, GA",
    category: "Architecture & History",
    priceLevel: "Free",
    duration: "1 Hour",
    rating: 4.9,
    reviewCount: 1560,
    shortDescription: "The crown jewel of Savannah's skyline — a soaring Gothic Revival cathedral with hand-painted Austrian stained glass and 200 years of unbroken history.",
    longDescription: `The Cathedral of St. John the Baptist was established by French Catholic Haitian refugees in 1799 — just 66 years after Savannah's founding — and the current structure, a French Gothic Revival masterpiece completed in 1876, dominates the skyline of Lafayette Square with twin 212-foot spires visible from miles away.

Inside, the cathedral stuns with quiet authority: 75 hand-painted art-glass windows imported from Austria flood the interior with jewel-colored light, while intricate hand-painted murals in the Venetian Renaissance tradition cover the nave walls and ceiling. The Italian marble altarpiece is among the finest in the American South. The scale of it all — the height, the color, the detail — takes time to fully absorb.

Visitors are welcome during non-service hours; a self-guided tour brochure is available at the entrance. The cathedral sits directly across Lafayette Square from the Flannery O'Connor Childhood Home, making this square a natural hub for an afternoon of Savannah culture.`,
    pullQuote: {
      text: "I'm not religious, but this place stopped me cold. It's a genuine work of art in every sense of the phrase.",
      attribution: "— Robert E., Charlotte"
    },
    reviews: [
      { initials: "VH", name: "Victoria H.", date: "March 2025", text: "The Austrian stained glass in afternoon light is absolutely otherworldly. Time your visit for 3–4 PM." },
      { initials: "DC", name: "David C.", date: "April 2024", text: "Free to visit and one of the most spectacular interiors in the entire South." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1599608214241-a1cb12078919?w=800&q=80"
  },

  {
    id: "sav-bee-company",
    city: "savannah",
    group: "food",
    title: "Savannah Bee Company Tasting",
    location: "104 W Broughton St, Savannah, GA",
    category: "Food & Shopping",
    priceLevel: "$",
    duration: "45 Minutes",
    rating: 4.8,
    reviewCount: 760,
    shortDescription: "A boutique honey emporium with free tastings of award-winning varietal honeys — meadowfoam, tupelo, orange blossom — in a beautiful Broughton Street shop.",
    longDescription: `The Savannah Bee Company began with a single beekeeper in 2002 and has grown into one of America's most celebrated artisan honey producers, with their flagship store on Broughton Street remaining the best place to experience the full breadth of what honey can be.

The free tasting bar invites you to work your way through a dozen or more varietal honeys — each named for the dominant flower the bees visited, each with a dramatically different flavor profile. Tupelo honey (light, floral, almost buttery) is the local legend, harvested from a short window each spring in the swamps of northwest Florida and Georgia. Whipped honeys in seasonal flavors are the most popular take-home gifts. The staff at the tasting bar are genuinely passionate and make the 30-minute experience feel like a mini-education.

The shop also carries beeswax candles, natural skin care, and mead. It's a relaxed, aromatic, utterly charming stop that pairs beautifully with a walk up Broughton Street afterward.`,
    pullQuote: {
      text: "I never knew honey could taste so different from one flower to the next. A genuine revelation for the whole family.",
      attribution: "— Anne M., Savannah"
    },
    reviews: [
      { initials: "BL", name: "Beth L.", date: "April 2025", text: "Best gift shop in Savannah. Bought six jars of different varieties and regret nothing." },
      { initials: "TM", name: "Tim M.", date: "Winter 2024", text: "The tupelo honey is unlike anything I've tasted. Don't leave without at least one jar." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1556316837-79012fec6b47?w=800&q=80"
  },

  // ── NEW CHARLESTON ACTIVITIES ──────────────────────────────

  {
    id: "chs-carriage-tour",
    city: "charleston",
    group: "activities",
    title: "Historic Carriage Tour",
    location: "14 Anson St, Charleston, SC",
    category: "Culture & History",
    priceLevel: "$$",
    duration: "1 Hour",
    rating: 4.7,
    reviewCount: 3200,
    shortDescription: "Clip-clop through 300 years of history aboard a horse-drawn carriage winding past antebellum mansions, Rainbow Row, and the Battery.",
    longDescription: `Old South Carriage Company's certified guides narrate one of the most information-dense hours you can spend in Charleston — threading through the historic district in a covered carriage that holds up to 16 passengers, past blocks of pastel-painted antebellum homes, the famous rainbow of Rainbow Row, and out to the Battery with its sweeping harbor views and artillery-lined promenade. The horses know the route by heart, the cobblestones rattle pleasantly underfoot, and the whole thing feels just theatrical enough to be memorable without tipping into kitsch.\n\nGuides are required to pass a comprehensive city history exam before they're certified, so the commentary is genuinely substantive — you'll hear about the role Charleston played as the wealthiest city in colonial America, the economics of the rice and indigo trade, and the architectural peculiarities of the single house form found almost nowhere else. It's a great orientation tour if you've just arrived and want to calibrate your bearings before exploring on foot, and equally rewarding on a second or third visit when the history has more context.\n\nFor a group of seven, book in advance — departures run frequently from the Anson Street stand but fill up fast during peak season. The covered carriage makes this viable even if there's a light rain. Kids are engaged by the horses themselves, and the 60-minute length is well-calibrated for mixed ages.`,
    pullQuote: {
      text: "Our guide had answers for every question we threw at him — dates, names, architecture, scandal. Best hour we spent in Charleston.",
      attribution: "— Patricia M., Atlanta"
    },
    reviews: [
      { initials: "RH", name: "Rachel H.", date: "Spring 2025", text: "The covered carriage was perfect for our group. Guide was funny and genuinely knowledgeable — not just a script." },
      { initials: "BK", name: "Brian K.", date: "Fall 2024", text: "Rainbow Row in the late afternoon light from a slow-moving carriage is exactly as good as it sounds." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1760192402700-de4181da4f71?w=800&q=80"
  },

  {
    id: "chs-ghost-carriage",
    city: "charleston",
    group: "activities",
    title: "Haunted Ghost Carriage Tour",
    location: "14 Anson St, Charleston, SC",
    category: "Entertainment",
    priceLevel: "$$",
    duration: "45 Minutes",
    rating: 4.6,
    reviewCount: 1870,
    shortDescription: "An after-dark horse-drawn ride through Charleston's most haunted sites — the Provost Dungeon, shadowed churchyards, and gaslit streets where history turns sinister.",
    longDescription: `Charleston consistently ranks among the most haunted cities in America, and the evening ghost carriage tour makes a compelling case for why. Departing after dark from Anson Street, the route threads through streets that look almost unchanged from the 18th century — the gas lamps, the deep shadows between the buildings, the overhanging live oaks — and the atmosphere does half the guide's work before a word is spoken. The certified drivers and narrators know their material cold: the Provost Dungeon where pirates and Patriots were held in brutal conditions, the churchyards with their tilted stones and restless legends, and the storied corridors of antebellum homes where violent histories left marks.\n\nThe stories themselves are well-researched — grounded in actual historical events rather than pure invention — which gives them a weight that purely fictional ghost tales lack. You'll hear about the documented hauntings of the Unitarian Church Cemetery, the strange fate of the Sorrel-Weed House, and Charleston's long relationship with grief and loss that goes back centuries. The guides calibrate the intensity well: unsettling but never gratuitous, and the family-appropriate framing means it works for tweens and adults alike.\n\nThe 45-minute runtime is exactly right for the format — long enough to cover meaningful ground, short enough to hold attention as dusk deepens. Go on a weeknight if possible; weekend tours fill up and the streets feel busier. A light jacket is worth bringing even in warm months once the sun drops below the roofline.`,
    pullQuote: {
      text: "I laughed at myself for getting genuinely creeped out. The Provost Dungeon section alone was worth the ticket.",
      attribution: "— Marcus T., Nashville"
    },
    reviews: [
      { initials: "SL", name: "Sarah L.", date: "October 2024", text: "Our 13-year-old loved it — the right amount of spooky without being over the top. Perfect evening activity." },
      { initials: "PW", name: "Paul W.", date: "Spring 2025", text: "The guides really know their history. These aren't made-up ghost stories — they're real events that happened to real people." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1766760067511-58e804f732d3?w=800&q=80"
  },

  {
    id: "chs-fossil-tour",
    city: "charleston",
    group: "activities",
    title: "Megalodon Fossil Hunting Tour",
    location: "Folly Beach / Ashley River, Charleston, SC",
    category: "Adventure & Nature",
    priceLevel: "$$",
    duration: "4 Hours",
    rating: 4.9,
    reviewCount: 412,
    shortDescription: "Wade the shallow rivers around Charleston in search of actual Megalodon teeth — some the size of your hand — in one of the richest fossil grounds in the world.",
    longDescription: `South Carolina's coastal rivers and barrier island shores sit atop a geological bonanza: the same forces that make the Lowcountry feel ancient have been exposing Miocene-era fossils — shark teeth, whale bones, Ice Age mammal remains — for generations of collectors. The guided fossil hunting tours based out of Charleston take small groups to productive sites on the Ashley River and nearby barrier islands, where sharp eyes can find genuine Megalodon teeth ranging from thumbnail-sized fragments to palm-filling specimens that stop you mid-stride.\n\nThe guides are experts at spotting the subtle triangular shapes and dark fossilized color that separate a shark tooth from an ordinary pebble, and they'll work with beginners patiently until your eye calibrates. Finding your first Megalodon tooth — even a small one, knowing it belonged to a 60-foot shark that swam these waters 15 million years ago — is a genuinely electric moment. Kids go absolutely feral for this activity in the best possible way. Everything you find, you keep.\n\nThe four-hour format allows time to reach productive spots and work them properly without rushing. Wear clothes and shoes you don't mind getting muddy and wet — this is wading through shallow water on river beaches, not a manicured nature walk. Sunscreen and water bottles are essential. For a group with a range of ages, this is one of the most universally engaging activities the Charleston area offers.`,
    pullQuote: {
      text: "My son found a Megalodon tooth the size of his fist. He's talked about nothing else for three months.",
      attribution: "— Jennifer K., Charlotte"
    },
    reviews: [
      { initials: "DM", name: "David M.", date: "Summer 2024", text: "Best activity we did on the whole trip. Our whole family was competing to find the biggest tooth. Absolutely addictive." },
      { initials: "LR", name: "Lisa R.", date: "Spring 2025", text: "Guide was phenomenal — spotted teeth I walked right past. Found six teeth total, including two Megalodon fragments." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1759850426022-2c7ba6d03b59?w=800&q=80"
  },

  {
    id: "chs-cypress-gardens",
    city: "charleston",
    group: "activities",
    title: "Cypress Gardens Swamp & Butterfly House",
    location: "3030 Cypress Gardens Rd, Moncks Corner, SC",
    category: "Nature & Sightseeing",
    priceLevel: "$",
    duration: "3 Hours",
    rating: 4.6,
    reviewCount: 2100,
    shortDescription: "Paddle a flat-bottom boat through an 80-acre blackwater cypress swamp draped in Spanish moss — then walk among hundreds of free-flying butterflies.",
    longDescription: `Twenty-four miles north of Charleston, Cypress Gardens offers something increasingly rare: a truly wild-feeling landscape you can paddle right into. The 80-acre freshwater swamp is dominated by ancient bald cypress trees whose knobbed roots rise from the dark mirror-black water, their branches hung with trailing Spanish moss that filters the light into something cathedral-like. Flat-bottom rowboats are available to explore on your own — there's no motor, no guide, just the creak of oars and the occasional splash of a turtle dropping from a log.\n\nGuided pontoon boat tours run on a schedule for those who prefer narration, but the self-guided rowing experience is harder to replicate elsewhere. Great blue herons patrol the shallows, anhingas hang their wings out to dry on low branches, and if the water is still you can see everything reflected so perfectly it's disorienting. The adjacent butterfly house shelters hundreds of free-flying North American butterfly species in an enclosed garden — a complete tonal shift that kids tend to love as a second act after the swamp.\n\nThe complex also includes an alligator pond, a freshwater swamparium with native species on display, and several miles of walking trails through the surrounding forest. Admission is around $10 for adults, making this one of the best-value half-day excursions in the entire Charleston area. Arrive mid-morning to avoid the hottest hours, and bring bug spray regardless of season.`,
    pullQuote: {
      text: "Rowing through that cypress swamp in the early morning mist felt like a dream. Pure magic — and completely unlike anything else in the region.",
      attribution: "— Caroline B., Richmond"
    },
    reviews: [
      { initials: "TN", name: "Tom N.", date: "April 2025", text: "We spent two hours rowing and never wanted to leave. The reflections on the water are unreal. Worth the 30-minute drive from Charleston." },
      { initials: "MF", name: "Megan F.", date: "Fall 2024", text: "Butterfly house was the surprise highlight for the kids. But the swamp is the main event — absolutely stunning." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1771471381406-a4500e2c20e0?w=800&q=80"
  },

  {
    id: "chs-angel-oak",
    city: "charleston",
    group: "activities",
    title: "Angel Oak Tree",
    location: "3688 Angel Oak Rd, Johns Island, SC",
    category: "Nature & History",
    priceLevel: "Free",
    duration: "1 Hour",
    rating: 4.8,
    reviewCount: 5400,
    shortDescription: "A 400-to-500-year-old live oak whose canopy spans 17,000 square feet — one of the most magnificent living things in North America.",
    longDescription: `On Johns Island, about 20 minutes southwest of downtown Charleston, stands one of the oldest living things east of the Mississippi River. The Angel Oak is estimated to be between 400 and 500 years old — meaning it was already a mature tree when the first European settlers arrived on this coast. Its trunk measures 28 feet in circumference, and its massive, ground-sweeping limbs extend outward in every direction, some of them dipping back down to touch the earth, creating a living architecture unlike anything most people have ever seen.\n\nThe sheer scale of it requires several minutes of slow walking around to fully process. Some branches are longer than the height of a six-story building. The canopy covers 17,000 square feet and creates a cathedral-like space of filtered light and deep shade beneath it. Photography barely captures it — the experience is fundamentally three-dimensional in a way that doesn't flatten well — but everyone tries anyway. The tree predates the United States, predates Charleston's founding, predates the plantation system that shaped this landscape.\n\nAdmission is free, parking is easy, and the small gift shop is worth a browse. Arrive early in the morning to beat the crowds and catch the low light filtering through the canopy — mid-morning on a weekday is ideal. Johns Island is also home to some excellent farms and farm stands, making a quick stop at the Oak a natural pairing with a broader island loop.`,
    pullQuote: {
      text: "Nothing prepares you for it. You walk around the corner and suddenly there it is — this enormous living thing that has been here for half a millennium.",
      attribution: "— Sandra P., Boston"
    },
    reviews: [
      { initials: "GW", name: "Greg W.", date: "March 2025", text: "One of the most genuinely awe-inspiring things I've ever seen. Don't skip this — it's free and unforgettable." },
      { initials: "AH", name: "Amy H.", date: "Spring 2024", text: "Arrive at 8am before the tour buses. The early light through those branches is something else entirely." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?w=800&q=80"
  },

  {
    id: "chs-tea-garden",
    city: "charleston",
    group: "activities",
    title: "Charleston Tea Garden",
    location: "6617 Maybank Hwy, Wadmalaw Island, SC",
    category: "Culture & Nature",
    priceLevel: "$",
    duration: "2 Hours",
    rating: 4.5,
    reviewCount: 1320,
    shortDescription: "The only working tea plantation in North America — 127 acres of rolling Camellia sinensis on a sea island, with a free factory tour and tram ride through the fields.",
    longDescription: `About 30 minutes southwest of Charleston on Wadmalaw Island, the Charleston Tea Garden occupies 127 acres of gently rolling fields planted entirely with Camellia sinensis — the tea plant. This is the only commercial tea plantation in North America, and the American Classic Tea produced here has been served at White House state functions and sold across the country for decades. The setting alone is quietly remarkable: orderly rows of dark green tea bushes stretching across an island landscape that feels distinctly un-American in the best possible way.\n\nFree factory tours walk you through the harvesting, withering, rolling, and drying process — the full arc from leaf to bag — in a working facility that processes real production runs, not a museum replica. The garden tram ride (modest additional charge) rolls you through the fields at a pace slow enough to actually look at the plants, with commentary on growing season, varietals, and harvesting methods. The gift shop stocks the full line of American Classic teas along with Charleston-specific blends and tea accessories, and the tasting station lets you sample before you buy.\n\nThis is a genuinely unusual destination — there's nothing quite like it within several hundred miles — and the island setting adds a layer of peacefulness that makes it feel like a proper escape. Combine it with a visit to Kiawah Island or Wadmalaw's other farm stands and you have a full relaxed island day.`,
    pullQuote: {
      text: "I expected a pleasant curiosity. What I got was an hour of genuine discovery — I had no idea how much went into a cup of tea.",
      attribution: "— Helen C., Washington DC"
    },
    reviews: [
      { initials: "JM", name: "Janet M.", date: "Summer 2025", text: "The tram ride through the fields is worth every penny. Incredibly peaceful and very informative." },
      { initials: "RS", name: "Robert S.", date: "Spring 2024", text: "Only tea plantation in the US — that alone makes it worth the drive. Gift shop has excellent selections to take home." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1766040677463-29943737eb19?w=800&q=80"
  },

  {
    id: "chs-drayton-hall",
    city: "charleston",
    group: "activities",
    title: "Drayton Hall Plantation",
    location: "3380 Ashley River Rd, Charleston, SC",
    category: "History & Architecture",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.7,
    reviewCount: 890,
    shortDescription: "The only colonial plantation house on the Ashley River preserved in original condition — no furniture, no restoration, just 285 years of unvarnished truth.",
    longDescription: `Built in 1738 for John Drayton, Drayton Hall stands alone among Ashley River plantations as the one that was never modernized, never restored, and never furnished for the tourist gaze. Seven generations of the Drayton family owned it and declined to update it, which means what you walk through today is an 18th-century Palladian villa in essentially original condition — plaster walls showing their age, heart-pine floors worn smooth by three centuries of feet, and a great hall proportioned with a mathematical precision that hasn't been softened by interior decoration.\n\nWhat makes Drayton Hall genuinely exceptional among plantation sites is the interpretive approach. The tours take an honest, unflinching look at the enslaved people who built this structure, who worked it, and whose labor underpinned every aspect of the Drayton family's wealth and influence. The guides are extraordinarily well-prepared, and the storytelling doesn't flinch from difficult material — this is one of the few plantation sites in the South that meets that history with the seriousness it deserves. A National Trust Historic Site since 1974, it operates with an academic rigor unusual in heritage tourism.\n\nThe grounds include the African American Cemetery, where the only marked grave is that of an enslaved man named Richmond, and interpretive stations throughout the landscape. The two-hour visit is calibrated just right — long enough to absorb the house and the stories, short enough to stay focused. For families with older kids and teenagers, this is one of the most thought-provoking experiences available anywhere in the region.`,
    pullQuote: {
      text: "I've visited a lot of plantation sites. This is the only one I've left feeling like I actually understood what I was looking at.",
      attribution: "— Professor James W., Durham"
    },
    reviews: [
      { initials: "KL", name: "Katherine L.", date: "April 2025", text: "The interpreter was brilliant — one of the best museum experiences I've had in years. The unfurnished rooms are somehow more powerful than any decorated house." },
      { initials: "NB", name: "Nathan B.", date: "Winter 2024", text: "Took our teenagers here. They were quiet for the whole drive home — which tells you everything you need to know." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1773606517376-f6b0e04ea322?w=800&q=80"
  },

  {
    id: "chs-sea-turtle",
    city: "charleston",
    group: "activities",
    title: "SC Aquarium & Sea Turtle Care Center",
    location: "100 Aquarium Wharf, Charleston, SC",
    category: "Nature & Education",
    priceLevel: "$$",
    duration: "2.5 Hours",
    rating: 4.6,
    reviewCount: 4800,
    shortDescription: "A waterfront aquarium overlooking Charleston Harbor with a working sea turtle rehabilitation hospital where you watch real injured wild turtles recover before release.",
    longDescription: `The South Carolina Aquarium sits on the Charleston Harbor waterfront with views across to Patriots Point, and its two-and-a-half hours of programming is dense enough to stay genuinely engaging throughout. The main galleries move through the full spectrum of South Carolina's aquatic ecosystems — mountain streams, piedmont rivers, coastal wetlands, and open ocean — in a sequence that tells a coherent ecological story while keeping the visual interest high. The shark tank and stingray touch pool are predictable highlights, but the quality of the animal husbandry throughout is unusually high.\n\nThe Sea Turtle Care Center is the jewel of the facility and the reason it stands apart from comparable aquariums. This is a fully operational wildlife hospital treating real injured and sick wild sea turtles — loggerheads, Kemp's ridleys, greens — that were found stranded on South Carolina beaches. Large observation windows let you watch the veterinary team work, and detailed signboards for each patient explain the animal's rescue story, diagnosis, and rehabilitation plan. Watching a loggerhead that was found hypothermic on a November beach regain strength in a rehab tank puts the whole ecosystem in a different frame.\n\nFor families with younger kids, the aquarium calibrates well: the two-and-a-half-hour visit rarely feels rushed, there's room to linger at the touch tanks, and the harbor-front location means you can walk the waterfront afterward. Harbor View at the aquarium offers a decent casual lunch option, and the gift shop proceeds support the turtle hospital.`,
    pullQuote: {
      text: "The sea turtle hospital broke my heart and put it back together. Watching the vets work on that loggerhead was the highlight of our whole trip.",
      attribution: "— Christine P., Philadelphia"
    },
    reviews: [
      { initials: "MK", name: "Mike K.", date: "Summer 2025", text: "The turtle care center alone is worth the price of admission. Real medicine happening behind the glass — kids were absolutely transfixed." },
      { initials: "ST", name: "Susan T.", date: "Spring 2024", text: "Beautifully done aquarium with a genuinely moving conservation mission. Harbor views from the upper deck are spectacular too." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1709219629818-d257ede40778?w=800&q=80"
  },

  {
    id: "chs-old-exchange",
    city: "charleston",
    group: "activities",
    title: "Old Exchange & Provost Dungeon",
    location: "122 E Bay St, Charleston, SC",
    category: "History & Culture",
    priceLevel: "$",
    duration: "1 Hour",
    rating: 4.5,
    reviewCount: 1640,
    shortDescription: "One of America's most important colonial buildings hides a genuinely harrowing underground dungeon where Blackbeard's crew — and later Patriot leaders — were imprisoned.",
    longDescription: `Completed in 1771 at the foot of Broad Street, the Old Exchange and Customs House was the political and commercial nerve center of colonial Charleston — the building where South Carolina's delegates to the Continental Congress were elected, where George Washington was entertained on his 1791 Southern tour, and where the Stamp Act was publicly rejected by a furious merchant class. The Georgian Palladian facade is one of the finest examples of colonial public architecture still standing in America, and the great hall upstairs retains its proportions intact.\n\nBut what most visitors remember is what's underneath. Half-Exchange half-dungeon from its earliest days, the cellar level served as the Provost — a holding facility where pirates, political prisoners, and captured Patriots were confined in conditions that were genuinely brutal. Blackbeard's crew was held here after their capture off the Carolina coast in 1718. Three South Carolina signers of the Declaration of Independence were imprisoned here by the British during the occupation of Charleston in 1780. The partial remains of the original Half-Moon Bastion from the 1690s fortification wall are embedded in the dungeon floor — one of the most archaeologically significant features in the state.\n\nGuided tours are offered throughout the day and run about 45 minutes; the costumed interpreters are well-informed and the atmosphere underground is genuinely affecting. At roughly $14 for adults, this is one of the most undervalued history experiences in Charleston — consistently overlooked in favor of flashier sites, and better than most of them.`,
    pullQuote: {
      text: "I walked past this building three times before I finally went in. It's one of the most significant colonial sites in the country — and almost no one knows it.",
      attribution: "— Thomas R., Boston"
    },
    reviews: [
      { initials: "EP", name: "Ellen P.", date: "Spring 2025", text: "The dungeon is not theatrical — it's real. Knowing Blackbeard's crew actually sat in that room made the hair stand up on the back of my neck." },
      { initials: "CJ", name: "Charles J.", date: "Fall 2024", text: "Underrated gem. Better than most of the better-known sites in Charleston. The history here is dense and expertly presented." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1645319639077-0834f959fafc?w=800&q=80"
  },

  {
    id: "chs-gateway-walk",
    city: "charleston",
    group: "activities",
    title: "Gateway Walk",
    location: "St. John's Lutheran Church to Gibbes Museum, Charleston, SC",
    category: "Culture & History",
    priceLevel: "Free",
    duration: "45 Minutes",
    rating: 4.4,
    reviewCount: 680,
    shortDescription: "A hidden half-mile footpath threading through four historic churchyards in the heart of downtown — centuries-old gravestones, iron gates, and azaleas that most tourists never find.",
    longDescription: `In 1930, the Garden Club of Charleston created a secret passage through the city that still surprises visitors who stumble upon it nearly a century later. The Gateway Walk links four historic churchyards — St. John's Lutheran, St. Philip's Episcopal, the Unitarian Church, and the First Baptist Church — via a series of wrought-iron gates and garden paths that run parallel to the main tourist streets but feel entirely removed from them. For most of its half-mile length, you are walking through active churchyards dating to the 1700s, surrounded by moss-covered stones that mark the graves of colonial merchants, Revolutionary War figures, and antebellum families.\n\nThe walk terminates at the Gibbes Museum of Art on Meeting Street, and the whole experience takes about 45 minutes at a leisurely pace — though it rewards slow walkers who read the inscriptions and notice the details. In spring, the azaleas that line the churchyard walls turn the walk into something from a garden painting. In any season, the contrast between the quiet, shadowed interior gardens and the busy streets just a few steps away is striking.\n\nThe walk is entirely free, entirely self-guided, and almost entirely unmarked — which is part of what makes it feel like a discovery. Pick up a map at the visitor center on Meeting Street or simply find the first gate on King Street between Clifford and George. This is Charleston at its most intimate, and it's one of the few experiences that doesn't feel at all designed for tourism.`,
    pullQuote: {
      text: "We stumbled onto this by accident and ended up spending 45 minutes reading gravestones from the 1740s. It was the most Charleston thing that happened to us all week.",
      attribution: "— Margaret D., Washington DC"
    },
    reviews: [
      { initials: "JB", name: "James B.", date: "April 2025", text: "I've been to Charleston a dozen times and never knew this existed. Hidden gem in every sense." },
      { initials: "KP", name: "Kate P.", date: "Spring 2024", text: "The Unitarian churchyard section is particularly beautiful — quiet, old, and utterly peaceful in the middle of downtown." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1523130421316-2b267da06842?w=800&q=80"
  },

  {
    id: "chs-pitt-street-bridge",
    city: "charleston",
    group: "activities",
    title: "Pitt Street Bridge Sunset Walk",
    location: "Pitt Street Bridge, Mount Pleasant, SC",
    category: "Nature & Sightseeing",
    priceLevel: "Free",
    duration: "1 Hour",
    rating: 4.7,
    reviewCount: 920,
    shortDescription: "A converted 1920s railroad trestle jutting over the marsh toward Charleston Harbor — pelicans, herons, golden light, and almost no tourists.",
    longDescription: `At the end of Pitt Street in Mount Pleasant's Old Village neighborhood, a 1920s railroad bridge has been quietly converted into one of the most rewarding free walks in the Charleston area. The bridge extends several hundred feet over the marsh grass and tidal creek toward the open harbor, with views back toward the Ravenel Bridge and the Charleston skyline in one direction and open marsh, herons, and egrets in the other. At golden hour on a clear afternoon, the whole thing turns amber and indigo, and the light on the water and the grass is the kind that makes people stop walking and just stand.\n\nThe bridge attracts almost no tour buses and feels genuinely off the main tourist track even though it's just minutes from the causeway back to Charleston. The Old Village neighborhood around it is one of Mount Pleasant's oldest and most walkable — tree-lined streets, historic bungalows, and the beloved Pitt Street Pharmacy and soda fountain a few blocks back, which has been serving malts and milkshakes since 1930.\n\nFor a group that wants a low-key late afternoon that doesn't involve admission fees or reservations, this is an ideal combination: walk the bridge in the hour before sunset, then wander the Old Village streets and stop at the pharmacy for a milkshake before driving into Charleston for dinner. The whole excursion costs nothing, requires no planning, and produces some of the best casual photographs of any trip to the Lowcountry.`,
    pullQuote: {
      text: "Pelicans landing on the pilings ten feet away, the Ravenel Bridge in the distance, and the marsh turning gold — completely free, completely unforgettable.",
      attribution: "— David L., Chicago"
    },
    reviews: [
      { initials: "AR", name: "Anna R.", date: "Summer 2025", text: "Best sunset spot in the entire Charleston area and almost nobody knows about it. Combine with the Old Village pharmacy for a perfect afternoon." },
      { initials: "WH", name: "Will H.", date: "Spring 2025", text: "We stumbled here on a Tuesday evening. Pelicans, herons, empty bridge, golden marsh. Didn't want to leave." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1754054881316-03a00ba48b7d?w=800&q=80"
  },

  {
    id: "chs-folly-beach",
    city: "charleston",
    group: "activities",
    title: "Folly Beach Day",
    location: "Folly Beach, SC",
    category: "Beach & Relaxation",
    priceLevel: "$",
    duration: "Half Day",
    rating: 4.7,
    reviewCount: 3100,
    shortDescription: "Charleston's beloved 'Edge of America' beach town — a full afternoon of crashing waves, the iconic fishing pier, colorful shops, cold drinks, and fresh seafood.",
    longDescription: `Folly Beach earns its nickname, the Edge of America, with good reason. Just 12 miles from downtown Charleston, this laid-back barrier island has a distinct personality: surf-worn beach shacks, palm-dotted streets, and a local vibe that doesn't apologize for itself. The wide Atlantic beach stretches for six miles, and the consistent waves make it the most surf-friendly stretch in South Carolina — boards available to rent all along the main drag.

The 1,045-foot Folly Beach Fishing Pier is the neighborhood's centerpiece, jutting straight out over the Atlantic and offering spectacular views up and down the coast. Even if you don't fish, the walk out to the end feels like stepping into a postcard. Below the pier, the beach opens up into one of the best family-friendly swim spots in the area.

Center Street, Folly's main strip, runs right to the beach and is lined with locally owned shops, beachwear boutiques, and seafood restaurants with outdoor decks. Grab lunch at one of the shack-style joints, browse the art galleries and souvenir stores, then plant yourself on the sand for the afternoon. The vibe is unmistakably coastal South Carolina — unhurried, a little funky, and genuinely fun.`,
    pullQuote: {
      text: "Way more character than any beach town has a right to have. We ended up spending the whole day without even trying.",
      attribution: "— Jenna P., Atlanta"
    },
    reviews: [
      { initials: "ML", name: "Marcus L.", date: "Summer 2025", text: "The pier at sunset is worth the whole drive. Grab some fish and chips and walk out to the end." },
      { initials: "TP", name: "Tara P.", date: "June 2024", text: "Perfect beach town energy — no pretense, great food, easy parking, and the waves are actually fun." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
  },

  {
    id: "chs-shrimp-boil",
    city: "charleston",
    group: "activities",
    title: "Backyard Shrimp Boil with Captain B",
    location: "Charleston, SC",
    category: "Food & Culture",
    priceLevel: "$$",
    duration: "3 Hours",
    rating: 4.9,
    reviewCount: 187,
    shortDescription: "A classic Lowcountry shrimp boil — shrimp, sausage, corn, and Old Bay straight off a steamboat, served backyard-style by the local legend known as Captain B.",
    longDescription: `The Lowcountry shrimp boil is as much ritual as meal: a massive pot, a roaring burner, and a mix of fresh local shrimp, smoked andouille, corn on the cob, and new potatoes tumbling out onto a newspaper-covered table. Captain B has been doing this longer than most people can remember, running one of the most beloved backyard-style shrimp boil experiences in the Charleston area.

This is a genuinely local experience — nothing polished or packaged about it. You'll stand around outside, beer in hand, watching the pot, swapping stories, and waiting for the moment when Captain B says it's time. Then it all comes out in one steaming, Old Bay-scented pile, and everyone digs in. The kind of meal that creates family memories that outlast any restaurant reservation.

Groups are a natural fit: the format is communal, the pace is relaxed, and the informality of it all tends to dissolve any pretense. Plan on eating more than you expect, wearing something you don't mind getting Old Bay on, and leaving with a story worth telling.`,
    pullQuote: {
      text: "I've eaten at every fancy restaurant in Charleston. This shrimp boil was the best meal of the whole trip.",
      attribution: "— Steve R., Charlotte"
    },
    reviews: [
      { initials: "DT", name: "Dana T.", date: "Spring 2025", text: "Captain B is a character and a half. The shrimp were straight off the boat. Absolute highlight of our trip." },
      { initials: "MK", name: "Mark K.", date: "Summer 2024", text: "Bring napkins, wear old clothes, and come hungry. Worth every penny and then some." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80"
  },

  {
    id: "chs-true-crime-tour",
    city: "charleston",
    group: "activities",
    title: "True Crime & Murder Mystery Tour",
    location: "Historic District, Charleston, SC",
    category: "Tours & Entertainment",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 512,
    shortDescription: "Charleston's darkest true-crime history told at the actual crime scenes — poisonings, murders, and unsolved cases from a city with centuries of secrets.",
    longDescription: `Charleston has been accumulating secrets since 1670, and not all of them are the polite kind preserved in museum pamphlets. The True Crime & Murder Mystery tour takes a different approach to the city's history: walking you through the actual locations of notorious crimes, unsolved murders, and genuinely disturbing episodes from Charleston's past, told by guides who know exactly how to make the hair on the back of your neck stand up.

Unlike the standard ghost tours, this one focuses on verified historical crimes — documented poisonings, sensational society scandals, and cases that gripped the city in their day. The dark alleys and locked garden gates of the historic district take on a different quality when you're hearing about what actually happened inside them. The same beautiful architecture that draws photographers during daylight carries entirely different energy after the sun goes down.

The tour is entertaining and theatrical without being exploitative — think true crime podcast energy with a live guide and the actual streets as the stage. Perfect for the group member who rolls their eyes at ghost stories but loves a well-told dark history. Usually runs in the evening, roughly two hours, with a mix of walking and gathering at key locations.`,
    pullQuote: {
      text: "Way more gripping than any ghost tour. These are real cases and the guide clearly knows their stuff. We were hooked the whole time.",
      attribution: "— Carla M., Nashville"
    },
    reviews: [
      { initials: "BH", name: "Brandon H.", date: "Fall 2024", text: "Our group was divided on ghost tours, so we did this instead. Everyone loved it. So much better than made-up stories." },
      { initials: "LS", name: "Laura S.", date: "Spring 2025", text: "Genuinely creepy, historically accurate, and totally entertaining. Charleston's history is dark and this tour doesn't shy away from it." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&q=80"
  },

  {
    id: "chs-dolphin-tour",
    city: "charleston",
    group: "activities",
    title: "Dolphin Watching Boat Tour",
    location: "Charleston Harbor, Charleston, SC",
    category: "Nature & Adventure",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 1420,
    shortDescription: "Cruise Charleston Harbor and the Intracoastal Waterway in search of the resident bottlenose dolphins that call this stretch of coastline home year-round.",
    longDescription: `The bottlenose dolphins that live in Charleston Harbor and the surrounding tidal creeks are year-round residents — not seasonal visitors — which means any time of year, a boat tour stands an excellent chance of genuine dolphin encounters in the wild. Local captains know exactly where to find them, and the dolphins in this area are known for their curiosity, often riding the bow wake of passing boats and surfacing close enough for a perfect photograph.

The tour typically runs out through the harbor past Fort Sumter, then into the tidal creeks and marshes where dolphins hunt and socialize in the shallows. Egrets and ospreys are common sightings along the way, and on a clear day the downtown Charleston skyline frames the whole scene beautifully from the water. The city looks completely different — and undeniably magnificent — from the harbor looking in.

Most tours run about two hours and accommodate groups well. The combination of wild dolphin encounters, harbor views, sea breezes, and the Charleston skyline makes this one of the best experiences the city offers for a family — a genuinely memorable few hours that adults and kids enjoy equally.`,
    pullQuote: {
      text: "Three dolphins surfaced right off the bow. My kids still talk about it months later.",
      attribution: "— Kim R., Charlotte"
    },
    reviews: [
      { initials: "GS", name: "Greg S.", date: "Summer 2025", text: "We saw a pod of eight dolphins, including a baby. The captain knew exactly where to go. Absolutely do this one." },
      { initials: "AB", name: "Amy B.", date: "Spring 2025", text: "Perfect morning on the water. Fort Sumter views, great captain, dolphins within arm's reach. Best two hours of our trip." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80"
  },

  // ── NEW CHARLESTON FOOD ────────────────────────────────────

  {
    id: "chs-rodney-scotts",
    city: "charleston",
    group: "food",
    title: "Rodney Scott's Whole Hog BBQ",
    location: "1011 King St, Charleston, SC",
    category: "Southern Dining",
    priceLevel: "$",
    duration: "1 Hour",
    rating: 4.8,
    reviewCount: 2900,
    shortDescription: "James Beard Award-winning whole-hog pit BBQ cooked over wood coals the old Carolina way — one of the genuinely great barbecue experiences in the American South.",
    longDescription: `Rodney Scott learned to cook whole hog at his family's pit in Hemingway, South Carolina, where he spent his childhood tending fires through the night and absorbing a craft that had been refined over generations. The James Beard Award for Best Chef: Southeast that he won in 2018 put his name on the national radar, but the food at his King Street location is grounded in something much older and more fundamental than culinary recognition — it's a specific technique, a specific wood smoke, a specific vinegar-based sauce cut with pepper and spice that defines Eastern Carolina barbecue at its best.\n\nThe menu is straightforward: whole-hog pulled pork, ribs, chicken, and the essential hash and rice that is the Lowcountry side dish most visitors have never encountered. The pigs are cooked low and slow over direct hardwood coals — not indirect smoke, not a gas-assisted shortcut — in a process that takes 12 to 24 hours and requires genuine skill to execute. The result is pork that is simultaneously intensely smoky, deeply moist, and carrying a flavor that no faster process can replicate. The line moves efficiently and the prices remain improbably reasonable for the quality on the plate.\n\nFor a group of seven, this is an ideal casual lunch stop on the upper King Street corridor. Order the combo plates, get extra hash and rice, and don't skip the slaw. There are no reservations; the operation is fast-casual and the turnover is quick. This is not destination dining in the white-tablecloth sense — it's something more important than that.`,
    pullQuote: {
      text: "I've eaten a lot of barbecue in my life. This is the best pulled pork I've ever had — and it's not particularly close.",
      attribution: "— Michael A., Memphis"
    },
    reviews: [
      { initials: "TR", name: "Tom R.", date: "Spring 2025", text: "The hash and rice alone was a revelation. Never had it before, immediately ordered a second serving." },
      { initials: "CB", name: "Claire B.", date: "Summer 2024", text: "The ribs are extraordinary but the whole-hog pulled pork is the move. Line was out the door and still worth every minute." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1697384874457-ee3595914c4c?w=800&q=80"
  },

  {
    id: "chs-leons",
    city: "charleston",
    group: "food",
    title: "Leon's Oyster Shop",
    location: "698 King St, Charleston, SC",
    category: "Food & Dining",
    priceLevel: "$$",
    duration: "1.5 Hours",
    rating: 4.7,
    reviewCount: 3400,
    shortDescription: "A converted auto garage with a Michelin Bib Gourmand, rosé on tap, wood-fired oysters, and some of the best fried chicken in a city that takes fried chicken seriously.",
    longDescription: `Leon's occupies a converted garage on upper King Street that retains just enough of its industrial bones — high ceiling, concrete floors, garage-door openings — to feel unpretentious while still being polished in all the right ways. The Michelin Bib Gourmand designation it's held since 2022 signals what the place is: seriously good food at prices that don't require a special occasion to justify, in an atmosphere where the tables are full and the room sounds like people genuinely enjoying themselves.\n\nThe wood-fired oysters are the anchor of the menu — local oysters roasted in a wood-burning oven with rotating preparations that showcase the natural brine without overcomplicating it. But the fried chicken is what regulars will defend most fiercely: juicy, properly seasoned, with a crust that stays crisp long enough to share. Rosé on tap has been a signature from the beginning, and the approachable wine and cocktail list doesn't demand serious study. The outdoor seating along King Street is excellent for people-watching if you want to feel the rhythm of the block.\n\nFor a group of seven, Leon's works perfectly as a shared-plates experience — order several rounds of oysters, a couple of fried chicken plates, some sides, and let the table graze. There's usually a wait on weekend evenings, but the bar is a perfectly pleasant place to have a first drink while you watch the room fill up. This is one of those neighborhood restaurants that Charleston residents return to repeatedly — a reliable, unpretentious pleasure.`,
    pullQuote: {
      text: "The wood-fired oysters and a cold glass of rosé on the patio — this is what a Tuesday evening in Charleston is supposed to feel like.",
      attribution: "— Rebecca W., New York"
    },
    reviews: [
      { initials: "HN", name: "Hannah N.", date: "Summer 2025", text: "The fried chicken is genuinely exceptional. Light, crispy, perfectly seasoned — best we had on the trip." },
      { initials: "PO", name: "Phil O.", date: "Spring 2024", text: "Rosé on tap, great oysters, and a vibe that makes you want to stay for another round. The Bib Gourmand is well-earned." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1685557697136-c41fa026e71e?w=800&q=80"
  },

  {
    id: "chs-bowens-island",
    city: "charleston",
    group: "food",
    title: "Bowens Island Restaurant",
    location: "1870 Bowens Island Rd, Charleston, SC",
    category: "Seafood & Dining",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.6,
    reviewCount: 2100,
    shortDescription: "A legendary no-frills marsh shack where oysters are steamed in a pit and dumped on newspaper-covered communal tables — a Lowcountry rite of passage.",
    longDescription: `Bowens Island has been feeding Charlestonians since 1946 from a ramshackle building perched on stilts over the pluff mud at the edge of the marsh, and the formula has not changed in any meaningful way since. You drive down a dirt road, park in the grass, walk up a weathered ramp past a deck of regulars who look like they've never left, and find a room where the walls are covered floor to ceiling in generations of carved and painted graffiti and the menu is printed on a chalkboard. Cash only. No pretense. Wildly atmospheric in a way that no restaurant designed to feel atmospheric ever quite achieves.\n\nThe oysters are the reason to come — local South Carolina clusters, steamed in a purpose-built pit until they just begin to open, then dumped by the shovel-full onto newspaper-covered tables. You eat with a knife and your hands, dipping in butter and cocktail sauce, and the combination of the briny local shellfish, the wood smoke from the pit, and the marsh breeze coming through the open walls is simply the Lowcountry in a single concentrated experience. The rest of the menu — shrimp, crab legs, fish — is equally honest and well-executed.\n\nBowens Island is open Tuesday through Saturday for dinner only. It fills up, but turnover is relatively quick because the format doesn't encourage lingering over elaborate courses. For a group that wants one genuinely authentic, no-frills Lowcountry seafood experience, this is the one.`,
    pullQuote: {
      text: "Steamed oysters, newspaper tablecloths, cold beer, and a view of the marsh at sunset. I don't need anything fancier than this, ever.",
      attribution: "— John T., Charleston"
    },
    reviews: [
      { initials: "LC", name: "Laura C.", date: "Spring 2025", text: "Cash only, graffiti walls, oysters by the shovel — it's exactly what it sounds like and it's perfect. Don't overthink it." },
      { initials: "BE", name: "Bob E.", date: "Fall 2024", text: "The steam-pit oysters are unlike anything you'll have at a fancy oyster bar. This is the real deal." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1769984579629-5912db8f8a0d?w=800&q=80"
  },

  {
    id: "chs-fig",
    city: "charleston",
    group: "food",
    title: "FIG Restaurant",
    location: "232 Meeting St, Charleston, SC",
    category: "Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 1870,
    shortDescription: "The restaurant that launched Charleston's modern culinary era — an ingredient-first seasonal menu that treats local farmers and fishermen as co-authors.",
    longDescription: `Food Is Good: the name is deceptively simple for a restaurant that has been defining the standard of Charleston fine dining since 2003. Chef Jason Stanhope's kitchen at FIG operates from a disciplined conviction that exceptional ingredients need minimal intervention, and the seasonal menu reflects genuine relationships with specific local farms, fishing boats, and producers — names you'll see on the menu itself, not as decoration but as attribution. The result is food that tastes unmistakably of this specific coast, this specific season, prepared with a technical precision that elevates without distorting.\n\nThe dining room is warm and understated — exposed brick, soft lighting, a well-deployed open kitchen that adds energy without noise — and the service operates at a level that's attentive without being performative. The pasta dishes change seasonally and have become a particular signature; the whole roasted fish preparations are consistently among the best you'll find in Charleston; and the desserts reflect the same philosophy as the savory menu, using local fruits and dairy in preparations that feel like genuine finales rather than afterthoughts.\n\nReservations at FIG fill up weeks in advance, so book as soon as your travel dates are confirmed. For a group of seven, this is one of the city's best choices for a true special-occasion dinner — the kitchen scales well for parties, the wine program is exceptional, and the consistent quality means the investment almost never disappoints.`,
    pullQuote: {
      text: "The simplest thing on the menu — just roasted local fish with vegetables from a farm I'd never heard of — was one of the best things I've eaten anywhere.",
      attribution: "— Olivia B., New York"
    },
    reviews: [
      { initials: "MS", name: "Martin S.", date: "April 2025", text: "The pasta alone was worth the trip to Charleston. Silky, precisely sauced, using Carolina grains — technically flawless." },
      { initials: "AG", name: "Anna G.", date: "Spring 2024", text: "Book weeks ahead. The quality here is the benchmark for the whole city and has been for two decades." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1750943036999-81e666b2296c?w=800&q=80"
  },

  {
    id: "chs-82-queen",
    city: "charleston",
    group: "food",
    title: "82 Queen",
    location: "82 Queen St, Charleston, SC",
    category: "Southern Fine Dining",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.6,
    reviewCount: 4200,
    shortDescription: "A beloved antebellum courtyard institution serving the city's most-praised she-crab soup and shrimp and grits — the quintessential old-school Charleston dining experience.",
    longDescription: `A landmark on the Charleston dining scene for more than three decades, 82 Queen occupies a cluster of antebellum buildings surrounding a jasmine-draped courtyard on Queen Street in the heart of the historic district. The setting is quintessentially Charlestonian — old brick walls, ironwork, garden furniture, gas lanterns — and dining in the courtyard on a warm evening with the smell of salt air drifting in from a few blocks away is the kind of experience that gives Charleston its reputation as a city that knows how to treat its guests.\n\nThe she-crab soup here is consistently cited as the city's best, a rich, cream-based bisque made with Atlantic blue crab and finished with a pour of dry sherry at the table — the classic preparation executed without shortcut. The shrimp and grits is equally reliable: creamy stone-ground grits, fresh local shrimp, tasso ham, a sauce that has been adjusted and refined over decades of service. The menu covers the full canon of Lowcountry classics without feeling like a museum exhibit — there's clear ongoing investment in the kitchen.\n\nFor a group of seven, 82 Queen handles large parties well and the shared-dishes format of Lowcountry cuisine suits the table format naturally. Ask specifically for courtyard seating when booking — the indoor dining rooms are pleasant but the courtyard is the experience. This is a restaurant that Charlestonians bring their out-of-town guests to consistently, which is perhaps the most reliable endorsement any restaurant can have.`,
    pullQuote: {
      text: "They poured the sherry tableside into the she-crab soup and I understood immediately why this is one of the city's great dishes.",
      attribution: "— Eleanor T., Richmond"
    },
    reviews: [
      { initials: "GH", name: "Gary H.", date: "Spring 2025", text: "The courtyard at night under the gas lamps with a bowl of she-crab soup — this is the most Charleston experience you can have." },
      { initials: "FD", name: "Frances D.", date: "Fall 2024", text: "Three visits to Charleston and we've been back every time. The shrimp and grits is simply the standard by which I judge all others now." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1642012244528-a43caf4a76b5?w=800&q=80"
  },

  {
    id: "chs-chubby-fish",
    city: "charleston",
    group: "food",
    title: "Chubby Fish",
    location: "252 Coming St, Charleston, SC",
    category: "Seafood & Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.9,
    reviewCount: 980,
    shortDescription: "A tiny walk-in-only chef counter using hyper-local daily catch with a menu that changes completely based on what came off the boats that morning.",
    longDescription: `Chubby Fish has earned its reputation as one of the most exciting tables in Charleston through a combination of genuine restraint and serious skill. The restaurant is small — seating perhaps 30 — and operates on a walk-in basis with no reservations, which means arriving early (doors open at 5pm; a line forms before that on busy nights) is the necessary ritual. The menu is printed daily and bears no resemblance to the night before; it reflects only what the kitchen's local fishing and farming relationships produced that morning, prepared with Spanish and Mediterranean influences that complement rather than obscure the exceptional quality of the raw material.\n\nThe compositions tend toward the minimal and precise — a single local fish species with a perfect sauce, a crudo with an unexpected acid and herb, a shellfish preparation that showcases the live-product quality of the sourcing. There is a seriousness of purpose here that extends to every decision, from the ceramic serving vessels to the natural wine program, and the cumulative effect is of a restaurant operating exactly as it intends to, at a level of coherence that's genuinely unusual at any price point.\n\nFor a group of seven, the no-reservations policy requires some strategy — either arriving early as a full group when doors open, or sending someone ahead to wait while others finish an earlier activity nearby. The investment of patience is consistently rewarded. This is the kind of restaurant that people return to Charleston specifically to revisit.`,
    pullQuote: {
      text: "They handed me a menu I'd never seen before, brought me fish I'd never heard of, and I ate one of the best meals of my life. That's the whole point.",
      attribution: "— Christopher N., San Francisco"
    },
    reviews: [
      { initials: "NW", name: "Nicole W.", date: "Spring 2025", text: "The crudo changed my idea of what a crudo can be. Everything is precise and purposeful. Worth the line — worth any line." },
      { initials: "JA", name: "Jake A.", date: "Winter 2024", text: "Arrive at 4:45. Get in line. It is worth it every single time. Best seafood restaurant in Charleston by a significant margin." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1773701626594-a601beb3297d?w=800&q=80"
  },

  {
    id: "chs-verns",
    city: "charleston",
    group: "food",
    title: "Vern's",
    location: "976 Morrison Dr, Charleston, SC",
    category: "Fine Dining",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 720,
    shortDescription: "A Michelin-starred husband-and-wife restaurant in Elliotborough with handmade pastas, creative small plates, and Lowcountry ingredients elevated without pretension.",
    longDescription: `Vern's arrived in Charleston's Elliotborough neighborhood in 2021 and collected a Michelin star with a swiftness that surprised no one who had eaten there. Chef Nick Wilber and his wife Shae run the room and the kitchen with an intimacy and attentiveness that larger restaurants can't replicate — the cooking is personal in a way that reflects who they are and what they care about rather than what a concept document dictates. The handmade pastas are the heart of the menu: not Italian pastas so much as pasta technique applied to Lowcountry ingredients, local flours, and seasonal combinations that reward attention.\n\nThe small plates format means the table builds its own meal from a rotating list of dishes that might include a silky chicken liver mousse with local preserves, a crudo of that morning's catch with citrus and herb, or a slow-cooked legume dish that demonstrates what patience does to humble ingredients. The wine list leans toward small producers, natural fermentation, and obscure regions — curated by someone who clearly finds wine genuinely interesting rather than obligatory.\n\nThe restaurant seats around 30, and reservations go quickly; check OpenTable well in advance for a full table booking. The bar seats several walk-in guests nightly and are the most coveted spots in the house for solo diners and couples. For a group of seven, this requires some planning — but the payoff is a meal that feels genuinely special without requiring a black-tie affect. One of Charleston's most quietly excellent restaurants.`,
    pullQuote: {
      text: "The pasta with local clams and preserved lemon is the kind of dish you think about for months afterward. This little room is doing something really important.",
      attribution: "— Stephanie M., Charleston"
    },
    reviews: [
      { initials: "RK", name: "Rachel K.", date: "Spring 2025", text: "Michelin star fully deserved. The cooking has a clarity and intelligence that makes every dish feel inevitable and surprising at the same time." },
      { initials: "DA", name: "Derek A.", date: "Winter 2024", text: "Sat at the bar for three hours eating everything they brought us. The staff know exactly what they're doing and why." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1713561058969-793049b01712?w=800&q=80"
  },

  // ── NEW SAVANNAH ACTIVITIES ────────────────────────────────

  {
    id: "sav-prohibition-museum",
    city: "savannah",
    group: "activities",
    title: "American Prohibition Museum",
    location: "209 W St Julian St, Savannah, GA",
    category: "History & Culture",
    priceLevel: "$",
    duration: "1.5 Hours",
    rating: 4.6,
    reviewCount: 1840,
    shortDescription: "The only museum in America dedicated to Prohibition — 13 interactive galleries ending with a guided tour through a recreated 1920s speakeasy with a cocktail included.",
    longDescription: `The American Prohibition Museum opened in Savannah's historic district in 2017 and has become one of the city's most consistently praised attractions through a combination of genuinely substantive history and a presentation style that keeps the energy high throughout. Thirteen galleries move chronologically through the 18th Amendment's origins in the temperance movement, the explosion of organized crime, the rise of the speakeasy culture, the careers of Al Capone and Carrie Nation, and the amendment's eventual repeal in 1933 — covering ground that is more complex and politically resonant than most visitors expect.\n\nThe artifact collection is impressive: over 1,000 objects ranging from confiscated stills and bootlegging equipment to period advertising, political cartoons, and personal effects from key figures of the era. Wax figures and vintage automobiles anchor several galleries, and the interactive elements — making the museum genuinely participatory rather than passive — are well-designed for a range of ages. The whole sequence is calibrated to hold attention across the full 90-minute visit without feeling padded.\n\nThe finale is the speakeasy: a faithfully recreated 1920s illegal bar, accessed through a hidden door, where a costumed guide delivers the final narrative segment of the tour and a period cocktail is included in the admission price. For adults this is the kind of museum experience that reminds you why physical spaces still matter in an era of digital content. Children are welcome and the history is presented at a level that works for tweens and teenagers.`,
    pullQuote: {
      text: "The speakeasy at the end with the cocktail and the costumed guide — I was completely charmed. Best museum experience I've had in years.",
      attribution: "— Laura H., Chicago"
    },
    reviews: [
      { initials: "BM", name: "Bill M.", date: "Spring 2025", text: "More substantive than I expected — genuinely good history delivered in a fun format. The speakeasy finale is worth the price of admission alone." },
      { initials: "TC", name: "Tara C.", date: "Fall 2024", text: "My history-averse husband was glued to every exhibit. Speakeasy cocktail at the end sealed the deal. Highly recommend." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1578311413294-7b68d31c6787?w=800&q=80"
  },

  {
    id: "sav-mercer-williams",
    city: "savannah",
    group: "activities",
    title: "Mercer Williams House Museum",
    location: "429 Bull St, Savannah, GA",
    category: "History & Culture",
    priceLevel: "$",
    duration: "1 Hour",
    rating: 4.5,
    reviewCount: 2300,
    shortDescription: "The infamous antebellum mansion from 'Midnight in the Garden of Good and Evil' — 35 minutes inside the most legendary address in Savannah true-crime history.",
    longDescription: `The Mercer Williams House at 429 Bull Street on Monterey Square is one of the finest Italianate antebellum townhouses in Savannah — four stories of brick and ironwork built in 1868 for General Hugh Mercer, great-grandfather of songwriter Johnny Mercer — and it would be notable for its architecture alone. But what has made it a pilgrimage site for a generation of visitors is Jim Williams, the flamboyant antiques dealer and preservationist who bought the house in 1969 and restored it to extraordinary condition, filling it with his magnificent collection of European antiques, silver, and art.\n\nIn 1981, Jim Williams shot and killed his assistant Danny Hansford in the downstairs study. The four trials that followed — the most in Georgia legal history for a single case — became the subject of John Berendt's 1994 true-crime masterpiece "Midnight in the Garden of Good and Evil," which spent more time on the New York Times bestseller list than any nonfiction book in history. The tours peel back those layers with impressive candor: the antiques collection is real, the architecture is magnificent, and the story of what happened here is told without varnish.\n\nThe 35-minute guided tour covers the ground floor and garden, while the upper floors serve as the family residence and are not included. There's enough material in what is accessible — the study where the shooting occurred, the collection, Williams's own complicated biography — to make this a fully satisfying experience for anyone who has read the book or simply wants to understand why this particular address has held the imagination of so many people for so long.`,
    pullQuote: {
      text: "I read the book three times. Standing in that study where it actually happened — the room looked exactly how I'd imagined it.",
      attribution: "— Diana F., New York"
    },
    reviews: [
      { initials: "PN", name: "Peter N.", date: "April 2025", text: "Read the book before you go and this becomes a remarkable experience. Without it, it's still a beautiful house tour." },
      { initials: "LV", name: "Lynn V.", date: "Spring 2024", text: "The guide was candid and knowledgeable. The antiques collection is genuinely museum-quality. A must for fans of the book." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1599665816768-5cf2ad154ee6?w=800&q=80"
  },

  {
    id: "sav-scad-museum",
    city: "savannah",
    group: "activities",
    title: "SCAD Museum of Art",
    location: "601 Turner Blvd, Savannah, GA",
    category: "Arts & Culture",
    priceLevel: "$",
    duration: "1.5 Hours",
    rating: 4.5,
    reviewCount: 870,
    shortDescription: "An 1853 Greek Revival railroad depot transformed into one of the Southeast's finest contemporary art museums by one of America's top design universities.",
    longDescription: `The Savannah College of Art and Design has spent four decades transforming derelict historic structures throughout the city into working academic and cultural facilities, and the SCAD Museum of Art stands as one of the finest achievements of that ongoing project. The building itself — a monumental 1853 Greek Revival structure that served as the Savannah railroad depot — was meticulously restored and expanded in 2011 in a design by the New York firm Christian Sottile, which preserved the historic shell while inserting a contemporary museum program of considerable ambition.\n\nThe rotating contemporary exhibitions draw on SCAD's global connections in art and design and consistently present work of a quality you'd expect from a major metropolitan museum rather than a university gallery. Past exhibitions have included significant retrospectives and commissions alongside emerging work from students and recent graduates — creating a programming range that rewards multiple visits and makes predictions about what you'll find difficult. The permanent collection includes works by Romare Bearden, Richard Serra, and other major figures alongside strong holdings in fashion, design, and photography.\n\nFor a group that includes people with varying levels of engagement with contemporary art, the SCAD Museum tends to work well because the building itself is stunning and the presentation is professional and accessible. The café attached to the museum is a pleasant stop, and the location near the western end of the historic district means it pairs naturally with a walk through the adjacent neighborhood.`,
    pullQuote: {
      text: "The building alone is worth the trip — but the exhibitions inside are genuinely world-class. I didn't expect this level of quality from a university museum.",
      attribution: "— Andrea C., Philadelphia"
    },
    reviews: [
      { initials: "VK", name: "Vincent K.", date: "Spring 2025", text: "Stunning restoration of the old railroad depot. The current exhibition was stronger than anything I saw at the bigger museums on my trip." },
      { initials: "MO", name: "Maria O.", date: "Fall 2024", text: "Small but beautifully curated. The architecture of the building is as much the exhibit as the art inside." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?w=800&q=80"
  },

  {
    id: "sav-starland-district",
    city: "savannah",
    group: "activities",
    title: "Starland District Exploration",
    location: "Starland District, Savannah, GA",
    category: "Arts & Culture",
    priceLevel: "Free",
    duration: "2 Hours",
    rating: 4.6,
    reviewCount: 1100,
    shortDescription: "Savannah's SCAD-born creative neighborhood — large-scale street murals, independent galleries, maker studios, and Starland Yard's outdoor food trucks and live music.",
    longDescription: `The Starland District began its transformation from a neglected mid-century neighborhood into Savannah's creative epicenter in the early 2000s, driven largely by SCAD's acquisition of buildings in the area and the gravitational pull of artists and designers seeking affordable studio space within walking distance of the historic core. Today it's one of the most genuinely livable and interesting urban neighborhoods in Georgia — dense with independent businesses, studded with large-scale commissioned murals, and animated by a demographic of working artists, designers, and the students who come to study alongside them.\n\nA two-hour walk through the district's dozen-odd square blocks reveals a range of things to look at and stop into: mural-covered building sides that function as an open-air gallery, independent ceramics and print studios with open-door policies, and Starland Yard — an outdoor gathering space anchored by rotating food trucks, a bar, and an outdoor stage that runs live music on most evenings. The Foxy Loxy Café on Bull Street anchors the neighborhood with excellent coffee, pastries, and a back courtyard that feels like a tucked-away secret even to regulars.\n\nFor a group that wants to experience Savannah beyond the squares and monuments, this is the antidote. Everything here costs nothing to look at and the food and drink options are reasonably priced and good. The neighborhood is walkable from the southern end of Forsyth Park, making it a natural continuation of an afternoon that begins at the fountain. Best visited in the late afternoon into evening, when the murals catch the low light and Starland Yard begins to fill up.`,
    pullQuote: {
      text: "Foxy Loxy on a Sunday morning, then a walk through the murals, then lunch at the Yard — this is how Savannah actually lives.",
      attribution: "— Kathryn P., Savannah"
    },
    reviews: [
      { initials: "IB", name: "Ian B.", date: "Spring 2025", text: "The murals alone make this worth the walk. Stop at Foxy Loxy for coffee first and then just wander." },
      { initials: "AL", name: "Amy L.", date: "Summer 2024", text: "Starland Yard on a Thursday evening with live music and food trucks — the best $0 activity in Savannah." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?w=800&q=80"
  },

  {
    id: "sav-oatland-island",
    city: "savannah",
    group: "activities",
    title: "Oatland Island Wildlife Center",
    location: "711 Sandtown Rd, Savannah, GA",
    category: "Nature & Education",
    priceLevel: "$",
    duration: "2 Hours",
    rating: 4.5,
    reviewCount: 760,
    shortDescription: "A 175-acre woodland preserve east of downtown where you walk quiet trails past Georgia's native wolves, alligators, bald eagles, bison, and bobcats — for $5 an adult.",
    longDescription: `Oatland Island Wildlife Center occupies 175 acres of maritime forest and wetland on a peninsula east of downtown Savannah, and its remarkable value — $5 for adults, less for children, almost free compared to any comparable wildlife experience — is part of what makes it so well-loved by local families and largely unknown to visitors. The center operates as a nonprofit wildlife education facility, not a zoo, and the emphasis is on native Georgia species living in habitat-appropriate large enclosures along a network of shaded walking trails.\n\nThe range of animals is genuinely impressive: two packs of red wolves (one of the most endangered species in North America), Florida black bears, white-tailed deer, bald eagles, great horned owls, a dozen species of native snakes behind glass, American alligators in a wetland setting, bison grazing in open pasture, and bobcats padding the perimeter of their enclosures with the focused alertness that makes wild cats so compelling to watch. The trail system moves you through different habitats over roughly two miles of easy walking, and the combination of shade, the smell of salt air off the adjacent marsh, and the quality of the animals makes the time pass quickly.\n\nFor a family group with a range of ages, this is one of Savannah's most universally engaging half-day options. The trails are stroller-friendly, the animals are consistently active and visible, and the absence of crowds — even on peak-season weekends — means you can take your time. Pack water and wear comfortable shoes; the sun hits the open pasture sections.`,
    pullQuote: {
      text: "Five dollars to watch a pack of red wolves at close range in a forest setting. I've paid hundreds of times more at places that delivered less.",
      attribution: "— Frank R., Baltimore"
    },
    reviews: [
      { initials: "MH", name: "Michelle H.", date: "Spring 2025", text: "The red wolves were magnificent. Kids were completely absorbed for the full two hours. Criminally underrated." },
      { initials: "PE", name: "Paul E.", date: "Summer 2024", text: "Bald eagle with a six-foot wingspan perched five feet from the trail. $5. Savannah's best kept secret." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1774228170595-4d36960a2795?w=800&q=80"
  },

  {
    id: "sav-pin-point",
    city: "savannah",
    group: "activities",
    title: "Pin Point Heritage Museum",
    location: "9924 Pin Point Ave, Savannah, GA",
    category: "History & Culture",
    priceLevel: "$",
    duration: "1.5 Hours",
    rating: 4.7,
    reviewCount: 390,
    shortDescription: "A deeply moving museum inside a former oyster factory, telling the story of the Gullah/Geechee community where Supreme Court Justice Clarence Thomas grew up.",
    longDescription: `The Pin Point community was founded in the 1890s on a marsh island southeast of Savannah by formerly enslaved people and their descendants, many of whom carried forward the Gullah/Geechee language, foodways, and cultural traditions of West African origin that had persisted through generations of enslavement on the Sea Islands. For decades the community sustained itself through the A.S. Varn Oyster and Crab Factory that stands at the site — women shucking oysters, men working the crab boats, the rhythms of the tidal economy setting the calendar of daily life. Clarence Thomas, who would become an Associate Justice of the United States Supreme Court, was born here and grew up in this community.\n\nThe museum, opened in 2011 inside the carefully restored factory building, tells the story of Pin Point through oral histories, artifacts, photographs, and documentary footage with exceptional sensitivity and specificity. The voices are the community's own — not mediated or academicized but direct and personal — and the physical setting of the factory, its equipment partially intact, its smell of wood and salt still present in the walls, makes the history feel immediate in a way that conventional museum spaces rarely achieve.\n\nThis is one of the most authentic and emotionally resonant cultural experiences available anywhere on the Georgia coast. It requires a short drive southeast of downtown (about 15 minutes), it's not heavily promoted, and it draws a fraction of the visitors that more famous sites attract. For a group willing to move slightly off the tourist circuit, it is genuinely one of the most rewarding things you can do in Savannah.`,
    pullQuote: {
      text: "I sat with the oral history recordings for thirty minutes after the guide finished. I didn't want to leave. This is the real Savannah.",
      attribution: "— Josephine W., Atlanta"
    },
    reviews: [
      { initials: "KG", name: "Kevin G.", date: "April 2025", text: "Moved me more deeply than anything else we did in Savannah. The oral histories alone are worth the drive." },
      { initials: "SB", name: "Sarah B.", date: "Spring 2024", text: "Tiny, genuine, heartbreaking, and ultimately uplifting. The most important 90 minutes we spent on the Georgia coast." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1625727783993-5ff1c0ce52e2?w=800&q=80"
  },

  {
    id: "sav-midnight-garden-tour",
    city: "savannah",
    group: "activities",
    title: "Midnight in the Garden Walking Tour",
    location: "Meets at Forsyth Park Fountain, Savannah, GA",
    category: "History & Entertainment",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 1540,
    shortDescription: "A small-group evening walk through every real location from Berendt's iconic book — the Mercer House, Bonaventure Cemetery, the Hamilton-Turner Inn — with a guide who knows the whole story.",
    longDescription: `John Berendt spent years living in Savannah while researching "Midnight in the Garden of Good and Evil," and the book he wrote — published in 1994 — spent more time on the New York Times bestseller list than any work of nonfiction in history. The walking tour that traces its locations is the most thorough way to inhabit that story, moving through the squares and streets of the historic district with a guide who has studied the real events, the real characters, and the ways in which the book's version of Savannah intersects with and diverges from the city that actually existed.\n\nThe two-hour route visits Monterey Square and the exterior of the Mercer Williams House, the Hamilton-Turner Inn where Lady Chablis lived, Clary's Café where Berendt spent his mornings, various squares and streets that figure in the narrative, and — the atmospheric climax — Bonaventure Cemetery at the edge of the marsh, where the bird girl statue once stood and where several key figures in the story are buried. The guides on the best-rated tours are insiders who have personal connections to the events and people described, which adds a layer of granularity that no book or film can deliver.\n\nGroups are capped at 15 to ensure the experience remains intimate; book well in advance for evening departures during peak season. Comfortable walking shoes are essential and a light layer helps once the cemetery section begins after dark. This tour is appropriate for all ages, though the story itself — involving a murder trial, LGBTQ characters, and Savannah social politics of the 1980s — will engage adults and older teenagers most fully.`,
    pullQuote: {
      text: "Our guide told us things that never made it into the book. Standing at Jim Williams's grave at Bonaventure in the dark — that's the tour.",
      attribution: "— Charles V., Boston"
    },
    reviews: [
      { initials: "HL", name: "Hannah L.", date: "Spring 2025", text: "Read the book twice before coming. The guide filled in gaps I'd wondered about for years. The cemetery at night is genuinely atmospheric." },
      { initials: "GO", name: "George O.", date: "Fall 2024", text: "Don't come to Savannah and miss this tour. Even if you haven't read the book, the story is gripping and the city comes alive." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1764389973311-ea998e64ac3f?w=800&q=80"
  },

  // ── NEW SAVANNAH FOOD ──────────────────────────────────────

  {
    id: "sav-the-grey",
    city: "savannah",
    group: "food",
    title: "The Grey",
    location: "109 Martin Luther King Jr Blvd, Savannah, GA",
    category: "Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.9,
    reviewCount: 2100,
    shortDescription: "Chef Mashama Bailey's James Beard Award-winning restaurant in a stunning 1938 art deco Greyhound terminal — the most beautiful dining room in Savannah.",
    longDescription: `The Grey opened in 2014 inside a meticulously restored 1938 Greyhound bus terminal on Martin Luther King Jr. Boulevard, and the building itself — sweeping art deco curves, original terrazzo floors, the restored lunch counter and departure boards, the whole geometry of the thing — is one of the most beautiful dining rooms in the American South. Chef Mashama Bailey and her partner John O. Morisano transformed a building that had been shuttered since desegregation into a space that carries its history honestly, and Bailey's cooking has been the subject of national conversation ever since.\n\nHer menu is rooted in Southern cooking filtered through West African culinary traditions and her own upbringing in New York and Georgia — the result is food that feels simultaneously deeply regional and genuinely original. The dishes read simply — a pot likker, a roasted vegetable, a local fish preparation — but each one has been developed through close attention to ingredient sourcing, technique, and cultural context that rewards curious eating. The James Beard Award for Outstanding Chef that Bailey received in 2022 recognized a body of work that had already established The Grey as one of the most significant restaurants in American dining.\n\nReservations are essential and fill weeks in advance for prime dinner times; the bar program at The Grey Market next door is excellent for walk-ins who want a taste of the experience without the full reservation. For a group of seven visiting Savannah, this is the single most important restaurant reservation to secure first — book the moment your dates are confirmed.`,
    pullQuote: {
      text: "The dining room stopped me when I walked in — then the food arrived and I forgot about the room entirely. An extraordinary restaurant.",
      attribution: "— Jonathan F., Washington DC"
    },
    reviews: [
      { initials: "EB", name: "Elena B.", date: "Spring 2025", text: "Mashama Bailey's cooking is unlike anything else. The pot likker alone rewired my understanding of what Southern food can be." },
      { initials: "WT", name: "William T.", date: "Fall 2024", text: "The building, the service, the food — every element is at the highest level. The best restaurant we visited on the entire trip." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1761208229358-3cd53fcfa70d?w=800&q=80"
  },

  {
    id: "sav-olde-pink-house",
    city: "savannah",
    group: "food",
    title: "The Olde Pink House",
    location: "23 Abercorn St, Savannah, GA",
    category: "Southern Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.7,
    reviewCount: 4800,
    shortDescription: "A candlelit 1771 Georgian mansion — the pinkest building on Reynolds Square — serving Savannah's most atmospheric Southern fine dining.",
    longDescription: `The building at 23 Abercorn Street was constructed in 1771 for James Habersham Jr., one of Georgia's wealthiest merchants, and its distinctive blush-pink color is an accident of architecture — the red brick bleeding through layers of white stucco. Today the Olde Pink House is one of Savannah's most beloved dining institutions, operating across multiple dining rooms on the ground floor and the celebrated downstairs tavern, where the low ceilings and candlelight and brick walls create an atmosphere that has been photographed thousands of times without ever quite capturing what it actually feels like to sit there with a cocktail before dinner.\n\nThe kitchen serves an elevated Southern menu that has been refined through decades of service: crispy scored flounder that has become a signature dish, Savannah red rice prepared with the slow attention it deserves, praline bacon that appears on tables as a matter of course, and a coastal seafood program that reflects what's excellent and local. The cocktail list is well-crafted and the wine program covers the Southern fine dining canon with reasonable depth. Service here is warm and professional in the Southern hospitality tradition — attentive without being hovering.\n\nFor a group of seven, the Olde Pink House handles large parties with grace and the multi-room format means you can request a table in the specific room that suits you best. Book at least two weeks ahead for weekend dinners. The downstairs tavern accommodates walk-ins for cocktails and lighter fare if a full reservation isn't possible — and an evening at the bar here, with a plate of praline bacon and a proper bourbon drink, is one of the great uncomplicated pleasures Savannah offers.`,
    pullQuote: {
      text: "The crispy flounder, a glass of white wine, and those candlelit brick walls — I could eat this exact meal every night for a week.",
      attribution: "— Susan A., Charleston"
    },
    reviews: [
      { initials: "DM", name: "Diane M.", date: "April 2025", text: "The downstairs tavern alone is worth the visit. Best atmosphere in Savannah, full stop." },
      { initials: "CK", name: "Carl K.", date: "Spring 2024", text: "The praline bacon arrived before we ordered and I haven't stopped thinking about it since. Beautiful room, beautiful food." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1771460806227-6930b32bb3cf?w=800&q=80"
  },

  {
    id: "sav-collins-quarter",
    city: "savannah",
    group: "food",
    title: "Collins Quarter",
    location: "151 Bull St, Savannah, GA",
    category: "Brunch & Café",
    priceLevel: "$$",
    duration: "1.5 Hours",
    rating: 4.6,
    reviewCount: 3200,
    shortDescription: "An Australian-inspired all-day café just off Forsyth Park with the most inventive brunch menu in Savannah — lavender lattes, short rib benedict, and smashed avo done properly.",
    longDescription: `Collins Quarter occupies a graceful historic building just off the northern end of Forsyth Park, and the interior — exposed brick, pendant lighting, tile floors, a beautifully maintained bar front — creates the mood of a Melbourne café transplanted to the Georgia coast with tasteful modification. The Australian inspiration is genuine rather than decorative: the coffee program is serious (proper espresso drinks made with care), the menu leans toward the brunch format that Australian café culture elevated into an art form, and the execution is consistently polished.\n\nThe short rib benedict — slow-braised beef short rib over a house-made English muffin with poached eggs and hollandaise — has become one of Savannah's most talked-about brunch dishes, a composition that demonstrates real technique and generosity of spirit. The lavender latte is worth ordering once for the novelty of it, but holds up on its own merits — floral without tipping into soap. Smashed avo prepared with a proper level of care (good bread, good olive oil, enough seasoning) sounds like a cliché until you have this version. The full menu ranges widely enough to satisfy a group with different morning appetites.\n\nOn weekend mornings, Collins Quarter collects a wait that can run 30 to 45 minutes — but the line moves steadily and the café itself is a pleasant place to stand and watch the Bull Street foot traffic while you wait. For a group of seven, calling ahead to get on the list before you walk over is the right strategy. This is one of those all-day cafés that locals return to weekly without apology.`,
    pullQuote: {
      text: "The short rib benedict and a lavender latte on a Sunday morning — this is why I keep coming back to Savannah.",
      attribution: "— Melissa R., Savannah"
    },
    reviews: [
      { initials: "OP", name: "Owen P.", date: "Spring 2025", text: "Best brunch in Savannah. The short rib benedict is genuinely extraordinary. Worth every minute of the wait." },
      { initials: "JH", name: "Julia H.", date: "Summer 2024", text: "The coffee is as good as the food, which is unusual. Beautiful room, friendly staff. We came back three times in one week." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1760488105973-6fbfb718b6ca?w=800&q=80"
  },

  {
    id: "sav-wyld-dock-bar",
    city: "savannah",
    group: "food",
    title: "The Wyld Dock Bar",
    location: "2740 Livingston Ave, Savannah, GA",
    category: "Seafood & Drinks",
    priceLevel: "$$",
    duration: "2 Hours",
    rating: 4.6,
    reviewCount: 1450,
    shortDescription: "A laid-back marsh-front bar and seafood restaurant southeast of downtown with sweeping tidal views, local oysters, and cold drinks that feel miles from the tourist circuit.",
    longDescription: `The Wyld sits on a tidal marsh southeast of downtown Savannah at the end of a residential street that most visitors never find, and that remoteness — it's maybe 10 minutes from the historic district by car — is exactly what gives it its character. The dock bar is built over the marsh itself, with views across the grass and water toward the barrier islands, and on a clear afternoon the combination of light, salt air, and cold beer produces a state of contentment that urban destinations rarely manage. The regulars are a mix of locals, kayakers who paddle in from the adjacent put-in, and a few savvy visitors who've done their homework.\n\nThe food menu is anchored in local seafood: fresh oysters on the half shell from nearby waters, steamed shrimp, fish tacos assembled with whatever the kitchen sourced that morning, and enough non-seafood options to accommodate the non-fish-eaters in any group. The drinks program is simple and well-executed — good local beers, straightforward cocktails, nothing that requires an explainer. The kitchen doesn't aim for refinement and doesn't need to; the setting does the heavy lifting and the seafood is good enough to earn its place on the menu without architectural presentation.\n\nFor sunset timing, the western exposure over the marsh is excellent — arrive about an hour before sunset and plan to stay through it. Kayak rentals are available adjacent to the property if the group wants to paddle the marsh before eating, which is an excellent plan on a calm afternoon. Cash and card both accepted; reservations aren't usually necessary on weeknights.`,
    pullQuote: {
      text: "Oysters off the dock with a cold beer as the marsh turned gold at sunset. I didn't need a single other thing in the world.",
      attribution: "— Steve C., Savannah"
    },
    reviews: [
      { initials: "KN", name: "Kira N.", date: "Summer 2025", text: "Paddled in by kayak, ate oysters on the dock, watched the sun go down over the marsh. Perfect afternoon in Savannah." },
      { initials: "BG", name: "Ben G.", date: "Spring 2024", text: "The most un-touristy thing we did in Savannah and the most relaxing. Local seafood, beautiful views, no crowds." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1774381614646-cf80a17468fb?w=800&q=80"
  },

  {
    id: "sav-common-thread",
    city: "savannah",
    group: "food",
    title: "Common Thread",
    location: "1317 Bull St, Savannah, GA",
    category: "Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.8,
    reviewCount: 680,
    shortDescription: "A James Beard semifinalist in a restored Victorian home serving a hyper-seasonal tasting menu built around Georgia farms and fisheries — one of Savannah's most exciting kitchens.",
    longDescription: `Common Thread occupies a restored Victorian house on Bull Street in the Starland District, and the domestic scale of the space — small dining rooms opening off a central hallway, the sense of a house that has been transformed rather than built for the purpose — creates a dining experience that feels genuinely intimate rather than formally restaurant-like. Chef Kyle Jacovino's kitchen has earned James Beard semifinalist recognition through an approach that is rigorous and restless: the tasting menu changes completely with the seasons, and the kitchen's relationships with specific Georgia farmers, foragers, and fishermen drive the menu rather than the reverse.\n\nThe cooking is precise and creative without being obscure — dishes that feel grounded in Southern culinary tradition while demonstrating the kind of technique that makes that tradition available in new ways. A dish might center on a heritage grain grown 40 miles away, a vegetable from a single farm in coastal Georgia, or a fish species pulled from Georgia waters that most restaurant menus never see. The sourcing is credited specifically, the flavor combinations are thoughtfully assembled, and the sequence of a full tasting menu here builds with real intentionality toward something that feels complete.\n\nThe dining room holds around 30 covers; reservations fill up on weekends and should be booked well in advance. The wine and cocktail programs are worth attention — the sommeliers pair with unusual regional producers that amplify the Georgia-grown theme of the food. For a group that wants one genuinely special and creative dinner in Savannah, this is the choice that will generate the most conversation afterward.`,
    pullQuote: {
      text: "Every dish had a story — a specific farm, a specific farmer, a specific technique. By the end of the meal I felt like I understood this coast.",
      attribution: "— Patricia G., New York"
    },
    reviews: [
      { initials: "OW", name: "Oscar W.", date: "Spring 2025", text: "The tasting menu is genuinely exciting — not just good food but a point of view you can engage with. Savannah's most interesting kitchen." },
      { initials: "NM", name: "Nina M.", date: "Fall 2024", text: "Every single course surprised us. The sourcing transparency is impressive and the execution backs it up completely." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1741873826174-0e07bd73fa88?w=800&q=80"
  },

  {
    id: "sav-crystal-beer-parlor",
    city: "savannah",
    group: "food",
    title: "Crystal Beer Parlor",
    location: "301 W Jones St, Savannah, GA",
    category: "Pub & Comfort Food",
    priceLevel: "$",
    duration: "1.5 Hours",
    rating: 4.5,
    reviewCount: 2800,
    shortDescription: "A Savannah institution since 1933 — cold beer, excellent crab stew, hearty burgers, and the kind of no-nonsense atmosphere where locals still outnumber tourists.",
    longDescription: `The Crystal Beer Parlor opened in 1933 during the final year of Prohibition and has been an anchor of the Jones Street neighborhood ever since, surviving urban renewal, changing demographics, and the general tendency of old bars to lose the plot over time. The walls are covered in black-and-white photographs documenting nine decades of Savannah life — customers, events, sporting teams, the neighborhood's evolution — and the accumulated documentary weight of those images gives the room a density of history that no decorator can manufacture.\n\nThe food is serious in a non-precious way: the crab stew is a house recipe that has been made here for decades and is frequently cited by long-term Savannah residents as the dish they'd most want to eat on a final day in the city. The burgers are large, honest, and well-executed. The fried seafood plates are generous. Nothing on the menu requires explanation or justification; it simply is what it is, prepared with the consistency of a kitchen that has been making the same things for a long time. The beer list includes local Georgia options alongside the expected range of American standards, served cold without ceremony.\n\nFor a group that wants a casual, genuinely local lunch or a low-key evening out that doesn't compete with the fine dining experiences elsewhere in the itinerary, the Crystal Beer Parlor is the right choice. It's inexpensive, convivial, and remarkably unchanged by the touristification that has altered so much of Savannah's character. A reminder of what the city was like before it knew it was charming.`,
    pullQuote: {
      text: "The crab stew has been on that menu for 90 years for a reason. This is the Savannah that belonged to the people who actually lived here.",
      attribution: "— Robert L., Savannah"
    },
    reviews: [
      { initials: "FC", name: "Frank C.", date: "Spring 2025", text: "Came for a quick beer and ended up spending two hours looking at the old photographs. The crab stew is the real deal." },
      { initials: "PJ", name: "Patricia J.", date: "Winter 2024", text: "Locals at every table. That tells you everything you need to know. The burger was excellent and the prices made me feel like I was in 1975." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=800&q=80"
  },

  {
    id: "sav-elizabeth-37th",
    city: "savannah",
    group: "food",
    title: "Elizabeth on 37th",
    location: "105 E 37th St, Savannah, GA",
    category: "Southern Fine Dining",
    priceLevel: "$$$",
    duration: "2.5 Hours",
    rating: 4.7,
    reviewCount: 1620,
    shortDescription: "Savannah's most enduring fine-dining landmark since 1981 — a gracious Edwardian mansion serving coastal Southern cuisine as a love letter to the Georgia coast.",
    longDescription: `Elizabeth on 37th opened in 1981 in an ornate 1900 Edwardian mansion in Savannah's Victorian District, and in the four-plus decades since, it has survived every shift in American dining culture while maintaining a clarity of purpose and a quality of hospitality that has made it the benchmark against which other Savannah restaurants measure themselves. Chef Kelly Yambor's menu is rooted in Georgia coastal ingredients — local seafood, heritage vegetables, regionally sourced meats — prepared in a contemporary Southern idiom that honors the depth of the regional culinary tradition without sentimentalizing it.\n\nThe dining experience here has a particular quality of generosity: the rooms are beautiful without being stiff, the service is attentive in the Southern tradition of genuine welcome rather than performance, and the pacing of a multi-course meal in the high-ceilinged rooms of that old mansion has a rhythm that encourages real conversation. The wine list is one of the most thoughtful in Georgia, with notable depth in American producers and a good range of accessible price points. Seasonal menus rotate with the honest calendar of what Georgia's farms and waters produce.\n\nElizabeth on 37th works beautifully for a group of seven: the mansion's dining rooms accommodate parties of different sizes, the format supports an unhurried multi-course approach, and the kitchen handles the full scope of a group with the consistency that comes from four decades of practice. For a special-occasion evening in Savannah — a birthday dinner, a celebratory final night — this is the choice that will feel appropriate and memorable.`,
    pullQuote: {
      text: "We've been coming here for twenty years. It gets better every time — or maybe we appreciate it more. Savannah's greatest dining room.",
      attribution: "— Thomas and Carol H., Atlanta"
    },
    reviews: [
      { initials: "LH", name: "Linda H.", date: "Spring 2025", text: "Four decades old and still the best. The service, the food, the rooms — everything works at a high level every single time." },
      { initials: "MB", name: "Michael B.", date: "Winter 2024", text: "The Georgia shrimp preparation was the finest version of that dish I've ever encountered. A landmark restaurant in every sense." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1756728891481-891d0372408f?w=800&q=80"
  },

  {
    id: "sav-alligator-soul",
    city: "savannah",
    group: "food",
    title: "Alligator Soul",
    location: "114 Barnard St, Savannah, GA",
    category: "Southern Fine Dining",
    priceLevel: "$$$",
    duration: "2 Hours",
    rating: 4.6,
    reviewCount: 1280,
    shortDescription: "A dramatic underground restaurant in a brick-vaulted warehouse cellar beneath downtown Savannah — adventurous Southern fine dining and a setting unlike anything else in the city.",
    longDescription: `Alligator Soul occupies the brick-vaulted cellar of a 19th-century warehouse beneath Barnard Street, and arriving here has a theatrical quality that begins before you've seen a menu: you descend into a low-ceilinged space of exposed brick arches, candlelight, and the specific hushed quality of a room that's insulated from the street by several feet of earth and old masonry. The setting is completely unlike any other dining room in Savannah — intimate, subterranean, with the atmospheric weight of a space that was built for commerce and has been reimagined for pleasure.\n\nThe menu is ambitious and takes genuine pleasure in unusual proteins — alligator (in multiple preparations), elk, bison, wild boar, duck, and heritage pork appear alongside the local seafood and Georgia-raised beef that anchor the more conventional portions of the list. The kitchen handles game meats with real skill, which is less common than it should be, and the sauces and preparations reflect careful thinking about how Southern culinary tradition engages with ingredients beyond the standard coastal repertoire. The cocktail program is strong and appropriately spirited for the underground setting.\n\nAlligator Soul is a dinner restaurant that works well for groups who want something genuinely different from the conventional Savannah dining experience — the setting, the menu range, and the sense of occasion make it ideal for a group dinner that people will still be talking about on the drive home. Reservations are recommended but the bar seats walk-in guests; arriving at the bar for a pre-dinner drink while the full table is assembled is a natural way to begin an evening here.`,
    pullQuote: {
      text: "Low vaulted brick ceiling, candlelight, a glass of bourbon, and elk medallions that were cooked perfectly. This is exactly what a night out should feel like.",
      attribution: "— Jonathan A., Nashville"
    },
    reviews: [
      { initials: "RD", name: "Rick D.", date: "Spring 2025", text: "The underground setting alone is worth the reservation. The alligator preparation was genuinely excellent — not a novelty dish." },
      { initials: "TM", name: "Teresa M.", date: "Fall 2024", text: "Most atmospheric dining room in Savannah. The game menu is handled with real skill. We ordered three courses and wanted five more." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581820030498-500ce52caaa2?w=800&q=80"
  }

];

// ── HOW TO ADD A NEW ITEM ────────────────────────────────────
// 1. Copy the template block from the top of this file
// 2. Give it a unique id (e.g., "chs-battery-walk" or "sav-moon-river")
// 3. Fill in all the fields
// 4. Add your item object to the ITINERARY_ITEMS array above
// 5. Save — the app will pick it up automatically on next load
// ────────────────────────────────────────────────────────────
