import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RegisterProvider } from "./contexts/contextregister";
import { LoginProvider } from "./contexts/contextlogin";
import { ModalProvider } from "./contexts/contextmodals";
import { ProductProvider } from "./contexts/contextproducts";
import { CartProvider } from "./contexts/contextcart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <LoginProvider>
          <ProductProvider>
            <CartProvider>
              <ModalProvider>
                <App />
              </ModalProvider>
            </CartProvider>
          </ProductProvider>
        </LoginProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
