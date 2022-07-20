import React, { FC, WeakValidationMap } from 'react';
import './styles.scss'
import PropTypes from 'prop-types';
import { IBasketProps } from '../../page/home/types';

const ProductCardInBasket: FC<IBasketProps> = ({content, updateItem}) => {
    console.log(updateItem);

    const {descriptions, id, imageUrl, name, prise, quantity} = content;
    const plusProduct = () => {
        updateItem(quantity + 1, id);
    };
    const minusProduct = () => {
        updateItem(quantity - 1, id);
    };
    return (<div className='product-card-basket'>
            <img className='product-card-basket_img'
                 src={imageUrl} alt='ProductImg'/>
            <div className='product-card-basket__description'>
                <p className='product-card-basket__description_text'>{name}</p>
                <p className='product-card-basket__description_text'>{descriptions}</p>
                <p className='product-card-basket__description_text'>price: {prise} $</p>
            </div>
            <div className='product-card-basket__menu'>
                <div className='product-card-basket__menu_key' onClick={plusProduct}>+</div>
                <div className='product-card-basket__menu_size'>{quantity}</div>
                <div className='product-card-basket__menu_key' onClick={minusProduct}>-</div>
            </div>

        </div>
    )
};
ProductCardInBasket.propTypes = {
    content: PropTypes.object,
    updateItem: PropTypes.func
} as WeakValidationMap<IBasketProps>;
export default ProductCardInBasket
