// src/pages/OrderSuccess.tsx
import { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext'; 

const OrderSuccess = () => {
  const { clearCart } = useCart(); 

  
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for your purchase. Your order has been received and will be processed soon.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <p className="text-green-800">
            You will receive a confirmation email shortly with your order details.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition text-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;