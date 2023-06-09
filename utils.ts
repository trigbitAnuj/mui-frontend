import React from "react"
import AddressForm from "./components/AddressForm"
import Payment from "./components/Payment"
import Review from "./components/Review"
import { ProductsType, TIERSTYPE } from "./model";






export const tiers:TIERSTYPE = [
    {
      title: "Free",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  export const products: ProductsType = [
    {
      name: "Product 1",
      desc: "A nice thing",
      price: "$9.99",
    },
    {
      name: "Product 2",
      desc: "Another thing",
      price: "$3.45",
    },
    {
      name: "Product 3",
      desc: "Something else",
      price: "$6.51",
    },
    {
      name: "Product 4",
      desc: "Best thing of all",
      price: "$14.11",
    },
    { name: "Shipping", desc: "", price: "Free" },
  ];


  export const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return React.createElement(AddressForm,{});
      case 1:
        return React.createElement(Payment,{});
      case 2:
        return React.createElement(Review,{});
      default:
        throw new Error("Unknown step");
    }
  };
  