import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndex = () => {
    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81167500-511d-4a65-8151-35b01d43c80a/blazer-mid-77-vintage-mens-shoe-flCCX4.jpg',
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            
        },
        "grey-men-shoe": {
            name: "Grey Men Shoe",
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-mens-shoe-TjqcX1.jpg',
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            
        },
        "dark-blue-leather-sneakers": {
            name: "Blue-Leather Sneakers",
            img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30d194be-2335-4556-bcf1-015d004cdf31/superrep-go-mens-training-shoe-19sK4X.jpg',
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            
        },
        
    };
    
    return (
        <div>
            <ul>
                {Object.entries(shoes).map(([productId,{name, img}]) =>
                (
                    <li key={productId}>
                        <Link to={productId}>
                            <h2>{name}</h2>
                            <img src={img} alt={name}></img>
                        </Link>
                    </li>
                ))}
                
            </ul>
            
        </div>
    )
}


