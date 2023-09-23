import { Route, Routes } from "react-router-dom";
import { Homepage } from "../component/HomePage/HomePage";
import { Header } from "../container/Header/Header";
import { Product } from "../component/Product/Product";

export const MainRoute = () => {
  const category = "";
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Homepage />
            </>
          }
        ></Route>
        <Route
          path="product/:product"
          element={
            <>
              <Header />
              <Product />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};
