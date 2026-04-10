
import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';
// import Product5 from '../assets/Product5.jpg';
import Product6 from '../assets/product6.jpg';

export const ProductLists = [
  {
    id: 1,
    name: "Smokey Party Jollof Rice",
    description: "Our signature firewood-flavored Jollof, served with peppered proteins and sides.",
    arrival: "top", // Best seller
    image: Product1,
    category: "Bulk Meals",
    minOrder: "10 Plates",
    priceTag: "Premium" 
  },
  {
    id: 2,
    name: "Native Fisherman Soup",
    description: "Rich, authentic riverine soup loaded with fresh seafood, snails, and dried fish.",
    arrival: "regular",
    image: Product2,
    category: "Soup Bowls",
    sizeOptions: ["3L", "5L", "10L"],
    priceTag: "Luxury"
  },
  {
    id: 3,
    name: "Efo Riro (Lagos Style)",
    description: "Rich spinach soup prepared with palm oil, locust beans, and assorted obstacles.",
    arrival: "top",
    image: Product3,
    category: "Soup Bowls",
    sizeOptions: ["3L", "5L"],
    priceTag: "Standard"
  },
  {
    id: 4,
    name: "Arosoplus Luxury Food Tray",
    description: "A curated celebration tray featuring variety: pasta, proteins, snacks, and fruits.",
    arrival: "top", 
    image: Product4,
    category: "Trays & Gifts",
    customizable: true,
    priceTag: "Exclusive"
  },
  // {
  //   id: 5,
  //   name: "Abula Special (Amala/Gbegiri/Ewedu)",
  //   description: "The classic Ibadan favorite. Soft Amala served with silky Gbegiri and Ewedu soup.",
  //   arrival: "regular",
  //   image: Product5,
  //   category: "Event Specials",
  //   priceTag: "Premium"
  // },
  {
    id: 6,
    name: "Peppered Turkey & Snail Platter",
    description: "Spiced, sautéed turkey and snails garnished with onions and bell peppers.",
    arrival: "regular",
    image: Product6,
    category: "Sides & Proteins",
    priceTag: "Premium"
  }
];
