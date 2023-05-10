import SignIn from "@/components/SignIn";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="MUI expamle " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </>
  );
};

export default login;
