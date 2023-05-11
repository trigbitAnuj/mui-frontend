import {Theme} from "@mui/material"

export interface StyleContainerType {
    borderColor: string;
  }
  
 export  interface StyledTextFieldType {
    placeHolderColor: string;
    borderColor: string;
    theme?:Theme
  }
 export interface StyledButtonType {
    myBackgroundColor: string;
  }

  export type TIERS={
    title: string
    price: string
    subheader?:string
    description:string []
    buttonText: string
    buttonVariant: string
}

export interface TIERSTYPE extends Array<TIERS>{}


export type PRODUCT = {
  name: string;
  desc: string;
  price: string;
};

export interface ProductsType extends Array<PRODUCT> {}


export type InputFieldType={
     width:number
     padding:number
     margin:number
}

  