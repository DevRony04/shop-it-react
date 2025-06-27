export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 324,
    inStock: true,
    features: ["Active Noise Cancellation", "30-hour Battery", "Quick Charge", "Bluetooth 5.0"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    description: "Advanced fitness tracking with heart rate monitor, GPS, and smart notifications. Water-resistant design for all activities.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 187,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    description: "Comfortable and sustainable organic cotton t-shirt. Soft fabric with a modern fit that's perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    rating: 4.4,
    reviews: 92,
    inStock: true,
    features: ["Organic Cotton", "Modern Fit", "Machine Washable", "Sustainable"]
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 899.99,
    description: "High-quality 85mm f/1.4 portrait lens with superior optical performance. Perfect for professional photography and stunning bokeh.",
    image: "https://cdn.mos.cms.futurecdn.net/9mRDyAsRPqgwUAFM9C2Pnn-1200-80.jpg",
    category: "Electronics",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    features: ["85mm f/1.4", "Weather Sealed", "Fast Autofocus", "Professional Grade"]
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 78.99,
    description: "Sleek LED desk lamp with adjustable brightness and color temperature. Modern design that complements any workspace.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.5,
    reviews: 203,
    inStock: true,
    features: ["LED Technology", "Adjustable Brightness", "Color Temperature Control", "USB Charging Port"]
  },
  {
    id: 6,
    name: "Premium Leather Wallet",
    price: 89.99,
    description: "Handcrafted genuine leather wallet with RFID blocking technology. Multiple card slots and bill compartments for organization.",
    image: "https://th.bing.com/th/id/OIP.KEiIbHA5pspL3oNG2KyOjAHaE8?rs=1&pid=ImgDetMain",
    category: "Accessories",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    features: ["Genuine Leather", "RFID Blocking", "Multiple Compartments", "Handcrafted"]
  },
  {
    id: 7,
    name: "Portable Power Bank",
    price: 45.99,
    description: "High-capacity 20000mAh power bank with fast charging and multiple ports. Keep your devices powered anywhere you go.",
    image: "https://media.currys.biz/i/currysprod/10210558?$l-large$&fmt=auto",
    category: "Electronics",
    rating: 4.3,
    reviews: 287,
    inStock: true,
    features: ["20000mAh Capacity", "Fast Charging", "Multiple Ports", "Compact Design"]
  },
  {
    id: 8,
    name: "Ergonomic Office Chair",
    price: 399.99,
    description: "Professional ergonomic office chair with lumbar support and adjustable features. Designed for all-day comfort and productivity.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Furniture",
    rating: 4.6,
    reviews: 98,
    inStock: true,
    features: ["Ergonomic Design", "Lumbar Support", "Adjustable Height", "Breathable Mesh"]
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Double-walled, vacuum-insulated water bottle keeps drinks cold for 24 hours or hot for 12. Eco-friendly and leak-proof.",
    image: "https://th.bing.com/th/id/OIP.3jlr1XpYqvi9gdrvVaXNZwHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
    category: "Accessories",
    rating: 4.8,
    reviews: 210,
    inStock: true,
    features: ["Vacuum Insulated", "Leak-Proof", "Eco-Friendly", "BPA-Free"]
  },
  {
    id: 10,
    name: "Ultra-Soft Throw Blanket",
    price: 59.99,
    description: "Cozy and ultra-soft throw blanket made from premium microfiber. Perfect for your couch, bed, or travel.",
    image: "https://m.media-amazon.com/images/I/81dIySbgOQL._AC_SL1500_.jpg",
    category: "Home",
    rating: 4.7,
    reviews: 178,
    inStock: true,
    features: ["Microfiber", "Machine Washable", "Lightweight", "Hypoallergenic"]
  },
  {
    id: 11,
    name: "Men's Running Shoes",
    price: 119.99,
    description: "Lightweight and breathable running shoes with cushioned soles for maximum comfort and performance.",
    image: "https://cms-static.asics.com/media-libraries/42003/file.thrb.jpg?time=1586880173403?20200702040048",
    category: "Clothing",
    rating: 4.5,
    reviews: 245,
    inStock: true,
    features: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Non-Slip"]
  },
  {
    id: 12,
    name: "Smart LED Light Bulb",
    price: 29.99,
    description: "Wi-Fi enabled smart bulb with adjustable color and brightness. Compatible with Alexa and Google Assistant.",
    image: "https://www.ikea.com/global/assets/range-categorisation/images/smart-led-light-bulbs-36813.jpeg?imwidth=500",
    category: "Electronics",
    rating: 4.4,
    reviews: 162,
    inStock: true,
    features: ["Wi-Fi Enabled", "Color Changing", "Voice Control", "Energy Efficient"]
  },
  {
    id: 13,
    name: "Bamboo Cutting Board Set",
    price: 39.99,
    description: "Set of 3 eco-friendly bamboo cutting boards. Durable, knife-friendly, and perfect for all your kitchen prep needs.",
    image: "https://th.bing.com/th/id/OIP.X0uHv83wl3CyXR109kH0vwHaHa?rs=1&pid=ImgDetMain",
    category: "Home",
    rating: 4.7,
    reviews: 112,
    inStock: true,
    features: ["Eco-Friendly Bamboo", "Knife Friendly", "Set of 3", "Easy to Clean"]
  },
  {
    id: 14,
    name: "Noise Cancelling Earbuds",
    price: 89.99,
    description: "Compact wireless earbuds with active noise cancellation and long battery life. Great for travel and workouts.",
    image: "https://th.bing.com/th/id/OIP.4rkS1ZrD7TI_laB6svDwnAHaHa?rs=1&pid=ImgDetMain",
    category: "Electronics",
    rating: 4.5,
    reviews: 321,
    inStock: true,
    features: ["Active Noise Cancellation", "Wireless", "Long Battery Life", "Sweat Resistant"]
  },
  {
    id: 15,
    name: "Classic Analog Watch",
    price: 149.99,
    description: "Elegant analog wristwatch with leather strap and water-resistant design. Timeless style for any occasion.",
    image: "https://th.bing.com/th/id/OIP.THLTqdN26-7NepkXS9RK3QHaJX?w=1096&h=1386&rs=1&pid=ImgDetMain",
    category: "Accessories",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ["Leather Strap", "Water Resistant", "Quartz Movement", "Classic Design"]
  },
  {
    id: 16,
    name: "Modern Bookshelf",
    price: 229.99,
    description: "Contemporary 5-tier bookshelf with sturdy metal frame and wood shelves. Perfect for home or office organization.",
    image: "https://th.bing.com/th/id/OIP.jyv9Wc2GPjm1nqgB6gCLrQHaEV?rs=1&pid=ImgDetMain",
    category: "Furniture",
    rating: 4.8,
    reviews: 57,
    inStock: true,
    features: ["5 Tiers", "Metal Frame", "Wood Shelves", "Easy Assembly"]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home",
  "Accessories",
  "Furniture"
];

export const featuredProducts = products.slice(0, 4);
