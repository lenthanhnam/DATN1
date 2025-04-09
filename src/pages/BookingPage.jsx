import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceById } from '../APIs/ServiceAPI';
import { getAllBranches } from '../APIs/BranchAPI'; // Tạo API này nếu chưa có
import axios from 'axios';

const BookingPage = () => {
    const { id } = useParams(); // Lấy ID dịch vụ
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [branches, setBranches] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        branchId: '',
        notes: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [serviceRes, branchesRes] = await Promise.all([
                    getServiceById(id),
                    getAllBranches()
                ]);
                setService(serviceRes.service);
                setBranches(branchesRes.data);
            } catch (error) {
                console.error('Lỗi khi tải dữ liệu:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Lấy token từ localStorage
        const userId = localStorage.getItem('userId'); // Giả sử bạn lưu userId sau khi đăng nhập

        try {
            const response = await axios.post(
                'http://localhost:4000/api/booking/add',
                {
                    userId,
                    serviceId: id,
                    branchId: formData.branchId,
                    employeeId: '661e4f2b5e5f2b4e8c7b9d1a', // Giả sử chọn nhân viên mặc định, bạn có thể thêm logic chọn nhân viên
                    date: formData.date,
                    time: formData.time,
                    notes: formData.notes
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Đặt lịch thành công!');
            navigate('/booking-history'); // Chuyển hướng đến lịch sử đặt lịch
        } catch (error) {
            console.error('Lỗi khi đặt lịch:', error);
            alert('Có lỗi xảy ra khi đặt lịch!');
        }
    };

    if (!service) return <div>Đang tải...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8 pt-16">
            <h1 className="text-3xl font-bold text-center mb-8">Đặt lịch cho {service.name}</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Ngày đặt lịch</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Giờ đặt lịch</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Chọn chi nhánh</label>
                    <select
                        name="branchId"
                        value={formData.branchId}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Chọn chi nhánh</option>
                        {branches.map(branch => (
                            <option key={branch._id} value={branch._id}>{branch.BranchName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Ghi chú (nếu có)</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Hoàn thành</button>
            </form>
        </div>
    );
};

export default BookingPage;