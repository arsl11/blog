import React, { FC } from "react";
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ClerkProvider>
        <Component {...props.pageProps} />
      </ClerkProvider>
    </Provider>
  );
};

export default MyApp;
