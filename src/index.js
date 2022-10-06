import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ProductProvider } from "./store/context/ProductContext";

import { FilterProvider } from "./store/context/FilterContext";
import { CartProvider } from "./store/context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./store/context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m12kcz8j.jp.auth0.com"
      clientId="kshaodk44oL9vLBzIj5tpE1IBEvYoejw"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <HashRouter>
          <ProductProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductProvider>
        </HashRouter>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
