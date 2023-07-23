import { Route, Routes } from "react-router-dom";
import { Homepage } from "../component/HomePage/HomePage";

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/home' element={<Homepage/>}></Route>
    </Routes>
  );
};
