import abc from "../../assets/Images/abc4.jpg";
import abc5 from "../../assets/Images/abc6.jpg";
import abc10 from "../../assets/Images/mhadev.avif";
import abc3 from "../../assets/Images/abc9.jpg";
import abc2 from "../../assets/Images/abc2.jpg";

export const samplePackages = [
  {
    id: 1,
    name: "Varanasi Spiritual Tour",
    duration: "3 Days / 2 Nights",
    price: 4999,
    location: "Varanasi",
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
    services: ["Transport", "Accommodation", "Guide"],
    itinerary: [
      "Day 1: Ram Janmabhoomi Temple Visit",
      "Day 2: Hanuman Garhi & Local Sightseeing",
    ],
    image: abc2,
  },
  {
    id: 3,
    name: "Mathura-Vrindavan Pilgrimage",
    duration: "4 Days / 3 Nights",
    price: 5999,
    image: abc5,
    location: "Mathura & Vrindavan",
    services: ["Transport", "Accommodation", "Food", "Guide"],
    description:
      "Experience the spiritual essence of Varanasi with guided temple visits, Ganga Aarti, and boat rides. Perfect for those seeking peace and cultural exploration.",
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
    name: "Haridwar-Rishikesh Ganga Tour",
    duration: "5 Days / 4 Nights",
    price: 7499,
    location: "Varanasi",
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

