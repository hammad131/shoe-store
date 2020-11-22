import React from 'react';
import { Link } from 'react-router-dom';
import './ProductIndex.css';
import shoe1 from './images/shoe1.png'
import shoe2 from './images/shoe2.png'
import shoe3 from './images/shoe3.png'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cx from 'classnames';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    image:{
        height: 200,
    }
  });


export const ProductIndex = () => {

    const classes = useStyles();
    const shoes = {
        "grey-simple-men-shoe": {
            name: "Grey Simple Men Shoe",
            img: shoe1,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: '120'
        },
        "grey-men-shoe": {
            name: "Grey Men Shoe",
            img: shoe2,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: '120'
        },
        "dark-blue-leather-sneakers": {
            name: "Blue-Leather Sneakers",
            img:shoe3,
            content: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
            price: '120'
        },
        
    };
    
    return (
        <div className={cx('product', 'topbot')}>
                {Object.entries(shoes).map(([productId, {name, img, price }]) =>
                    {
                        return (
                            <Card key={productId} className={cx(classes.root, "card")}>

                                <CardActionArea>

                                    <CardMedia
                                        className={cx(classes.media,classes.image)}
                                        image={img}
                                        title={name} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <Link className={"Typography"} to={productId}>{name}</Link>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Get yourself ready to look smart with this simple and stylish lookiing shoes
                                        </Typography>
                                        <h3>${price}</h3>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to={productId} className={"Link"}>
                                        <button className={"cards-button"}>
                                             View Product
                                        </button>
                                    </Link>
                                </CardActions>
                            </Card>

                        );
                    } 
                )}
        </div>
    )
}


