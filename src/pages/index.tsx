import React from "react";
import { NextPage } from "next";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico/" />
      </Head>
      <div>
        {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}
      </div>
    </>
  );
};

export default Home;