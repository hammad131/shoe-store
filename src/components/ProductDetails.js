import React from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import shoe1 from './images/shoe1.png'
import shoe2 from './images/shoe2.png'
import shoe3 from './images/shoe3.png'

function ProductDetails() {
    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: shoe1,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            
        },
        "grey-men-shoe": {
            name: "Grey Men Shoe",
            img: shoe2,
            
        },
        "dark-blue-leather-sneakers": {
            name: "Blue-Leather Sneakers",
            img:shoe3,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            
        },
        
    };
    const {productId} = useParams();
    const product = shoes[productId];
    const {name, img} = product;





    return (
        
            <div className="wrapper">
	            <div className="outer">
		            <div className="content animated fadeInLeft">
			            <span className="bg animated fadeInDown">EXCLUSIVE</span>
			            <h1>{name}</h1>
			            <p>Shadow your real allegiance to New York's Pirate radio with this cool cap featuring the Graphic Know Wave logo.</p>
			
                        <div className="button">
                            <button>$115</button><button className="cart-btn"><i className="cart-icon ion-bag"></i>ADD TO CART</button>
                        </div>
			
		            </div>
                    <div className='proimg'>
		                <img  src={img} alt='' width="300px" className="animated fadeInRight"></img>
                    </div>
                    </div>
            </div>
            
    
    )
}

export default ProductDetails;


