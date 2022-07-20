import React, { JSXElementConstructor } from 'react';
import './styles.scss'
import { Link } from "react-router-dom";
import { connect, DispatchProp, Matching } from "react-redux";
import { IItemInCart, IStore } from '../../page/home/types';
import { AnyAction } from 'redux';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header: JSXElementConstructor<Matching<IItemInCart,any> & DispatchProp<AnyAction>> = ({itemsInCart}) => {

    return (<div className='header-container'>
        <Link to="/basket">
            <div className='header-container_key'>
            <IconButton aria-label="add to shopping cart" sx={{color: '#000'}}>
               <AddShoppingCartIcon/>({itemsInCart.length})
            </IconButton>
            </div>
        </Link>
    </div>)
};

const mapStateToProps = (store:IStore) => {
    return {
        itemsInCart: store.card.itemInCart,
    }
};

export default connect(mapStateToProps,)(Header)
