import React from 'react';

function Card(props) {
    const addToCart = (id, productname, image, price) => {
        let obj = {
            id: id,
            productname: productname,
            image: image,
            price: price,
            quantity: 1 
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || []; 

        let itemIndex = cart.findIndex(item => item.id === obj.id);

        if (itemIndex !== -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart.push(obj);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className='card-div'>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>{props.name}</span>
            </div>
            <div className="card-content">
                <div className="image-container">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="price-container">
                    <span>Price: {props.price}/-</span>
                    <span>Rating: {props.rating}</span>
                    <span>Colors Available: {props.color}</span>
                    <span>Sizes: {props.sizes}</span>
                    <div className='buttons'>
                        <button onClick={() => addToCart(props.id, props.name, props.img, props.price)} type='button'>Add To Cart</button>
                        <button type='button'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <span>{props.des}</span>
            </div>
        </div>
    );
}

export default Card;
