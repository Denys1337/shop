import {useState, useEffect, Dispatch, ChangeEvent, JSXElementConstructor} from 'react';
import './styles.scss'
import ProductCardInBasket from "../../component/productCardInBasket/productCardInBasket";
import {clearPrice, deleteAmount, setAmount, setItemsInCart} from "../../actions/actions";
import {connect, Matching} from "react-redux";
import UserInfoForm from "../../component/form/form";
import {Link} from "react-router-dom";
import { IAllSum, IBasket, IItemInCartProps, IProduct, IStore } from '../home/types';
import { AnyAction } from 'redux';


const Basket: JSXElementConstructor<Matching<IBasket,any>> = ({itemsInCart, updateItemsInCart, updateAllAmount, allAmount, userInfo, clearPrice}) => {

    useEffect(() => {
        calculationOfTheAmount()
    });
    const [requestJson, setRequestJson] = useState<string>('');
    const calculationOfTheAmount = (all = itemsInCart) => {
        let allSum = 0;
        all.forEach(({quantity, prise}:IAllSum) => {
            allSum = allSum + quantity * prise
        });

        updateAllAmount(allSum);

    };

    const updateItems = (quantity: number, id: number) => {
        const all = itemsInCart.filter((item: IItemInCartProps) => {
            if (item.id === id) {
                if (quantity <= 0) {
                    return false
                }
                item.quantity = quantity;
            }
            return true
        });
        updateItemsInCart(all);
        calculationOfTheAmount(all)

    };
    const getProductCard = () => {

        return itemsInCart.map((item: IItemInCartProps, index: number) => (
            <ProductCardInBasket content={item} updateItem={updateItems} key={index}/>
        ))

    };

    function getJson() {
        if (requestJson) {
            return (
                <textarea className='basket_textarea' disabled name="text">
                    {requestJson}
                </textarea>
            )
        }
    }

    const getContent = () => {
        if (itemsInCart.length) {
            return (
                <>
                    <div className='basket__container'>
                        <div className='basket__container_items'>
                            {getProductCard()}
                        </div>
                        <UserInfoForm handleSubmit={(e: ChangeEvent<HTMLFormElement>): void => {
                            setRequestJson(JSON.stringify({body: {userInfo, itemsInCart, allAmount}}));
                            deleteAmount();
                            clearPrice();
                        }}/>
                    </div>
                    <div>price: {allAmount} $</div>
                </>
            )
        }
        return (
            <div className='basket__notItems'>
                <h1 className='basket__notItems_title'>You have no selected items</h1>
                <Link to={'/'} className='basket__notItems_link'>go to shop</Link>
                {getJson()}
            </div>
        )

    };
    return (
        <div className='basket'>
            {getContent()}

        </div>
    )
};

const mapStateToProps = (store: IStore) => {
    return {
        itemsInCart: store.card.itemInCart,
        allAmount: store.card.allAmount,
        userInfo: store.form
    }
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateItemsInCart: (value: IItemInCartProps) => dispatch(setItemsInCart(value)),
        updateAllAmount: (value: IProduct) => dispatch(setAmount(value)),
        deleteAmount: () => dispatch(deleteAmount()),
        clearPrice: () => dispatch(clearPrice())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Basket)
