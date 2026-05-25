export const BRAND_ASSETS = {
  logo: "/assets/logo.png",
  busImage: "/assets/humtum-bus.png",
  favicon: "/favicon.svg",
  placeholderImage: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800", // High quality pet photo
};

export const BUSINESS_INFO = {
  name: "Hum Tum Aur Poonch",
  tagline: "Premium Mobile Pet Grooming at Your Doorstep",
  mission: "Because your pet deserves gentle care without the stress of travel.",
  phone: "+917973716667",
  phoneDisplay: "+91 79-73716667",
  whatsapp: "917973716667",
  email: "humtumaurpoonch254@gmail.com",
  hours: "9AM–9PM",
  serviceArea: "Mobile grooming van service around the city",
  location: "Chandigarh, Panchkula & Mohali", // Replace with actual coverage
};

export const TRUST_STATS = [
  { label: "Mobile Van Service", value: "At Your Doorstep", icon: "Truck" },
  { label: "Pets Groomed", value: "5000+", icon: "Dog", note: "Replace with verified business number" },
  { label: "Service Hours", value: "9AM - 9PM", icon: "Clock" },
  { label: "Hygienic Care", value: "100% Safe", icon: "ShieldCheck" },
];

export const SERVICES = [
  {
    id: "full-grooming",
    title: "Full Grooming",
    description: "The complete transformation. A head-to-paw makeover that leaves your pet looking and feeling spectacular.",
    bestFor: "Pets needing a total refresh or breed-standard styling.",
    inclusions: ["Bath & Blow Dry", "Full Body Haircut", "Nail Clipping", "Ear Cleaning", "Eye Cleaning", "Perfume & Accessories"],
    duration: "120 - 150 mins",
    icon: "Scissors",
    badge: "Most Popular",
    category: "Full Service"
  },
  {
    id: "regular-bath",
    title: "Regular Bath",
    description: "Deep cleansing bath using premium, pH-balanced shampoos to maintain a healthy coat and skin.",
    bestFor: "Maintaining hygiene between full grooming sessions.",
    inclusions: ["Deep Cleansing Bath", "Blow Dry", "Brushing", "Nail Clipping", "Ear Cleaning"],
    duration: "60 - 90 mins",
    icon: "Bath",
    badge: "Essential",
    category: "Hygiene"
  },
  {
    id: "medical-bath",
    title: "Medical Bath",
    description: "Specialized medicated baths designed to treat skin infections, allergies, and hot spots.",
    bestFor: "Pets with sensitive skin or skin-related medical issues.",
    inclusions: ["Medicated Soak", "Gentle Drying", "Skin Inspection", "Vet-Approved Products"],
    duration: "75 - 100 mins",
    icon: "Stethoscope",
    badge: "Care",
    category: "Health"
  },
  {
    id: "aroma-spa",
    title: "Aroma Spa",
    description: "A soothing experience with essential oils and massage techniques to destress and rejuvenate.",
    bestFor: "Senior pets or anxious pets needing relaxation.",
    inclusions: ["Aromatherapy Bath", "Pet Massage", "Essential Oil Finish", "Stress-Relief Environment"],
    duration: "90 - 120 mins",
    icon: "Sparkles",
    badge: "Luxury",
    category: "Spa"
  },
  {
    id: "tick-removal",
    title: "Tick & Flea Removal",
    description: "Professional removal and treatment to eliminate parasites and prevent future infestations.",
    bestFor: "Pets struggling with ticks or fleas.",
    inclusions: ["Manual Tick Removal", "Anti-Tick Bath", "Flea Powder Application", "Preventive Consultation"],
    duration: "60 - 120 mins",
    icon: "ShieldAlert",
    badge: "Vital",
    category: "Health"
  },
  {
    id: "haircut",
    title: "Custom Haircut",
    description: "Whether it's a summer cut or a breed-specific style, our groomers deliver perfection.",
    bestFor: "Managing coat length and preventing matting.",
    inclusions: ["Style Consultation", "Hair Trimming", "Finishing Scissor Work", "Sanitary Cut"],
    duration: "90 - 120 mins",
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

export const BEFORE_AFTER_DATA = [
  {
    id: 1,
    petName: "Buddy",
    breed: "Shih Tzu",
    service: "Full Grooming",
    story: "Buddy came in with heavily matted fur. We gave him a clean, comfortable summer cut and a soothing bath.",
    before: "/assets/before-after/buddy-before.jpg", // Replace with real photo
    after: "/assets/before-after/buddy-after.jpg",   // Replace with real photo
    type: "Dogs"
  },
  {
    id: 2,
    petName: "Snowy",
    breed: "Persian Cat",
    service: "Bath + Haircut",
    story: "Snowy needed a professional deshedding and a hygiene trim to stay cool and clean.",
    before: "/assets/before-after/snowy-before.jpg", // Replace with real photo
    after: "/assets/before-after/snowy-after.jpg",   // Replace with real photo
    type: "Cats"
  }
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
    image: "/assets/gallery/gallery-1.jpg", // Replace with real client photo
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
    image: "/assets/gallery/gallery-2.jpg", // Replace with real client photo
    color: "#D81B60",
    size: "medium"
  }
];

export const TEAM_DATA = [
  {
    id: 1,
    name: "Rahul",
    role: "Senior Pet Groomer",
    specialty: "Dog Styling & Hygiene",
    bio: "Rahul has over 5 years of experience handling all dog breeds with love and patience.",
    image: "/assets/team/team-1.jpg" // Replace with real team photo
  },
  {
    id: 2,
    name: "Sunita",
    role: "Cat Specialist",
    specialty: "Cat Grooming & Massage",
    bio: "Sunita is our resident cat whisperer, ensuring even the most nervous cats feel safe.",
    image: "/assets/team/team-2.jpg" // Replace with real team photo
  }
];

export const FAQS = [
  {
    question: "Do you groom pets at home?",
    answer: "Yes! We bring our fully-equipped mobile grooming van to your doorstep. All grooming happens inside the van, keeping your home clean."
  },
  {
    question: "Is it safe for nervous pets?",
    answer: "Absolutely. Our groomers are trained in gentle handling techniques. Since your pet is right outside their home, they feel much safer than at a busy salon."
  },
  {
    question: "Do you groom cats?",
    answer: "Yes, we have specialists who handle cats with extreme care, providing baths, haircuts, and nail trimming."
  },
  {
    question: "How long does grooming take?",
    answer: "Depending on the service and pet size, it usually takes between 1 to 2.5 hours."
  }
];

export const SERVICE_AREAS = [
  "Sector 1 - 60", "Mohali Phase 1 - 11", "Zirakpur", "Panchkula Sectors", "Kharar"
];

export const BLOG_PREVIEWS = [
  {
    title: "How often should your dog be groomed?",
    excerpt: "Learn about the ideal grooming frequency based on your dog's breed and coat type.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Signs your cat needs professional grooming",
    excerpt: "Is your cat over-grooming or developing mats? It might be time for a professional session.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400"
  }
];

export const TESTIMONIALS = [
  {
    name: "Anjali Sharma",
    pet: "Bruno (Golden Retriever)",
    text: "The best grooming service in the city! Bruno is usually very scared of baths, but the team was so gentle. The mobile van is a lifesaver.",
    rating: 5,
    service: "Full Grooming",
    image: "/assets/reviews/review-1.jpg" // Replace with real photo
  },
  {
    name: "Vikram Singh",
    pet: "Bella (Persian Cat)",
    text: "Finding a good cat groomer was hard until I found Hum Tum Aur Poonch. They handled Bella with so much care. Highly recommend their Aroma Spa!",
    rating: 5,
    service: "Aroma Spa",
    image: "/assets/reviews/review-2.jpg" // Replace with real photo
  }
];
