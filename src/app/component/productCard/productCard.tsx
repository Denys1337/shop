import React, { FC } from 'react';
import './styles.scss'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ProductCardInBasket from "../productCardInBasket/productCardInBasket";
import { IItemInCartProps, IProductCardProps } from '../../page/home/types';
import { Button, Card, CardActions, CardMedia, Typography } from '@mui/material';

const ProductCard: FC<IProductCardProps> = ({data, productsInCart, addProductInCart}) => {

    const {
        name,
        imageUrl,
        descriptions,
        prise,
        id,
    } = data;
    const getStatusProduct = () => {
        const productInCart = productsInCart.some((item: IItemInCartProps) => +item.id === +id);

        if (productInCart) {
            return (
                <Link to="/basket">
                    <div className='product-card_key'>
                    <CardActions>
                  <Button size="small" sx={{color: '#000'}}>
                     Go to cart
                  </Button>
                </CardActions>
                    </div>
                </Link>
            )
        }
        return (

            <div className='product-card_key' onClick={() => {
                addProductInCart({...data, quantity: 1})
            }}>
                <CardActions>
                  <Button size="small" sx={{color: '#000'}}>
                     Add to cart
                  </Button>
                </CardActions>
            </div>
        )
    };
    return (<Card className='product-card'>
         <CardMedia
          component="img"
          height="140"
          image= {imageUrl}
          alt="phone"
          sx={{objectFit: 'contain'}}
        />
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {descriptions}
          </Typography> 
          <Typography variant="body2" sx={{color: 'red', fontWeight: 'bold', }}>
          price: {prise}$
          </Typography>              
            {getStatusProduct()}
        </Card>
    )
};
ProductCardInBasket.propTypes = {
    data: PropTypes.object,
    productsInCart: PropTypes.object,
    addProductInCart: PropTypes.func,
} as any;
export default ProductCard
