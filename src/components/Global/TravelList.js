import abc from "../../assets/Images/abc4.jpg";
import abc5 from "../../assets/Images/abc6.jpg";
import abc10 from "../../assets/Images/mhadev.avif";
import abc3 from "../../assets/Images/abc9.jpg";
import abc2 from "../../assets/Images/abc2.jpg";

export const samplePackages = [
  {
    id: 1,
    name: "Varanasi (Kashi, Banaras)",
    duration: "3 Days / 2 Nights",
    price: 4999,
    description:
    " Known as the spiritual capital of India, Varanasi is one of the world’s oldest continuously inhabited cities. The Kashi Vishwanath Temple dedicated to Lord Shiva is the most important shrine here. The evening Ganga Aarti at Dashashwamedh Ghat is a divine spectacle. Visitors can also take boat rides on the Ganga River, explore ancient ghats, and witness centuries-old traditions",
    location: "Varanasi",
    catagory: "Religious Places",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Arrival & Ganga Aarti",
      "Day 2: Kashi Vishwanath Temple Visit",
      "Day 3: Sarnath & Departure",
    ],
    image: abc,
  },
  {
    id: 2,
    name: "Ayodhya Ram Janmabhoomi Tour",
    duration: "2 Days / 1 Night",
    price: 3999,
    location: "Varanasi",
    description:
    "Famed as the birthplace of Lord Rama, Ayodhya holds immense religious significance. The recently built Ram Mandir attracts millions of devotees worldwide. Other attractions include Hanuman Garhi, Kanak Bhawan, and the serene banks of the Sarayu River. The city is rich in Ramayana heritage and cultural legacy.",
    catagory: "Religious Places",
    services: ["Transport", "Accommodation", "Guide"],
    itinerary: [
      "Day 1: Ram Janmabhoomi Temple Visit",
      "Day 2: Hanuman Garhi & Local Sightseeing",
    ],
    image: abc2,
  },
  {
    id: 3,
    name: "Mathura-Vrindavan ",
    duration: "4 Days / 3 Nights",
    price: 5999,
    image: abc5,
    catagory: "Religious Places",
    location: "Mathura & Vrindavan",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    description:
      "Mathura, the birthplace of Lord Krishna, and Vrindavan, where he spent his childhood, are centers of devotion. Famous temples include Dwarkadhish Temple, ISKCON Temple, Banke Bihari Temple, and Prem Mandir. Festivals like Janmashtami and Holi are celebrated with great grandeur.",
    itinerary: [
      "Day 1: Krishna Janmabhoomi Temple",
      "Day 2: Banke Bihari Temple & Prem Mandir",
      "Day 3: ISKCON Temple & Local Markets",
      "Day 4: Departure",
    ],
  },
  {
    id: 4,
    name: "Prayagraj Sangam & Kumbh Experience",
    duration: "3 Days / 2 Nights",
    price: 5499,
    catagory: "Religious Places",
    location: "Prayagraj",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    itinerary: [
      "Day 1: Sangam Snan & Hanuman Mandir",
      "Day 2: Anand Bhawan & Kumbh Mela Visit",
      "Day 3: Departure",
    ],
    image: abc10,
  },
  {
    id: 5,
    name: "Prayagraj (Allahabad): ",
    duration: "5 Days / 4 Nights",
    price: 7499,
    catagory: "Religious Places",
    location: "Varanasi",
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
    image: abc3,
  },
];
