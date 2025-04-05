


// import React, { useState, useEffect } from 'react';
// import VoucherCard from '../components/VoucherCard';
// import { Link } from 'react-router-dom';
// import MyVoucherCard from '../components/MyVoucherCard';

// const MyVouchers = () => {
//   const [filter] = useState(['Tất cả', 'Còn hiệu lực', 'Đã hết hạn']);
//   const [activeFilter, setActiveFilter] = useState('Tất cả');
//   const [vouchers, setVouchers] = useState([]);

//   // Lấy dữ liệu từ localStorage khi component mount
//   useEffect(() => {
//     const savedVouchers = JSON.parse(localStorage.getItem('myVouchers')) || [];
//     setVouchers(savedVouchers);
//   }, []);

//   // Hàm xóa voucher
//   const handleRemoveVoucher = (index) => {
//     const updatedVouchers = vouchers.filter((_, i) => i !== index);
//     setVouchers(updatedVouchers);
//     localStorage.setItem('myVouchers', JSON.stringify(updatedVouchers));
//   };

//   // Lọc voucher theo trạng thái
//   const filteredVouchers = vouchers.filter((voucher) => {
//     if (activeFilter === 'Tất cả') return true;
//     if (activeFilter === 'Còn hiệu lực') return !voucher.tags.includes('Hết hạn');
//     if (activeFilter === 'Đã hết hạn') return voucher.tags.includes('Hết hạn');
//     return true;
//   });

//   return (
//     <div className="mt-16 p-10 min-h-screen bg-gray-100">
//       <div className="container mx-auto py-6">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h1 className="text-2xl font-bold text-blue-900">Vouchers của tôi</h1>
//             <p className="text-gray-600">Quản lý tất cả vouchers ưu đãi của bạn tại đây</p>
//           </div>
//           <Link to="/spvc">
//             <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center">
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                 ></path>
//               </svg>
//               Khám phá thêm vouchers
//             </button>
//           </Link>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex space-x-4 mb-6">
//           {filter.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActiveFilter(item)}
//               className={`px-4 py-2 rounded-lg cursor-pointer ${
//                 activeFilter === item ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Voucher List or Empty State */}
//         {filteredVouchers.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredVouchers.map((voucher, index) => (
//               <div key={index} className="relative">
//                 <MyVoucherCard voucher={voucher} />
//                 <button
//                   onClick={() => handleRemoveVoucher(index)}
//                   className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
//                 >
//                   Xóa
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg p-10 text-center">
//             <svg
//               className="w-16 h-16 mx-auto text-gray-400 mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//               ></path>
//             </svg>
//             <h2 className="text-lg font-semibold text-gray-600">Chưa có voucher nào</h2>
//             <p className="text-gray-500">
//               Bạn chưa lưu voucher nào. Hãy khám phá các ưu đãi đặc biệt để tiết kiệm cho lần mua hàng tiếp theo.
//             </p>
//             <Link to="/spvc">
//               <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-full flex items-center mx-auto">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                   ></path>
//                 </svg>
//                 Khám phá vouchers
//               </button>
//             </Link>
//           </div>
//         )}

//         <div className="text-center mt-8">
//           <Link to="/">
//             <button className="text-blue-600 flex items-center mx-auto">
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//               </svg>
//               Quay lại trang chủ
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyVouchers;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VoucherCard from '../components/VoucherCard';
import { getSavedVouchers, removeSavedVoucher } from '../APIs/userApi';

const MyVouchers = () => {
  const [filter] = useState(['Tất cả', 'Còn hiệu lực', 'Đã hết hạn']);
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedVouchers = async () => {
      try {
        setLoading(true);
        const response = await getSavedVouchers();
        if (response.success) {
          const formattedVouchers = response.data.map((voucher) => ({
            id: voucher._id,
            image: 'https://via.placeholder.com/300x150?text=Voucher',
            title: `Ưu đãi ${voucher.applicableTo === 'products' ? 'sản phẩm' : voucher.applicableTo === 'services' ? 'dịch vụ' : 'tất cả'}`,
            discount: `Giảm ${voucher.discount}% cho ${voucher.applicableTo === 'products' ? 'sản phẩm' : voucher.applicableTo === 'services' ? 'dịch vụ' : 'tất cả'}`,
            discountPercent: `Giảm ${voucher.discount}%`,
            expiry: `HSD: ${new Date(voucher.endDate).toLocaleDateString('vi-VN')}`,
            tags: [
              voucher.applicableTo === 'products' ? 'Sản phẩm' : voucher.applicableTo === 'services' ? 'Dịch vụ' : 'Tất cả',
              new Date() > new Date(voucher.endDate) ? 'Hết hạn' : 'Còn hiệu lực',
            ],
            code: voucher.code,
            minOrder: voucher.minimumAmount > 0 ? `Đơn hàng từ ${voucher.minimumAmount.toLocaleString()} đ` : null,
          }));
          setVouchers(formattedVouchers);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Không thể tải danh sách voucher. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };
    fetchSavedVouchers();
  }, []);

  const handleRemoveVoucher = async (voucherId) => {
    try {
      const response = await removeSavedVoucher(voucherId);
      if (response.success) {
        setVouchers(vouchers.filter((voucher) => voucher.id !== voucherId));
        alert('Voucher đã được xóa thành công.');
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('Đã xảy ra lỗi khi xóa voucher.');
    }
  };

  const filteredVouchers = vouchers.filter((voucher) => {
    if (activeFilter === 'Tất cả') return true;
    if (activeFilter === 'Còn hiệu lực') return !voucher.tags.includes('Hết hạn');
    if (activeFilter === 'Đã hết hạn') return voucher.tags.includes('Hết hạn');
    return true;
  });

  return (
    <div className="mt-16 p-10 min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Vouchers của tôi</h1>
            <p className="text-gray-600">Quản lý tất cả vouchers ưu đãi của bạn tại đây</p>
          </div>
          <Link to="/spvc">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Khám phá thêm vouchers
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-6">
          {filter.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                activeFilter === item ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center">Đang tải...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : filteredVouchers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVouchers.map((voucher) => (
              <div key={voucher.id} className="relative">
                <VoucherCard voucher={voucher} />
                <button
                  onClick={() => handleRemoveVoucher(voucher.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
                >
                  Xóa
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-10 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-lg font-semibold text-gray-600">Chưa có voucher nào</h2>
            <p className="text-gray-500">
              Bạn chưa lưu voucher nào. Hãy khám phá các ưu đãi đặc biệt để tiết kiệm cho lần mua hàng tiếp theo.
            </p>
            <Link to="/spvc">
              <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-full flex items-center mx-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Khám phá vouchers
              </button>
            </Link>
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/">
            <button className="text-blue-600 flex items-center mx-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Quay lại trang chủ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyVouchers;