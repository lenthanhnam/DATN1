import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
    const [bookings, setBookings] = useState([]);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/booking/user/${userId}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setBookings(response.data.data);
            } catch (error) {
                console.error('Lỗi khi lấy lịch sử đặt lịch:', error);
            }
        };
        fetchBookings();
    }, [userId, token]);

    return (
        <div className="min-h-screen bg-gray-100 p-8 pt-16">
            <h1 className="text-3xl font-bold text-center mb-8">Lịch sử đặt lịch</h1>
            {bookings.length === 0 ? (
                <p className="text-center">Bạn chưa có lịch đặt nào.</p>
            ) : (
                <div className="max-w-4xl mx-auto">
                    {bookings.map(booking => (
                        <div key={booking._id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                            <p><strong>Dịch vụ:</strong> {booking.serviceId.name}</p>
                            <p><strong>Chi nhánh:</strong> {booking.branchId.BranchName}</p>
                            <p><strong>Ngày:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                            <p><strong>Giờ:</strong> {booking.bookingTime}</p>
                            <p><strong>Trạng thái:</strong> {booking.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookingHistory;