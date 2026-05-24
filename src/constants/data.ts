export const BUSINESS_INFO = {
  name: "Hum Tum Aur Poonch",
  tagline: "Because your pet deserves gentle care.",
  phone: "+917973716667",
  phoneDisplay: "+91 79-73716667",
  whatsapp: "917973716667",
  email: "humtumaurpoonch254@gmail.com",
  hours: "9AM–9PM",
  serviceArea: "Mobile grooming van service around the city",
};

export const TRUST_STATS = [
  { label: "Mobile Van Service", value: "At Your Doorstep" },
  { label: "Pets Groomed", value: "5000+" },
  { label: "Service Hours", value: "9AM - 9PM" },
  { label: "Hygienic Care", value: "100% Safe" },
];

export const SERVICES = [
  {
    id: "full-grooming",
    title: "Full Grooming",
    description: "The complete transformation. Includes bath, haircut, nail clipping, ear cleaning, and styling.",
    icon: "Scissors",
    badge: "Popular",
    category: "Full Service"
  },
  {
    id: "regular-bath",
    title: "Regular Bath",
    description: "Deep cleansing bath with premium shampoos and blow-dry to keep your pet fresh.",
    icon: "Bath",
    badge: "Essential",
    category: "Hygiene"
  },
  {
    id: "medical-bath",
    title: "Medical Bath",
    description: "Specialized medicated baths for pets with skin issues or allergies.",
    icon: "Stethoscope",
    badge: "Care",
    category: "Health"
  },
  {
    id: "aroma-spa",
    title: "Aroma Spa",
    description: "Relaxing spa session with essential oils for a stress-free grooming experience.",
    icon: "Sparkles",
    badge: "Luxury",
    category: "Spa"
  },
  {
    id: "tick-removal",
    title: "Tick Removal",
    description: "Professional and safe removal of ticks and fleas to protect your pet's health.",
    icon: "ShieldAlert",
    badge: "Vital",
    category: "Health"
  },
  {
    id: "haircut",
    title: "Haircut",
    description: "Breed-specific or custom haircuts to keep your pet looking sharp and comfortable.",
    icon: "Palette",
    badge: "Style",
    category: "Full Service"
  },
];

export const DOG_PRICES = {
  small: [
    { item: "Regular Bath", price: 800 },
    { item: "Medical Bath", price: 1000 },
    { item: "Aroma Spa", price: 1100 },
    { item: "Tick Removal", price: 300 },
    { item: "Ear Cleaning", price: 50 },
    { item: "Nail Cut/Grinding", price: 150 },
    { item: "Tooth Cleaning", price: 150 },
    { item: "Bath + Haircut", price: 1250 },
    { item: "Hygiene Cut", price: 300 },
  ],
  medium: [
    { item: "Regular Bath", price: 900 },
    { item: "Medical Bath", price: 1100 },
    { item: "Aroma Spa", price: 1200 },
    { item: "Tick Removal", price: 300 },
    { item: "Ear Cleaning", price: 50 },
    { item: "Nail Cut/Grinding", price: 150 },
    { item: "Tooth Cleaning", price: 150 },
    { item: "Bath + Haircut", price: 1350 },
    { item: "Hygiene Cut", price: 350 },
  ],
  large: [
    { item: "Regular Bath", price: 1000 },
    { item: "Medical Bath", price: 1200 },
    { item: "Aroma Spa", price: 1300 },
    { item: "Tick Removal", price: 400 },
    { item: "Ear Cleaning", price: 50 },
    { item: "Nail Cut/Grinding", price: 200 },
    { item: "Tooth Cleaning", price: 150 },
    { item: "Bath + Haircut", price: 1450 },
    { item: "Hygiene Cut", price: 400 },
  ],
};

export const CAT_PRICES = [
  { item: "Regular Bath", price: 800 },
  { item: "Medical Bath", price: 1100 },
  { item: "Aroma Spa", price: 1400 },
  { item: "Tick Removal", price: 300 },
  { item: "Ear Cleaning", price: 50 },
  { item: "Nail Cut/Grinding", price: 150 },
  { item: "Tooth Cleaning", price: 150 },
  { item: "Hair Cut", price: 500 },
  { item: "Hygiene Cut", price: 300 },
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Golden Glow Transformation",
    subtitle: "Full Grooming Session",
    description: "A complete makeover for this friendly Golden Retriever, including deep cleaning and custom haircut.",
    petType: "Golden Retriever",
    service: "Full Grooming",
    badge: "Best Seller",
    image: "/assets/gallery/happy-dog-grooming.svg",
    color: "#8E248C",
    size: "large"
  },
  {
    id: 2,
    title: "Relaxing Aroma Spa",
    subtitle: "Spa & Massage",
    description: "Stress-free aromatherapy session that left this kitty feeling calm and smelling wonderful.",
    petType: "Persian Cat",
    service: "Aroma Spa",
    badge: "Luxury",
    image: "/assets/gallery/aroma-spa-session.svg",
    color: "#D81B60",
    size: "medium"
  },
  {
    id: 3,
    title: "Clean & Fresh Bath",
    subtitle: "Hygiene Bath",
    description: "Refreshing medicated bath session for optimal skin health and coat shine.",
    petType: "Beagle",
    service: "Medical Bath",
    badge: "Fresh",
    image: "/assets/gallery/fresh-bath.svg",
    color: "#00BCD4",
    size: "medium"
  },
  {
    id: 4,
    title: "Stylish Summer Cut",
    subtitle: "Custom Haircut",
    description: "Keeping it cool and stylish with a custom summer trim at the pet's doorstep.",
    petType: "Poodle",
    service: "Haircut",
    badge: "Style",
    image: "/assets/gallery/stylish-haircut.svg",
    color: "#4CAF50",
    size: "small"
  },
  {
    id: 5,
    title: "Doorstep Convenience",
    subtitle: "Mobile Van Service",
    description: "Our fully-equipped van arriving at a client's location for a safe grooming session.",
    petType: "All Pets",
    service: "Mobile Van",
    badge: "Convenient",
    image: "/assets/gallery/mobile-van-grooming.svg",
    color: "#8E248C",
    size: "small"
  },
  {
    id: 6,
    title: "Purr-fectly Clean",
    subtitle: "Cat Care Session",
    description: "Gentle handling and thorough cleaning for a happy and healthy cat.",
    petType: "Domestic Shorthair",
    service: "Regular Bath",
    badge: "Gentle",
    image: "/assets/gallery/clean-cat-care.svg",
    color: "#D81B60",
    size: "small"
  }
];

export const TESTIMONIALS = [
  {
    name: "Anjali Sharma",
    pet: "Bruno (Golden Retriever)",
    text: "The best grooming service in the city! Bruno is usually very scared of baths, but the team was so gentle. The mobile van is a lifesaver.",
    rating: 5,
    service: "Full Grooming"
  },
  {
    name: "Vikram Singh",
    pet: "Bella (Persian Cat)",
    text: "Finding a good cat groomer was hard until I found Hum Tum Aur Poonch. They handled Bella with so much care. Highly recommend their Aroma Spa!",
    rating: 5,
    service: "Aroma Spa"
  },
  {
    name: "Priya Patel",
    pet: "Rocky (Beagle)",
    text: "Super convenient and professional. The van is very well-equipped and clean. Rocky looks and smells great after every session.",
    rating: 5,
    service: "Regular Bath"
  }
];
