import Cart from '../components/Cart';
import Checkoutform from '../components/Checkoutform';

const Checkoutpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-pulse">Complete Your Order</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <Cart />
          </div>
          <div className="order-1 lg:order-2">
            <Checkoutform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
