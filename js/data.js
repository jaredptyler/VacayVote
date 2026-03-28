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
    id: "chs-rainbow-row",
    city: "charleston",
    group: "activities",
    title: "Rainbow Row Walking Tour",
    location: "East Bay Street, Charleston, SC",
    category: "Culture & History",
    priceLevel: "Free",
    duration: "1.5 Hours",
    rating: 4.8,
    reviewCount: 1240,
    shortDescription: "Thirteen pastel-painted Georgian row houses that define Charleston's soul — a photogenic stroll along the most colorful block in America.",
    longDescription: `Rainbow Row is more than a photo stop — it's a window into Charleston's merchant past. Built between 1740 and 1820, these thirteen connected homes along East Bay Street were once counting houses and shops for sea captains. Their candy-colored facades — peach, lemon, coral, sage — were restored in the 1930s by a preservation-minded local who started a trend that swept the neighborhood.

Today the pastel palette feels effortlessly chic, the iron window boxes drip with ferns, and the brick sidewalk still carries the faint scent of salt air from the harbor a block away. Morning light hits the facades perfectly; bring your camera before the crowds arrive.

Your group can pair this with a walk to nearby Waterfront Park for complete harbor views, or stop into one of the nearby coffee shops for a cold brew before continuing south along the Battery.`,
    pullQuote: {
      text: "The colors are somehow even more vivid in person. We stayed far longer than planned.",
      attribution: "— Megan T., Charlotte"
    },
    reviews: [
      { initials: "JK", name: "Jamie K.", date: "March 2025", text: "Perfect morning walk before the heat sets in. Do it first thing." },
      { initials: "RS", name: "Rachel S.", date: "Fall 2024", text: "One of the most photographed streets in the South — and for good reason." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1623608103483-7b7ce99c353b?w=800&q=80"
  },

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
    id: "chs-king-street",
    city: "charleston",
    group: "food",
    title: "King Street Food Tour",
    location: "King Street, Charleston, SC",
    category: "Food & Dining",
    priceLevel: "$$$",
    duration: "3 Hours",
    rating: 4.9,
    reviewCount: 743,
    shortDescription: "Charleston's most beloved street delivers three miles of independent restaurants, craft cocktail bars, and bakeries serving the South's finest shrimp and grits.",
    longDescription: `King Street is the spine of Charleston's culinary scene, running from the Antique District in the north down through the Design District and into the heart of downtown. You could spend an entire day grazing: start with biscuits at Callie's Hot Little Biscuit, pivot to shrimp and grits at Husk or 167 Raw for fresh oysters, then work your way into the independent cocktail bars for a proper Lowcountry cocktail.

Guided food tours depart from Marion Square and take you behind the scenes at some of the city's best kitchens — a worthwhile investment if you want context with your calories. Or self-guide with a reservation at one anchor restaurant and browse the rest on foot.

The boutique shopping between bites is world-class too: local designers, vintage finds, and Southern lifestyle brands line every block. King Street does Charleston's character better than anywhere else in the city.`,
    pullQuote: {
      text: "We came for one restaurant and ended up tasting our way through six different spots over four hours.",
      attribution: "— Brian C., Nashville"
    },
    reviews: [
      { initials: "SK", name: "Samantha K.", date: "April 2025", text: "Make reservations for the popular spots — they fill up fast, especially on weekends." },
      { initials: "JR", name: "James R.", date: "Summer 2024", text: "Best shrimp and grits of my life, full stop. Husk is worth the price." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1684277770294-5564b0ebe291?w=800&q=80"
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
    id: "sav-river-street",
    city: "savannah",
    group: "food",
    title: "River Street Food & Shopping",
    location: "River Street, Savannah, GA",
    category: "Food & Shopping",
    priceLevel: "$$",
    duration: "3 Hours",
    rating: 4.5,
    reviewCount: 2780,
    shortDescription: "Nine blocks of restaurants, galleries, and shops along Savannah's original cobblestone waterfront — built on the ballast stones of 18th-century trading ships.",
    longDescription: `River Street runs along the Savannah River's south bank, set one dramatic level below the bluff of Bay Street and connected by steep iron staircases and ramps cut through the old cotton warehouse walls. The cobblestones underfoot are actual ballast stones brought over in the holds of merchant ships two centuries ago — you can feel the history in every uneven step.

The cotton warehouses they once served have been transformed into a lively strip of seafood restaurants, candy shops, art galleries, and bars serving frozen cocktails in go-cups (perfectly legal on Savannah's streets). River Street Jazz and the Savannah Candy Kitchen are essential stops. The restaurants range from casual crab shacks to sit-down seafood.

Riverfront Plaza — the grassy corridor along the water — is where festival tents go up during St. Patrick's Day and other events. Walk out onto one of the river viewing platforms to watch massive container ships navigate the channel just yards away. At night, the whole waterfront lights up beautifully.`,
    pullQuote: {
      text: "The riverfront energy is infectious — we ended up staying for hours longer than we planned.",
      attribution: "— Frank B., Atlanta"
    },
    reviews: [
      { initials: "NB", name: "Nicole B.", date: "Summer 2024", text: "The pralines at Savannah Candy Kitchen are genuinely dangerous. We bought three boxes." },
      { initials: "JW", name: "Jake W.", date: "March 2025", text: "Grab a frozen cocktail in a to-go cup and just walk. So much fun." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1639428424631-d538246237fb?w=800&q=80"
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
  }

];

// ── HOW TO ADD A NEW ITEM ────────────────────────────────────
// 1. Copy the template block from the top of this file
// 2. Give it a unique id (e.g., "chs-battery-walk" or "sav-moon-river")
// 3. Fill in all the fields
// 4. Add your item object to the ITINERARY_ITEMS array above
// 5. Save — the app will pick it up automatically on next load
// ────────────────────────────────────────────────────────────
