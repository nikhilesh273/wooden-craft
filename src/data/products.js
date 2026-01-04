// src/data/products.js
export const products = [
  {
    id: 1,
    name: "Mini Moss Terrarium",
    price: 29.99,
    image: "product/moss-terrarium.jpg",
    description: "A serene moss garden in a handcrafted wooden frame.",
    category: "Terrariums"
  },
  {
    id: 2,
    name: "Aquatic Planet Sphere",
    price: 59.99,
    image: "product/aquatic-planet.jpg",
    description: "Self-sustaining aquatic ecosystem in a glass sphere.",
    category: "Aquatic Planets"
  },
  {
    id: 3,
    name: "Tissue Culture Display",
    price: 49.99,
    image: "product/tissue-culture.jpg",
    description: "Rare plants grown in sterile lab conditions.",
    category: "Tissue Culture"
  },
  {
    id: 4,
    name: "Wooden Succulent Planter",
    price: 34.99,
    image: "product/succulent-wood.jpg",
    description: "Reclaimed wood base with living succulents.",
    category: "Terrariums"
  },
  {
    id: 5,
    name: "Fairy Garden Terrarium",
    price: 69.99,
    image: "product/fairy-garden.jpg",
    description: "Enchanted miniature world with glowing lights.",
    category: "Terrariums"
  },
  {
    id: 6,
    name: "Neon Betta Habitat Kit",
    price: 89.99,
    image: "product/betta-kit.jpg",
    description: "Complete setup for vibrant betta fish care.",
    category: "Aquatic Planets"
  },
  {
    id: 7,
    name: "Closed Ecosystem Terrarium",
    price: 39.99,
    image: "product/closed-ecosystem.jpg", // 👈 Unique filename
    description: "Sealed terrarium that requires no watering for months.",
    category: "Terrariums"
  },
  {
    id: 8,
    name: "Deep Blue Ocean Sphere",
    price: 64.99,
    image: "product/deep-blue-ocean.jpg", // 👈 Unique filename
    description: "Marine-inspired aquatic planet with blue algae.",
    category: "Aquatic Planets"
  },
  {
    id: 9,
    name: "Orchid Tissue Culture Kit",
    price: 54.99,
    image: "product/orchid-tissue.jpg", // 👈 Unique filename
    description: "Ready-to-grow orchid tissue culture in sterile gel.",
    category: "Tissue Culture"
  },
  {
    id: 10,
    name: "Driftwood Succulent Frame",
    price: 38.99,
    image: "product/driftwood-succulent.jpg", // 👈 Unique filename
    description: "Wall-mounted succulent display on natural driftwood.",
    category: "Terrariums"
  },
  {
    id: 11,
    name: "Enchanted Mushroom Terrarium",
    price: 72.99,
    image: "product/mushroom-terrarium.jpg", // 👈 Unique filename
    description: "Glow-in-the-dark fairy garden with ceramic mushrooms.",
    category: "Terrariums"
  },
  {
    id: 12,
    name: "Tropical Fish Habitat Kit",
    price: 94.99,
    image: "product/tropical-fish-kit.jpg", // 👈 Unique filename
    description: "Premium aquatic setup for betta or small tropical fish.",
    category: "Aquatic Planets"
  }
];

// Auto-generate category list
export const categories = ["All", ...new Set(products.map(p => p.category))];