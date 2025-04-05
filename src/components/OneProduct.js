import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const OneProduct = (props) => {


    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={props.image} alt={props.title} className="w-full h-56 object-cover rounded-lg" />
            <div className="flex justify-between items-center mt-4 ">
                {/* <span className="text-gray-600">{props.duration}</span> */}
                <span className="text-maincolor font-bold ">${props.price}</span>
            </div>
            <h3 className="text-xl font-semibold text-maincolor mt-2">{props.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{props.description}</p>
            <div className='flex justify-between items-center'>
                <Link
                    to={`/product/${props.id}`} // Chuyển hướng đến trang chi tiết với ID sản phẩm
                    className="text-maincolor mt-4 flex items-center"
                >
                    View Details <span className="ml-2 material-icons">arrow_forward</span>
                </Link>
                <button className='bg-maincolor hover:bg-maincolorhover p-2 px-3 rounded-lg text-white mt-2 items-center flex'>
                    <span className="material-icons">
                        <ShoppingCartOutlined />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default OneProduct
