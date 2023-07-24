import { Route, Routes } from "react-router-dom";
import { Homepage } from "../component/HomePage/HomePage";
import { Header } from "../container/Header/Header";

export const MainRoute = () => {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};
