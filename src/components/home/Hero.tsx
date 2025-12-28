// src/components/home/Hero.tsx
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl mb-8 text-primary-100">
            Discover amazing products at unbeatable prices. Shop from our wide range of electronics, fashion, home, and sports items.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;