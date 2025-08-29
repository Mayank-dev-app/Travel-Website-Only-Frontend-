import abc from "../../assets/Images/abc4.jpg";
import abc5 from "../../assets/Images/abc6.jpg";
import abc10 from "../../assets/Images/mhadev.avif";
import abc3 from "../../assets/Images/abc9.jpg";
import abc2 from "../../assets/Images/abc2.jpg";

import food1 from "../../assets/Images/Food/Shop.jpg";
import food2 from "../../assets/Images/Food/cookies.jpg";
import food3 from "../../assets/Images/Food/sweets.jpg";
import food4 from "../../assets/Images/Food/jelabi.webp";

import hotel from "../../assets/Images/Hotel/Hotel.jpg";
import hotel1 from "../../assets/Images/Hotel/Hotel1.jpg";
import hotel2 from "../../assets/Images/Hotel/Hotel2.jpg";
import hotel3 from "../../assets/Images/Hotel/Hotel4.jpg";
import hotel4 from "../../assets/Images/Hotel/Hotel5.jpg";

export const samplePackages = [
  {
    id: 1,
    name: "Varanasi (Kashi, Banaras)",
    duration: "3 Days / 2 Nights",
    price: 4999,
    location: "Varanasi",
    image: abc,
    images: [food1, hotel, abc],
    category: "Religious Places",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Ganga Aarti",
      "Day 2: Kashi Vishwanath Temple Visit",
      "Day 3: Sarnath & Departure",
    ],
    description: `Varanasi, also known as Kashi or Banaras, is one of the world's oldest continuously inhabited cities. 
The city is located on the banks of the holy river Ganga and holds immense religious and cultural significance in India. 
For centuries, Varanasi has been considered the spiritual capital of India, attracting saints, scholars, poets, and 
pilgrims from across the globe. Walking through its narrow lanes, one can witness a blend of tradition, devotion, 
and history that coexists harmoniously. The mesmerizing ghats, where pilgrims gather for rituals and the famous Ganga 
Aarti, provide a deeply spiritual experience. The city is also a hub for classical music, silk weaving, yoga, and 
Ayurveda. Every corner of Varanasi tells a story that connects the past with the present, making it a place of 
timeless charm. Whether you seek spirituality, culture, or simply an unforgettable travel experience, Varanasi 
offers it all. `,
    Food: `
Varanasi is famous for its unique and rich culinary heritage that reflects the traditions of Uttar Pradesh and the spiritual energy of the city. The day here often begins with hot kachori sabzi, served with tangy aloo curry, followed by crispy jalebis that are enjoyed with a cup of steaming chai in a clay cup. As you walk through the bustling lanes, you will find vendors selling tamatar chaat, golgappe, and dahi vada, which are local favorites among tourists. The legendary Banarasi paan is more than just food – it is a cultural symbol of hospitality and flavor. Seasonal sweets like malaiyo in winter, along with rabri, peda, and lassi, make the culinary journey even richer. Street stalls near the ghats also serve thandai infused with dry fruits and saffron, offering a refreshing drink during temple visits. Altogether, food in Varanasi is not just about taste but an emotional and spiritual experience that stays with every traveler.
`,

    StayOption: `
Varanasi offers a wide range of stay options, from budget hotels near the ghats to luxurious riverside resorts with Ganga views. Pilgrims often prefer dharamshalas and ashrams that provide simple lodging and vegetarian meals. Guesthouses and boutique stays also ensure comfort while keeping visitors close to the city’s spiritual essence.
`,

    FamousPlaces: `
Varanasi is home to the sacred Kashi Vishwanath Temple, the spiritual heart of the city. Nearby, Sarnath reflects Buddha’s first sermon, while Ramnagar Fort showcases royal heritage. Other highlights include Bharat Mata Temple, Tulsi Manas Mandir, and Banaras Hindu University, offering a blend of history, culture, and spirituality.
`,
  },

  {
    id: 2,
    name: "Haridwar & Rishikesh",
    duration: "4 Days / 3 Nights",
    price: 6499,
    location: "Uttarakhand",
    image: abc5,
    images: [food2, hotel1, abc5],
    category: "Religious Places",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival at Haridwar & Evening Ganga Aarti at Har Ki Pauri",
      "Day 2: Temples of Haridwar & Local Sightseeing",
      "Day 3: Rishikesh - Laxman Jhula, Ram Jhula, Ashrams",
      "Day 4: Yoga Session & Departure",
    ],
    description: `
Haridwar and Rishikesh, nestled along the banks of the holy Ganga River in Uttarakhand, are twin spiritual cities that attract millions of devotees and travelers each year. Haridwar is renowned for the sacred Ganga Aarti at Har Ki Pauri, where pilgrims gather for blessings and rituals. Rishikesh, the Yoga Capital of the World, offers meditation centers, serene ashrams, and adventure sports like river rafting. Together, these cities blend spirituality, culture, and natural beauty, making them a gateway to the Himalayas as well as a profound destination for seekers of peace, devotion, and rejuvenation.
`,

    Food: `Street food like aloo puri, kachoris, samosas, and jalebis dominate Haridwar’s mornings. In Rishikesh, organic cafes serve satvik meals, smoothies, herbal teas, and continental food for international tourists...`,
    StayOption: `Ashrams and dharamshalas provide budget-friendly spiritual stays, while luxury hotels near the Ganga in Rishikesh offer serene river views...`,
    FamousPlaces: `Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple in Haridwar; Laxman Jhula, Parmarth Niketan, Beatles Ashram in Rishikesh...`,
  },

  {
    id: 3,
    name: "Mathura & Vrindavan",
    duration: "3 Days / 2 Nights",
    price: 3999,
    location: "Uttar Pradesh",
    image: abc10,
    images: [food3, hotel2, abc10],
    category: "Religious Places",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Krishna Janmabhoomi Temple in Mathura",
      "Day 2: Banke Bihari Temple & ISKCON Temple in Vrindavan",
      "Day 3: Barsana & Goverdhan Visit",
    ],
    description: `
Mathura and Vrindavan, the land of Lord Krishna, attract millions of devotees and tourists every year with their divine charm and cultural heritage. Mathura, believed to be the birthplace of Krishna, is filled with sacred temples and vibrant ghats along the Yamuna River. Just a few kilometers away, Vrindavan enchants visitors with countless temples like Banke Bihari Mandir and ISKCON, celebrating Krishna’s playful pastimes. Together, these holy towns offer a blend of devotion, spirituality, music, and tradition, making them timeless pilgrimage destinations.
`,
    Food: `Mathura is famous for peda, lassi, kachori-sabzi, and chaat. Vrindavan offers satvik bhojan (without onion and garlic), thalis, and sweets like rabri and gulab jamun...`,
    StayOption: `Pilgrims often stay in dharamshalas and guesthouses near temples. Mid-range and luxury hotels are available in Mathura for families...`,
    FamousPlaces: `Krishna Janmabhoomi, Dwarkadhish Temple, Banke Bihari Temple, ISKCON Temple, Nidhivan, Barsana, Goverdhan Parikrama...`,
  },

  {
    id: 4,
    name: "Kedarnath Dham Yatra",
    duration: "6 Days / 5 Nights",
    price: 12999,
    location: "Uttarakhand",
    image: abc2,
    images: [food4, hotel3, abc2],
    category: "Religious Places",
    services: [
      "Transport",
      "Accommodation",
      "Food",
      "Guide",
      "Helicopter (Optional)",
    ],
    itinerary: [
      "Day 1: Arrival at Haridwar",
      "Day 2: Guptkashi Stay",
      "Day 3: Trek/Helicopter to Kedarnath",
      "Day 4: Kedarnath Darshan & Return",
      "Day 5: Rudraprayag Sightseeing",
      "Day 6: Departure from Haridwar",
    ],
    description: `
Kedarnath, one of the 12 Jyotirlingas of Lord Shiva, is nestled in the majestic Himalayas of Uttarakhand and stands as a symbol of deep faith and devotion. Surrounded by snow-capped peaks and breathtaking valleys, this sacred shrine attracts thousands of pilgrims every year despite its challenging journey. The Kedarnath Temple, believed to be built by the Pandavas, holds immense mythological and spiritual significance. Visitors not only experience divine blessings here but also witness the raw beauty of nature in its purest form.
`,

    Food: `On the Kedarnath route, simple satvik meals are served including khichdi, roti, dal, and chai. At base camps, tourists enjoy Maggi, pakoras, and local pahadi dishes...`,
    StayOption: `Accommodation ranges from GMVN guesthouses and tents near Kedarnath temple to luxury hotels in Guptkashi and Rudraprayag...`,
    FamousPlaces: `Kedarnath Temple, Bhairavnath Temple, Gaurikund, Sonprayag, Mandakini River valley...`,
  },

  {
    id: 5,
    name: "Somnath & Dwarka",
    duration: "5 Days / 4 Nights",
    price: 10999,
    location: "Gujarat",
    image: abc3,
    images: [food1, hotel4, abc3],
    category: "Religious Places",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival at Somnath",
      "Day 2: Somnath Temple & Beach Visit",
      "Day 3: Dwarka - Dwarkadhish Temple",
      "Day 4: Nageshwar Jyotirlinga & Bet Dwarka",
      "Day 5: Departure",
    ],
    description: `
Somnath and Dwarka are two of the most revered pilgrimage destinations in Gujarat, each holding immense religious and cultural significance. The Somnath Temple, dedicated to Lord Shiva, is one of the 12 Jyotirlingas and has a glorious history of resilience and devotion. Dwarka, known as the kingdom of Lord Krishna, is home to the famous Dwarkadhish Temple that attracts millions of devotees every year. Together, these sacred sites offer a spiritual journey filled with divine energy, mythology, and timeless architectural beauty.
`,

    Food: `Gujarati thali with dal, roti, shaak, khichdi, thepla, and farsan is a staple here. Sweets like shrikhand, basundi, and mohanthal are popular...`,
    StayOption: `Luxury hotels and resorts near Somnath beach offer scenic stays, while budget hotels and dharamshalas are available for pilgrims in Dwarka...`,
    FamousPlaces: `Somnath Jyotirlinga, Triveni Sangam, Dwarkadhish Temple, Bet Dwarka, Nageshwar Jyotirlinga...`,
  },
];
