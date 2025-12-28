// src/components/home/FeaturedCategories.tsx
import { Link } from 'react-router-dom';
import { Laptop, Shirt, Home, Dumbbell } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop, color: 'bg-blue-500' },
  { name: 'Fashion', icon: Shirt, color: 'bg-purple-500' },
  { name: 'Home', icon: Home, color: 'bg-green-500' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-red-500' },
];

const FeaturedCategories = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;