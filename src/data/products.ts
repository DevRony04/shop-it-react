
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
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
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
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
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
