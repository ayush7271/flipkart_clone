import logo from './logo.svg';
import './App.css';
import React,{ useEffect } from 'react';
import { AppSagaRequest, AppSagaSucccess } from './slice/appslice';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { MainRoute } from './Route/MainRoute';
import { Header } from './container/Header/Header';

function App() {
  const appslice=useSelector((store)=>store?.appsaga)
  console.log(appslice,appslice)
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(AppSagaRequest())
},[])
  return (
    <div className="App">
      <Header/>
      <MainRoute/>
    </div>
  );
}

export default App;
