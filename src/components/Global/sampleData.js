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

export const HolyPlacespackage = [
  {
    id: 1,
    name: "Varanasi (Kashi, Banaras)",
    duration: "3 Days / 2 Nights",
    price: 4999,
    catagory: "Religious Places",
    description:
      "Varanasi, also called Kashi or Banaras, is among the world’s oldest living cities and a sacred hub for Hindus. Located on the banks of the holy river Ganga, the city is often referred to as the spiritual capital of India. Pilgrims from across the globe arrive here to perform rituals, seek blessings, and experience the divine charm of the ghats. The Kashi Vishwanath Temple, dedicated to Lord Shiva, is the spiritual centerpiece and a must-visit site for devotees. The evening Ganga Aarti at Dashashwamedh Ghat leaves visitors mesmerized with its chants, diyas, and rhythmic prayers. Apart from its religious importance, Varanasi is also a cultural hotspot. The city has been a center for learning, classical music, literature, silk weaving, and Ayurveda for centuries. Wandering through its narrow lanes reveals a blend of tradition, devotion, and timeless heritage. Sarnath, located nearby, marks the site where Lord Buddha delivered his first sermon, adding to the city’s multi-religious appeal. From soulful boat rides at sunrise to exploring its bustling bazaars, Varanasi offers a unique journey where history, spirituality, and culture coexist beautifully. Every traveler who visits carries back a sense of peace, devotion, and timeless connection with India’s ancient roots.",
    location: "Varanasi",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Ganga Aarti",
      "Day 2: Kashi Vishwanath Temple Visit",
      "Day 3: Sarnath & Departure"
    ],
    image: abc,
    images: [food1, hotel, abc],
    Food:
      "The food culture of Varanasi reflects both its spiritual essence and its vibrant local traditions. A day often begins with the famous kachori-sabzi, a spicy yet comforting breakfast loved by locals and tourists alike. Sweet, crispy jalebis paired with a hot cup of chai served in clay kulhads add to the morning charm. The bustling streets of the old city are filled with vendors offering specialties like tamatar chaat, golgappe, and dahi vada, which bring out the tangy and spicy flavors of Banaras. Seasonal delicacies such as malaiyo in winter and refreshing thandai infused with saffron and dry fruits are unique to this region. Varanasi is also famous for its lassi topped with thick cream, and the legendary Banarasi paan, considered a symbol of hospitality. Altogether, the food here is not just about taste but an emotional and cultural experience that stays with travelers long after their visit.",
    StayOption:
      "Varanasi provides diverse stay options to suit every traveler’s need. Budget-friendly hotels and guesthouses near the ghats are popular among pilgrims who want to stay close to the spiritual heart of the city. Many dharamshalas and ashrams offer simple accommodation with vegetarian meals, ideal for those seeking a devotional atmosphere. For tourists desiring comfort, boutique stays and modern hotels ensure a peaceful experience while maintaining proximity to temples and ghats. Luxury riverside resorts with panoramic views of the Ganga offer a blend of spirituality and relaxation, making Varanasi welcoming for all types of visitors."
  },

  {
    id: 2,
    name: "Ayodhya – Ram Janmabhoomi",
    duration: "3 Days / 2 Nights",
    price: 5999,
    catagory: "Religious Places",
    description:
      "Ayodhya, the birthplace of Lord Rama, holds unmatched significance in the Hindu epic Ramayana. The recently inaugurated Ram Mandir has made Ayodhya a focal point of devotion for millions of devotees. Nestled along the banks of River Sarayu, this sacred city is a treasure of timeless temples, serene ghats, and stories that echo from every corner. Pilgrims flock to Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Dasharath Mahal to relive the tales of the Ramayana. The evening Sarayu Aarti, with oil lamps illuminating the river, creates a divine atmosphere. Beyond its spiritual aura, Ayodhya reflects the cultural legacy of Awadh with its classical music, folklore, and ancient traditions. Visitors can stroll through traditional bazaars, explore historical sites, and immerse themselves in devotional chants that echo throughout the city. Every experience in Ayodhya, from the architecture of the temples to the prayers of the devotees, draws visitors closer to the roots of Sanatan Dharma and the epic narrative of Lord Rama’s life.",
    location: "Ayodhya",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Sarayu Aarti",
      "Day 2: Ram Mandir & Hanuman Garhi Visit",
      "Day 3: Kanak Bhawan & Departure"
    ],
    image: abc2,
    images: [food2, hotel1, abc2],
    Food:
      "Food in Ayodhya reflects the simplicity and sattvic traditions associated with Lord Rama’s birthplace. Pilgrims can savor pure vegetarian meals, often prepared without onion and garlic, to maintain spiritual sanctity. Popular dishes include poori-sabzi, kheer, khichdi, and a variety of laddoos served as prasad. Sweet shops around the temples are famous for peda, gujia, and rabri that melt in the mouth. Visitors also relish the regional Awadhi flavors, such as mild curries, chaats, and refreshing lassi. Street vendors near Ram Mandir offer warm pakoras, samosas, and jalebis for a quick bite, while dharamshalas provide wholesome thalis to devotees. Ayodhya’s food is not about extravagance but about purity, devotion, and cultural identity that deeply connects food with faith.",
    StayOption:
      "Ayodhya offers accommodations ranging from affordable dharamshalas and ashrams to mid-range hotels and newly developed guesthouses near the Ram Mandir. Many pilgrims prefer simple lodging in spiritual surroundings, often accompanied by vegetarian meals. For tourists seeking comfort, boutique hotels and modern stays provide clean rooms and basic amenities while keeping visitors close to the city’s sacred sites."
  },

  {
    id: 3,
    name: "Haridwar & Rishikesh",
    duration: "4 Days / 3 Nights",
    price: 6999,
    catagory: "Religious Places",
    description:
      "Haridwar and Rishikesh, located in Uttarakhand along the banks of the Ganga River, are considered twin spiritual towns that attract millions of devotees, saints, and seekers each year. Haridwar, meaning 'Gateway to God,' is famous for the grand Ganga Aarti at Har Ki Pauri, where thousands gather to witness the river lit with countless lamps. The holy dip in the Ganga is believed to cleanse sins and bestow blessings. Rishikesh, known as the 'Yoga Capital of the World,' is a serene town dotted with ashrams, meditation centers, and suspension bridges like Ram Jhula and Lakshman Jhula. It is also a hub for adventure sports like river rafting, making it a unique blend of spirituality and thrill. Together, Haridwar and Rishikesh offer a divine journey into self-discovery, where traditions, yoga, and devotion converge in harmony. Pilgrims, saints, and international visitors alike find peace, purpose, and enlightenment in these sacred towns.",
    location: "Haridwar & Rishikesh",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Har Ki Pauri Aarti",
      "Day 2: Visit Temples & Ghats",
      "Day 3: Rishikesh Yoga & Adventure",
      "Day 4: Departure"
    ],
    image: abc3,
    images: [food3, hotel2, abc3],
    Food:
      "Haridwar and Rishikesh are known for their simple yet soulful vegetarian cuisine. Pilgrims enjoy aloo-puri, kachori, and halwa as breakfast delights, while fresh seasonal fruits and lassi are sold in abundance. Local street food like aloo tikki, chaats, and kadhi-chawal are popular among tourists. Ashrams in Rishikesh serve sattvic meals, often consisting of dal, chapati, rice, and vegetables, prepared with minimal spices for meditation practitioners. For those looking for variety, cafes in Rishikesh offer herbal teas, vegan meals, and continental options catering to international visitors. Altogether, the food here nourishes both the body and soul, maintaining the balance of purity and taste.",
    StayOption:
      "Haridwar and Rishikesh offer accommodation ranging from spiritual ashrams to luxury hotels overlooking the Ganga. Pilgrims often choose dharamshalas and guesthouses near the ghats, while yoga enthusiasts stay in ashrams for a holistic experience. Modern hotels and riverside resorts in Rishikesh cater to those who desire comfort and wellness retreats with stunning views."
  },

  {
    id: 4,
    name: "Mathura & Vrindavan",
    duration: "3 Days / 2 Nights",
    price: 5499,
    catagory: "Religious Places",
    description:
      "Mathura, the birthplace of Lord Krishna, and Vrindavan, the town of his childhood leelas, are among the most beloved pilgrimage destinations in India. Mathura is dotted with temples, ghats, and sacred ponds that tell tales of Krishna’s early life, while Vrindavan resonates with devotion through its thousands of temples dedicated to Radha-Krishna. The Banke Bihari Temple, ISKCON Temple, and Prem Mandir are highlights that captivate devotees. During festivals like Janmashtami and Holi, the towns come alive with colors, bhajans, and joyous celebrations. Pilgrims immerse themselves in kirtans, temple rituals, and parikrama around sacred sites, experiencing a blend of faith and festivity. The Yamuna River flows gently, adding serenity to the divine atmosphere. Mathura and Vrindavan together form a timeless land where Krishna’s presence is felt in every corner, inviting visitors to reconnect with devotion, joy, and the eternal leelas of Lord Krishna.",
    location: "Mathura & Vrindavan",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Yamuna Aarti",
      "Day 2: Krishna Janmabhoomi & ISKCON Visit",
      "Day 3: Vrindavan Temples & Departure"
    ],
    image: abc5,
    images: [food4, hotel3, abc5],
    Food:
      "Food in Mathura and Vrindavan is deeply connected with the traditions of Lord Krishna. Pilgrims enjoy delicious milk-based sweets like peda, rabri, and makhan mishri, which are considered prasad. Popular local dishes include kachori-sabzi, aloo tikki, and chaats served in the bustling streets. Vrindavan offers sattvic thalis in ashrams, including dal, chapati, rice, and seasonal vegetables cooked with devotion. Visitors also enjoy refreshing lassi and herbal drinks served in earthen pots. During festivals, special prasad and sweets like laddoos and gujiyas are distributed among devotees, making food not just a culinary delight but a spiritual offering in itself.",
    StayOption:
      "Mathura and Vrindavan provide ample stay options, from budget-friendly dharamshalas near temples to mid-range hotels with modern amenities. Ashrams are a preferred choice for devotees seeking a devotional atmosphere, while luxury resorts on the outskirts offer peaceful retreats surrounded by greenery."
  },

  {
    id: 5,
    name: "Amritsar – Golden Temple",
    duration: "3 Days / 2 Nights",
    price: 6499,
    catagory: "Religious Places",
    description:
      "Amritsar, located in Punjab, is home to the iconic Golden Temple, also known as Harmandir Sahib, the most revered pilgrimage site of Sikhism. The shrine, with its gold-plated dome reflecting in the sacred Amrit Sarovar, offers an aura of peace, devotion, and equality. Pilgrims from across the globe gather here to listen to Gurbani, take a dip in the holy sarovar, and volunteer in the langar, which serves free meals to thousands daily. Amritsar is not only a spiritual center but also a historical city that witnessed the freedom struggle of India, with the Jallianwala Bagh memorial standing as a symbol of sacrifice. The nearby Wagah Border ceremony adds a patriotic flavor to the visit. The city is also a cultural hub, known for Punjabi folk music, dance, and traditional crafts. Every corner of Amritsar reflects hospitality, warmth, and devotion, making it a destination where spirituality and culture merge seamlessly.",
    location: "Amritsar",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Golden Temple Visit",
      "Day 2: Jallianwala Bagh & Local Tour",
      "Day 3: Wagah Border & Departure"
    ],
    image: abc10,
    images: [food1, hotel4, abc10],
    Food:
      "Food in Amritsar is a celebration of flavors that combine devotion and Punjabi hospitality. The langar at Golden Temple is one of the world’s largest community kitchens, serving simple yet soulful meals of dal, roti, and kheer to thousands daily. Apart from langar, Amritsar is famous for its Amritsari kulcha, chole, and lassi that are staples for every visitor. Street food like jalebi, pakoras, and paneer tikka adds to the culinary charm. The city’s dhabas serve hearty Punjabi thalis with butter naan, sarson da saag, and makki di roti, leaving visitors with unforgettable flavors. Food in Amritsar is not just nourishment; it is a cultural expression of love and devotion.",
    StayOption:
      "Amritsar offers a range of accommodations including hotels, guesthouses, and budget stays near the Golden Temple. Pilgrims often choose to stay within the temple’s serene guest accommodations, while tourists can opt for modern hotels and resorts that provide comfort with Punjabi hospitality."
  },
  {
    id: 6,
    name: "Prayagraj (Allahabad): ",
    duration: "5 Days / 4 Nights",
    price: 7499,
    location: "Varanasi",
    catagory: "Holy",
    description:
      "A city of confluence, Prayagraj is home to Triveni Sangam, where rivers Ganga, Yamuna, and Saraswati meet. It hosts the world’s largest religious gathering – Kumbh Mela. The Akshayavat Tree and Anand Bhawan add historical and cultural depth to this holy city.",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Har Ki Pauri Ganga Aarti",
      "Day 2: Mansa Devi & Chandi Devi Temple",
      "Day 3: Rishikesh Ram Jhula & Laxman Jhula",
      "Day 4: Yoga & Adventure Activities",
      "Day 5: Departure",
    ],
    image: abc,
  },
  {
    id: 7,
    name: "Chitrakoot",
    duration: "2 Days / 1 Night",
    price: 3500,
    catagory: "Holy",
    location: "Ayodhya, Uttar Pradesh",
    description:
      "Deeply connected with Lord Rama’s exile, Chitrakoot is a land of religious significance and natural beauty. Key sites include Ramghat, Kamadgiri, Bharat Milap Temple, Hanuman Dhara, and Sati Anusuya Ashram. The serene surroundings make it a peaceful pilgrimage destination.",
    services: ["Transport", "Accommodation", "Guide"],
    itinerary: [
      "Day 1: Shri Ram Janmabhoomi Temple",
      "Day 1 Evening: Saryu Aarti",
      "Day 2: Hanuman Garhi & Kanak Bhawan",
    ],
    image: abc2,
  },
  {
    id: 8,
    name: "Vindhyachal (Mirzapur)",
    duration: "3 Days / 2 Nights",
    price: 4999,
    catagory: "Holy",
    location: "Mathura, Uttar Pradesh",
    description:
      "Vindhyachal is one of the most powerful Shakti Peeths, dedicated to Goddess Vindhyavasini. The temple is located on the banks of the Ganga River and attracts lakhs of devotees. Nearby attractions include Sita Kund, Ashtabhuja Temple, and Kalikhoh Temple.",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Krishna Janmabhoomi Temple",
      "Day 2: Banke Bihari Temple & Prem Mandir",
      "Day 3: Govardhan Parikrama & Departure",
    ],
    image: abc3,
  },
  {
    id: 9,
    name: "Sarnath (Varanasi) ",
    duration: "2 Days / 1 Night",
    price: 3999,
    catagory: "Holy",
    location: "Prayagraj, Uttar Pradesh",
    description:
      "A sacred Buddhist site where Lord Buddha delivered his first sermon after attaining enlightenment. Key attractions include Dhamek Stupa, Chaukhandi Stupa, Ashoka Pillar, and the Sarnath Museum. It is a center of peace, meditation, and Buddhist heritage.",
    services: ["Transport", "Accommodation", "Guide"],
    itinerary: [
      "Day 1: Triveni Sangam Snan & Hanuman Mandir",
      "Day 2: Akshayvat Tree & Anand Bhawan",
    ],
    image: abc,
  },
  {
    id: 12,
    name: "Gorakhpur",
    duration: "5 Days / 4 Nights",
    price: 7499,
    catagory: "Holy",
    location: "Haridwar & Rishikesh, Uttarakhand",
    description:
      "Famous for Gorakhnath Temple dedicated to Guru Gorakhnath, the city is an important religious hub. Ramgarh Tal Lake and Geeta Press, which publishes Hindu religious texts, are also notable sites.",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Har Ki Pauri Ganga Aarti",
      "Day 2: Mansa Devi & Chandi Devi Temple",
      "Day 3: Rishikesh Ram Jhula & Laxman Jhula",
      "Day 4: Yoga & Adventure Activities",
      "Day 5: Departure",
    ],
    image: abc5,
  },
  {
    id: 106,
    name: "Kedarnath Yatra",
    duration: "6 Days / 5 Nights",
    price: 12999,
    catagory: "Holy",
    location: "Kedarnath, Uttarakhand",
    description:
      "An ancient riverside pilgrimage town with a chain of nearly 100 Shiva temples built along the Yamuna riverbank. It is believed to be a place blessed by Lord Shiva himself and attracts devotees during Shivratri fairs.",
    services: ["Transport", "Accommodation", "Food", "Guide", "Pony Service"],
    itinerary: [
      "Day 1: Haridwar Arrival",
      "Day 2: Guptkashi Stay",
      "Day 3: Kedarnath Trek & Darshan",
      "Day 4: Kedarnath Temple Morning Aarti",
      "Day 5: Return to Guptkashi",
      "Day 6: Departure",
    ],
    image: abc3,
  },
  {
    id: 721,
    name: "Naimisharanya (Sitapur) ",
    duration: "5 Days / 4 Nights",
    price: 11999,
    catagory: "Holy",
    location: "Badrinath, Uttarakhand",
    description:
      "A sacred forest mentioned in the Mahabharata and Puranas. It is believed that Lord Vishnu destroyed demons here. Chakra Tirth, Lalita Devi Temple, and Hanuman Gaddi are the prime attractions. It is a serene place for meditation and spiritual exploration.",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Haridwar Arrival",
      "Day 2: Joshimath Stay",
      "Day 3: Badrinath Darshan",
      "Day 4: Mana Village Visit",
      "Day 5: Departure",
    ],
    image: abc2,
  },
  {
    id: 823,
    name: "Dwarka-Somnath Tour",
    duration: "4 Days / 3 Nights",
    price: 8999,
    catagory: "Holy",
    location: "Dwarka & Somnath, Gujarat",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Dwarkadhish Temple",
      "Day 2: Nageshwar Jyotirlinga",
      "Day 3: Somnath Temple",
      "Day 4: Departure",
    ],
    image: abc5,
  },
  {
    id: 132,
    name: "Dudhwa National Park (Lakhimpur Kheri): ",
    duration: "4 Days / 3 Nights",
    price: 8999,
    catagory: "Holy",
    description:
      "A part of Project Tiger, Dudhwa is home to Bengal tigers, leopards, swamp deer, rhinos, and migratory birds. Jeep safaris, birdwatching, and elephant rides make it a thrilling experience for wildlife lovers.",
    location: "Dwarka & Somnath, Gujarat",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Dwarkadhish Temple",
      "Day 2: Nageshwar Jyotirlinga",
      "Day 3: Somnath Temple",
      "Day 4: Departure",
    ],
    image: abc5,
  },

  {
    id: 1345,
    name: "Katarniaghat Wildlife Sanctuary (Bahraich) ",
    duration: "4 Days / 3 Nights",
    price: 8999,
    catagory: "Holy",
    description:
      "This sanctuary is rich in biodiversity with gharials, Gangetic dolphins, elephants, and rare bird species. It offers eco-tourism experiences with river boating and forest exploration.",
    location: "Dwarka & Somnath, Gujarat",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Dwarkadhish Temple",
      "Day 2: Nageshwar Jyotirlinga",
      "Day 3: Somnath Temple",
      "Day 4: Departure",
    ],
    image: abc5,
  },
];
