import { HTMLInputTypeAttribute } from "react";
import { FormStateMap } from "redux-form";

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  descriptions: string;
  prise: number;
}

export interface IProps {
  message: string;
}

export interface IValue {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

export interface IValueType {
  input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  label: string,
  placeholder?: string,
  type: HTMLInputTypeAttribute,
  meta: IMeta,
}

interface IMeta {
  touched: Object,
  error: string,
  warning: string,
}

export interface IItemInCartProps {
  descriptions: string;
  id: number;
  imageUrl: string;
  name: string;
  prise: number;
  quantity: number;
}

export interface IItemInCart {
  concat(item: IProduct): IItemInCartProps;
  itemsInCart: IItemInCartProps[];
}

export interface IProductCardProps {
  data: IProduct;
  productsInCart: IItemInCartProps[];
  addProductInCart: (data:IItemInCartProps) => void
}

export interface IBasketProps {
  content: IItemInCartProps,
  updateItem: (quantity: number, id: number) => void
}

export interface IInitialState {
  itemInCart: () => IItemInCartProps;
  allAmount: number;
}

export interface IReducer {
  card: IInitialState ;
  form: FormStateMap;
}

export interface IAllSum {
  quantity: number,
  prise: number,
}

export interface IBasket {
  itemsInCart: IItemInCartProps[];
  updateItemsInCart: (all: IItemInCartProps[]) => void ;
  updateAllAmount: (allSum: number) => void  ;
  allAmount: number;
  userInfo: any;
  clearPrice: any;
}

export interface IStore {
  card: IStoreItem;
  form: FormStateMap;
}

interface IStoreItem {
  itemInCart?: IItemInCart;
  allAmount: number;
}

export interface IHomeProps {
  itemInCart: IItemInCart,
  updateItemsInCart: (value:IItemInCartProps) => void
}

export interface IUserInfo {
  handleSubmit: () => void;
  submitting: boolean;
  valid: boolean;
}
