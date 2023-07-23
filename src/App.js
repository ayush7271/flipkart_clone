import logo from './logo.svg';
import './App.css';
import React,{ useEffect } from 'react';
import { AppSagaRequest, AppSagaSucccess } from './slice/appslice';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
function App() {
  const appslice=useSelector((store)=>store?.appsaga)
  console.log(appslice,appslice)
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(AppSagaRequest())
},[])
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
