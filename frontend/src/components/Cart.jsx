import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-orange-600 font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center bg-white rounded-lg border border-orange-200">
                    <button
                      onClick={() => updateQuantity(item.id, item.qty - 1)}
                      className="px-3 py-1 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-l-lg transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-semibold text-gray-900 border-x border-orange-200">{item.qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                      className="px-3 py-1 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-r-lg transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-gray-900 min-w-[60px] text-right">₹{item.price * item.qty}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-orange-200 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-orange-600">₹{total}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-linear-to-r from-orange-500 via-pink-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse"
            >
              <span>Proceed to Checkout</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
