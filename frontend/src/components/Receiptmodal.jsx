const Receiptmodal = ({ isOpen, onClose, orderData }) => {
  if (!isOpen || !orderData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto transform animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <svg className="w-7 h-7 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Order Confirmed!
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-linear-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-6">
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h4 className="font-semibold text-gray-900">Customer Information</h4>
            </div>
            <p className="text-gray-700"><span className="font-medium">Name:</span> {orderData.name}</p>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {orderData.email}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h4 className="font-semibold text-gray-900">Order Items</h4>
            </div>
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-orange-50 rounded-lg p-3">
                  <div>
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-gray-500 ml-2">x{item.qty}</span>
                  </div>
                  <span className="font-bold text-orange-600">₹{(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-orange-200 pt-6 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total Amount:</span>
              <span className="text-2xl font-bold text-orange-600">₹{orderData.total}</span>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-800 font-semibold flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {orderData.message}
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Order placed on: {new Date(orderData.timestamp).toLocaleString()}
            </p>
            <button
              onClick={onClose}
              className="w-full bg-linear-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 animate-pulse"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receiptmodal;
