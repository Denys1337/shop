import React, { JSXElementConstructor } from 'react';
import './styles.scss';
import ProductCard from "../../component/productCard/productCard";
import {connect, DispatchProp, Matching} from "react-redux";
import Items from "./scratch.json";
import {setItemsInCart} from "../../actions/actions";
import { IHomeProps, IItemInCartProps, IProduct, IStore } from './types';
import { AnyAction, Dispatch } from 'redux';

const Home: JSXElementConstructor<Matching<IHomeProps,any> & DispatchProp<AnyAction>> = ({itemInCart, updateItemsInCart}) => {

    const updateCartList = (item: IProduct) => {
        const itemsConcat = itemInCart.concat(item)
        updateItemsInCart(itemsConcat);
    };
    const getItem = () => {
        return Items.products.map((item: IProduct, index: number) => (
            <ProductCard data={item} key={index} productsInCart={itemInCart} addProductInCart={updateCartList}/>
        ))
    };
    return (<div className='home'>
        {getItem()}
    </div>)
};

const mapStateToProps = (store:IStore) => {
    return {
        itemInCart: store.card.itemInCart,
    }
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateItemsInCart: (value: IItemInCartProps) => dispatch(setItemsInCart(value)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
