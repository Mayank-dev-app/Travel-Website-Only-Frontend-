import img1 from "../../assets/Images/Adventure/agra-fort.jpg"
import img2 from "../../assets/Images/Adventure/Agra.jpg"
import img3 from "../../assets/Images/Adventure/Lucknow.jpg"
import img4 from "../../assets/Images/Adventure/NOIDA.jpg"


import food1 from "../../assets/Images/Food/Shop.jpg";
import food2 from "../../assets/Images/Food/cookies.jpg";
import food3 from "../../assets/Images/Food/sweets.jpg";
import food4 from "../../assets/Images/Food/jelabi.webp";

import hotel from "../../assets/Images/Hotel/Hotel.jpg";
import hotel1 from "../../assets/Images/Hotel/Hotel1.jpg";
import hotel2 from "../../assets/Images/Hotel/Hotel2.jpg";
import hotel3 from "../../assets/Images/Hotel/Hotel4.jpg";
import hotel4 from "../../assets/Images/Hotel/Hotel5.jpg";


const AdventureTourspackages = [
{
  id: 21,
  name: "Agra Fort",
  duration: "1 Day",
  price: 2500,
  catagory: "Historical Places",
  description:
    "Agra Fort, a UNESCO World Heritage Site, is one of the finest examples of Mughal architecture in India. Built primarily by Emperor Akbar in the 16th century, the fort served as the main residence of the Mughal emperors until Delhi became the capital. Constructed with massive red sandstone walls stretching over 2.5 kilometers, the fort houses several exquisite palaces, audience halls, and mosques within its complex. Notable structures include the Jahangir Mahal, Diwan-i-Khas, Diwan-i-Aam, Sheesh Mahal, and the Musamman Burj, from where Emperor Shah Jahan is believed to have gazed at the Taj Mahal during his captivity. The fort stands as a symbol of strength, grandeur, and history, reflecting the opulence of the Mughal dynasty. Walking through its gates and courtyards, visitors experience the blend of Persian, Islamic, and Indian styles of architecture. Every corner tells stories of royal life, political intrigue, and cultural evolution. Agra Fort is not only an architectural marvel but also a living testimony of India’s rich past. A guided tour provides historical insights that make the visit more engaging, helping travelers connect with centuries-old heritage. Whether it’s the magnificent halls, intricate carvings, or breathtaking views of the Taj Mahal from its ramparts, Agra Fort is an unforgettable experience for history enthusiasts, architecture admirers, and cultural explorers.",
  location: "Agra, Uttar Pradesh",
  services: ["Transport", "Guide", "Entry Tickets", "Snacks"],
  itinerary: [
    "Pickup from hotel",
    "Guided tour of Agra Fort",
    "Photography session inside fort",
    "Light refreshments/snacks",
    "Drop-off at hotel"
  ],
  image: img1,
  images: [img1, hotel2, food2],
  Food:
    "Food in Agra reflects the flavors of Mughlai heritage and local street traditions. Visitors often enjoy Mughlai delicacies like biryani, kebabs, and tandoori dishes in nearby restaurants after their fort visit. Street stalls outside Agra Fort offer spicy chaats, petha (a famous sweet of Agra), samosas, and refreshing lassi. Travelers can also try dalmoth, a crunchy snack that pairs well with tea. Cafés around the fort provide quick meals and snacks for tourists. For those who prefer traditional experiences, local dhabas serve hearty thalis with roti, dal, paneer, and seasonal vegetables. Altogether, the food adds another layer of flavor to the cultural journey, blending history with culinary delight.",
  StayOption:
    "Agra provides a wide range of accommodation options for visitors. Budget travelers can find guesthouses and affordable hotels near the fort, while mid-range tourists often stay in comfortable hotels offering modern amenities. Luxury seekers can enjoy five-star hotels with Taj Mahal views and world-class facilities. Heritage stays also give a royal experience, reflecting Mughal architecture and culture, ensuring every traveler finds a stay that suits their preference and budget."
},
{
  id: 2,
  name: "Taj Mahal, Agra",
  duration: "1 Day",
  price: 3500,
  catagory: "Historical Places",
  description:
    "The Taj Mahal, one of the Seven Wonders of the World, is India’s most iconic monument and a UNESCO World Heritage Site. Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this white marble mausoleum stands as an eternal symbol of love and devotion. Located on the banks of the Yamuna River, the Taj Mahal is an architectural masterpiece combining Persian, Islamic, and Indian styles. Its perfect symmetry, intricate marble inlay work, and the stunning reflection in the water channels of the Charbagh gardens leave visitors spellbound. At sunrise, the monument glows with a golden hue, while at sunset, it bathes in shades of pink, creating a mesmerizing sight. Inside, the cenotaphs of Shah Jahan and Mumtaz Mahal lie surrounded by delicate carvings and verses from the Quran. Nearby attractions such as Mehtab Bagh provide breathtaking views of the Taj Mahal, especially in the moonlight. Visitors also explore Agra Fort and local markets filled with handicrafts, marble artifacts, and traditional souvenirs. Every corner of Agra narrates stories of Mughal grandeur, art, and culture. A day spent at the Taj Mahal is not just sightseeing but an emotional journey into history, romance, and timeless beauty that continues to inspire travelers across the globe.",
  location: "Agra, Uttar Pradesh",
  services: ["Guide", "Transport", "Lunch"],
  itinerary: [
    "Morning pickup",
    "Visit Taj Mahal",
    "Explore Mehtab Bagh",
    "Shopping at local market",
    "Return drop-off"
  ],
  image: img2,
  images: [img2, food2, hotel2],
  Food:
    "Agra’s food culture is as rich as its heritage. After visiting the Taj Mahal, tourists often indulge in Mughlai delicacies such as biryani, kebabs, and butter chicken that carry the essence of royal kitchens. Street food is equally famous—Agra’s chaat, bhalla, and dalmoth are loved by locals and travelers alike. Petha, a translucent sweet made of ash gourd, is a signature delicacy available in multiple flavors like kesar and angoori. Refreshing lassi in kulhads, spicy samosas, and jalebis make the food journey even more delightful. Local markets near the Taj Mahal also serve quick snacks and vegetarian thalis, ensuring that every visitor experiences the city’s diverse culinary traditions.",
  StayOption:
    "Agra offers accommodation options for every budget and taste. Luxury seekers can choose five-star hotels with views of the Taj Mahal, featuring world-class amenities and fine dining. Mid-range travelers find comfort in boutique hotels and guesthouses offering warm hospitality and modern facilities. Budget visitors often prefer lodges and hostels near the monument, while heritage havelis provide a royal experience with Mughal-inspired interiors. No matter the preference, Agra ensures a memorable stay."
},

{
  id: 3,
  name: "Lucknow Heritage Tour",
  duration: "2 Days",
  price: 5000,
  catagory: "Cultural & Heritage",
  description:
    "Lucknow, the City of Nawabs, is famous for its royal charm, cultural elegance, and rich history. The city is adorned with magnificent Mughal and Awadhi architecture that narrates tales of grandeur. The Bara Imambara, built by Nawab Asaf-ud-Daula in the 18th century, is an architectural wonder known for its central hall without pillars and the intricate labyrinth (bhool bhulaiya). The Rumi Darwaza, an ornate gateway, is another marvel showcasing the Nawabi era’s architectural brilliance. Chota Imambara dazzles with chandeliers, glass works, and elaborate decorations. The British Residency, a site of the 1857 revolt, stands as a reminder of India’s freedom struggle. Hazratganj market offers a blend of modern shopping with traditional vibes, while streets filled with kebab stalls reflect the city’s culinary pride. Evening walks through old Lucknow reveal stories of culture, art, and tehzeeb that still thrive in every corner. Known for its music, poetry, and kathak dance, Lucknow is a cultural delight that connects travelers with India’s glorious past and artistic heritage.",
  location: "Lucknow, Uttar Pradesh",
  services: ["Hotel Stay", "Meals", "Guide"],
  itinerary: [
    "Day 1: Bara Imambara, Rumi Darwaza, Chota Imambara",
    "Day 2: Residency, Hazratganj Market, Tunday Kebabi"
  ],
  image: img3,
  images: [img3, food3, hotel3],
  Food:
    "Lucknow is world-famous for its Awadhi cuisine, especially its kebabs and biryanis. The legendary Tunday Kebabi serves melt-in-the-mouth galouti kebabs made with secret spices. Lucknowi biryani, rich in aroma and flavor, is another must-try dish. Street food lovers enjoy basket chaat, kachori, and samosas in Hazratganj and Chowk. Sweet delights such as malai ki gilori, kulfi, and sheermal bread highlight the city’s Nawabi influence. Vegetarian visitors are equally satisfied with dal, paneer, and seasonal curries cooked in rich Awadhi style. Food in Lucknow is not just about taste—it is a royal experience where every dish reflects centuries-old culinary heritage.",
  StayOption:
    "Lucknow offers diverse accommodations ranging from budget hotels near Charbagh to mid-range boutique hotels around Hazratganj. Luxury seekers can stay in heritage-style hotels and modern five-star properties offering Nawabi hospitality. Guesthouses and homestays are also available for travelers who wish to experience local traditions in a family environment."
},

{
  id: 4,
  name: "NOIDA Adventure Park",
  duration: "1 Day",
  price: 4000,
  catagory: "Adventure & Fun",
  description:
    "NOIDA Adventure Park is a thrilling escape for families, youngsters, and thrill-seekers. Spread across acres of land, the park features high-speed rides, roller coasters, water slides, and fun zones that promise unlimited excitement. From wave pools and lazy rivers to adventure rides like sky drops and giant wheels, the park caters to both adrenaline lovers and those seeking relaxation. The adventure zone offers activities like wall climbing, ziplining, and go-karting, while the water park section keeps visitors refreshed with wave pools and rain dance setups. Evening musical shows and live performances add to the entertainment, making it a perfect weekend destination. Safety measures, clean facilities, and a variety of rides ensure an enjoyable experience for all age groups. Whether you are looking for family bonding, team outings, or a fun day with friends, NOIDA Adventure Park provides a blend of thrill, fun, and relaxation under one roof.",
  location: "NOIDA, Uttar Pradesh",
  services: ["Entry Tickets", "Lunch", "Transport"],
  itinerary: [
    "Arrival at Adventure Park",
    "Enjoy rides & water activities",
    "Lunch break",
    "Evening musical show",
    "Return journey"
  ],
  image: img4,
  images: [img4, food4, hotel4],
  Food:
    "The food courts at NOIDA Adventure Park cater to a variety of tastes and preferences. Visitors can enjoy North Indian thalis, fast food, Chinese dishes, and street-style snacks. Popular options include burgers, pizzas, noodles, and cold beverages that appeal to youngsters. For traditional food lovers, stalls serve chole bhature, kachori, and pav bhaji. Ice creams, shakes, and candy floss are children’s favorites. Families often enjoy combo meals at pocket-friendly rates, ensuring energy throughout the day. The park’s hygienic and diverse food options make sure that every visitor finds something to satisfy their cravings.",
  StayOption:
    "Although most visitors prefer day trips, NOIDA offers a wide range of stay options nearby. Families can choose from budget hotels, mid-range business hotels, and serviced apartments in the city center. Luxury seekers have access to premium hotels with swimming pools, gyms, and spa facilities, making the trip more relaxing."
},

{
  id: 5,
  name: "Agra & Mathura Tour",
  duration: "2 Days",
  price: 8000,
  catagory: "Religious & Historical Combo",
  description:
    "The Agra and Mathura tour combines the grandeur of Mughal architecture with the divine aura of Lord Krishna’s birthplace. In Agra, visitors explore the Taj Mahal, a symbol of eternal love, along with Agra Fort and Mehtab Bagh, which reflect the glory of the Mughal dynasty. The intricate carvings, marble artistry, and historical stories make Agra a paradise for history enthusiasts. On the second day, the journey continues to Mathura, revered as the birthplace of Lord Krishna. The Krishna Janmabhoomi temple, vibrant ghats, and holy ponds narrate tales from the epic Mahabharata. Vrindavan, nearby, enchants visitors with the devotion of its temples, including Banke Bihari and ISKCON Temple. Together, Agra and Mathura offer a rare experience that blends history, spirituality, and culture. The combination of Mughal splendor and Krishna devotion creates a journey that enriches the mind, soul, and heart, leaving travelers with unforgettable memories.",
  location: "Agra & Mathura, Uttar Pradesh",
  services: ["Hotel Stay", "Meals", "Guide", "Transport"],
  itinerary: [
    "Day 1: Taj Mahal, Agra Fort, Mehtab Bagh",
    "Day 2: Mathura temples, Vrindavan Banke Bihari, ISKCON Temple"
  ],
  image: img1,
  images: [img1, food1, hotel1],
  Food:
    "Agra and Mathura both offer a delightful culinary experience. In Agra, visitors enjoy Mughlai cuisine with dishes like biryani, kebabs, and tandoori specialties. Petha, dalmoth, and chaats are must-try street foods. In Mathura, food reflects devotion, with milk-based sweets like peda, rabri, and makhan mishri served as prasad in temples. Street vendors sell chaats, kachoris, and refreshing lassi in earthen pots. Vrindavan offers sattvic meals in ashrams, prepared with devotion and simplicity. Altogether, the food journey through Agra and Mathura adds depth to the spiritual and historical exploration.",
  StayOption:
    "Tourists can choose from a variety of stay options ranging from budget hotels near the Taj Mahal to luxury resorts with modern amenities. In Mathura and Vrindavan, ashrams and dharamshalas provide simple yet spiritually fulfilling accommodations, while boutique hotels and lodges ensure comfort and easy access to temples."
},
  {
    id: 6,
    image: img2,
    price: 12000,
    location: "Golden Triangle (Delhi-Agra-Jaipur)",
    description: "A classic tour covering heritage cities of North India.",
    duration: "5 Days",
    services: ["Hotel Stay", "Meals", "Guide", "Transport"],
    itinerary: [
      "Day 1: Delhi sightseeing (Red Fort, India Gate)",
      "Day 2: Delhi to Agra (Taj Mahal, Agra Fort)",
      "Day 3: Agra to Jaipur (Fatehpur Sikri)",
      "Day 4: Jaipur sightseeing (Amber Fort, City Palace)",
      "Day 5: Local market visit & departure"
    ]
  },
  {
    id: 7,
    image: img3,
    price: 3000,
    location: "Lucknow Food Walk",
    description: "Taste the best Nawabi delicacies on a guided food walk.",
    duration: "1 Day",
    services: ["Guide", "Food Tastings"],
    itinerary: [
      "Start at Hazratganj",
      "Tunday Kababi",
      "Royal sweets & kebabs",
      "Street food exploration"
    ]
  },
  {
    id: 8,
    image: img4,
    price: 4500,
    location: "NOIDA Nightlife Tour",
    description: "Party and explore the best pubs, cafes, and live music in NOIDA.",
    duration: "1 Night",
    services: ["Transport", "Club Entry", "Snacks"],
    itinerary: [
      "Pickup in evening",
      "Visit top pubs",
      "Live music cafe",
      "Late-night dinner",
      "Drop-off"
    ]
  },
  {
    id: 9,
    image: img1,
    price: 7000,
    location: "Agra with Fatehpur Sikri",
    description: "A historical tour combining Agra and the UNESCO site Fatehpur Sikri.",
    duration: "2 Days",
    services: ["Hotel Stay", "Guide", "Meals"],
    itinerary: [
      "Day 1: Taj Mahal & Agra Fort",
      "Day 2: Fatehpur Sikri & Buland Darwaza"
    ]
  },
  {
    id: 10,
    image: img2,
    price: 9500,
    location: "Agra & Gwalior Fort Tour",
    description: "Explore Agra’s wonders and the majestic Gwalior Fort.",
    duration: "3 Days",
    services: ["Hotel Stay", "Transport", "Guide"],
    itinerary: [
      "Day 1: Taj Mahal, Mehtab Bagh",
      "Day 2: Agra Fort, local market",
      "Day 3: Gwalior Fort, Sas-Bahu Temples"
    ]
  },
  {
    id: 11,
    image: img3,
    price: 15000,
    location: "Lucknow & Varanasi Spiritual Tour",
    description: "Experience the spiritual vibe of Lucknow and holy ghats of Varanasi.",
    duration: "5 Days",
    services: ["Hotel Stay", "Meals", "Guide", "Boat Ride"],
    itinerary: [
      "Day 1: Lucknow monuments",
      "Day 2: Local food walk",
      "Day 3: Drive to Varanasi",
      "Day 4: Ganga Aarti, Kashi Vishwanath Temple",
      "Day 5: Sarnath visit & departure"
    ]
  },
  {
    id: 12,
    image: img4,
    price: 2000,
    location: "NOIDA Shopping Tour",
    description: "A fun day exploring malls, markets, and street shopping in NOIDA.",
    duration: "1 Day",
    services: ["Transport", "Guide"],
    itinerary: [
      "DLF Mall of India",
      "Atta Market",
      "Street food tasting",
      "Return journey"
    ]
  },
  {
    id: 13,
    image: img1,
    price: 6000,
    location: "Agra Sunrise Tour",
    description: "Witness the Taj Mahal at sunrise for a magical experience.",
    duration: "1 Day",
    services: ["Transport", "Guide", "Breakfast"],
    itinerary: [
      "Early morning pickup",
      "Sunrise at Taj Mahal",
      "Visit Agra Fort",
      "Return journey"
    ]
  },
  {
    id: 14,
    image: img2,
    price: 8500,
    location: "Agra & Bharatpur Bird Sanctuary",
    description: "Enjoy a mix of heritage and nature with this Agra-Bharatpur tour.",
    duration: "2 Days",
    services: ["Hotel Stay", "Guide", "Transport"],
    itinerary: [
      "Day 1: Taj Mahal & Agra Fort",
      "Day 2: Keoladeo National Park safari"
    ]
  },
  {
    id: 15,
    image: img3,
    price: 4000,
    location: "Lucknow Handicraft Tour",
    description: "Explore Lucknow’s famous chikankari work and handicrafts.",
    duration: "1 Day",
    services: ["Guide", "Transport"],
    itinerary: [
      "Visit chikankari workshops",
      "Shopping in Aminabad",
      "Local snacks tasting"
    ]
  },
  {
    id: 16,
    image: img4,
    price: 10000,
    location: "NOIDA Adventure + Delhi City Tour",
    description: "Enjoy adventure sports in NOIDA followed by Delhi sightseeing.",
    duration: "2 Days",
    services: ["Hotel Stay", "Transport", "Guide"],
    itinerary: [
      "Day 1: NOIDA adventure park",
      "Day 2: Delhi sightseeing (Red Fort, India Gate, Qutub Minar)"
    ]
  },
  {
    id: 17,
    image: img1,
    price: 22000,
    location: "Agra, Jaipur & Udaipur Tour",
    description: "Royal Rajasthan tour with Agra’s Taj Mahal and forts.",
    duration: "6 Days",
    services: ["Hotel Stay", "Meals", "Guide", "Transport"],
    itinerary: [
      "Day 1: Agra sightseeing",
      "Day 2: Jaipur city tour",
      "Day 3: Amber Fort & local market",
      "Day 4: Udaipur city palace",
      "Day 5: Lake Pichola boat ride",
      "Day 6: Return"
    ]
  },
  {
    id: 18,
    image: img2,
    price: 18000,
    location: "Agra & Khajuraho Tour",
    description: "Experience Mughal glory with the exotic temples of Khajuraho.",
    duration: "5 Days",
    services: ["Hotel Stay", "Guide", "Transport"],
    itinerary: [
      "Day 1: Taj Mahal, Agra Fort",
      "Day 2: Fatehpur Sikri",
      "Day 3: Drive to Khajuraho",
      "Day 4: Temple sightseeing",
      "Day 5: Departure"
    ]
  },
  {
    id: 19,
    image: img3,
    price: 14000,
    location: "Lucknow & Ayodhya Tour",
    description: "Experience Nawabi charm with the holy city of Ayodhya.",
    duration: "4 Days",
    services: ["Hotel Stay", "Meals", "Guide"],
    itinerary: [
      "Day 1: Lucknow monuments",
      "Day 2: Food walk",
      "Day 3: Drive to Ayodhya (Ram Mandir, Saryu Ghat)",
      "Day 4: Return journey"
    ]
  },
  {
    id: 20,
    image: img4,
    price: 25000,
    location: "North India Adventure Tour",
    description: "A thrilling trip covering Delhi, NOIDA, Agra, and Jaipur.",
    duration: "7 Days",
    services: ["Hotel Stay", "Meals", "Guide", "Transport"],
    itinerary: [
      "Day 1: Delhi sightseeing",
      "Day 2: NOIDA adventure",
      "Day 3: Agra Taj Mahal",
      "Day 4: Fatehpur Sikri",
      "Day 5: Jaipur Amber Fort",
      "Day 6: Jaipur City Palace",
      "Day 7: Departure"
    ]
  }
];

export default AdventureTourspackages;
