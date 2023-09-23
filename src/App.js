import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useRef } from 'react';
import { AppSagaRequest, AppSagaSucccess } from './slice/appslice';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { MainRoute } from './Route/MainRoute';
import { Header } from './container/Header/Header';

function App() {
  const data=useRef(false)
  const appslice=useSelector((store)=>store?.appsaga)
  console.log(appslice,appslice)
  const dispatch=useDispatch()
useEffect(()=>{
  if(data.current){return}
  data.current=true
  console.log("i am call")

// dispatch(AppSagaRequest())
},[])
  return (
    <div className="App">
      <MainRoute/>
    </div>
  );
}

export default App;
