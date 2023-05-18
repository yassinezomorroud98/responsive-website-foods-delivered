import React, { useState } from 'react'
import { data } from "../data/Data";
export default function Food() {
    const [foods, setFoods] = useState(data);
    // Filter Type burger/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }
    // Filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        )
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-[#FC4F00] font-bold text-4xl text-center '>Top Rated Menu Items</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => setFoods(data)}>ALL</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterType('burger')}>Burgers</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterType('pizza')}>Pizza</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterType('salad')}>Salads</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterType('chicken')}>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[290px] w-full'>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterPrice('$')}>$</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterPrice('$$')}>$$</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterPrice('$$$')}>$$$</button>
                        <button className='border-[#FC4F00] text-[#FC4F00] hover:bg-[#FC4F00] hover:text-white m-1' onClick={() => filterPrice('$$$$')}>$$$$</button>
                    </div>
                </div>
            </div>
            {/* Display Foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border rounded-lg shadow-lg hover:scale-150 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-[#F79540] text-white p-1 rounded-full '>{item.price}</span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
