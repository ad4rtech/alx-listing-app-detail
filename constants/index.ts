import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80",
    discount: "",
    description:
      "Experience the refreshing breeze of the Indian Ocean in this luxury villa located in the heart of Seminyak, Bali. Perfect for families and group vacations.",
    host: "Ayu Wulandari",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    ],
    reviews: [
      {
        name: "Emily Carter",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        comment: "Beautiful villa! Everything was spotless and relaxing.",
      },
      {
        name: "John Miller",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        comment: "Amazing stay but the pool water was a bit cold.",
      },
    ],
  },

  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2070&q=80",
    discount: "30",
    description:
      "Enjoy breathtaking views in this cozy Aspen chalet. A perfect retreat for mountain lovers who enjoy peace and adventure.",
    host: "Michael Thompson",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    ],
    reviews: [
      {
        name: "Sophie Turner",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 5,
        comment: "The mountain view was breathtaking. Highly recommended!",
      },
    ],
  },

  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2074&q=80",
    discount: "",
    description:
      "A peaceful desert retreat designed for couples or solo travelers seeking tranquility.",
    host: "Alicia Rodriguez",
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06",
    ],
    reviews: [
      {
        name: "Mark Wilson",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 4,
        comment: "Loved the calm atmosphere. Will return again!",
      },
    ],
  },

  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
    discount: "15",
    description:
      "A luxurious penthouse located in downtown NYC with sweeping views of the skyline.",
    host: "David Kim",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
    reviews: [
      {
        name: "Tina Nguyen",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        comment: "Stunning views and fast WiFi. Perfect for business trips.",
      },
    ],
  },

  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image:
      "https://images.unsplash.com/photo-1578631613864-987f3259f6fe?auto=format&fit=crop&w=2070&q=80",
    discount: "20",
    description:
      "A serene riverside cabin ideal for fishing lovers and families.",
    host: "Oliver Jackson",
    images: [
      "https://images.unsplash.com/photo-1560448075-bb485b067938",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    ],
    reviews: [
      {
        name: "Grace Lee",
        avatar: "https://randomuser.me/api/portraits/women/54.jpg",
        rating: 5,
        comment: "Kayaking was fun! Very peaceful environment.",
      },
    ],
  },
];
