import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    console.log(image)
    return (
        <div className='flex h-[100px] space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}------------</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;