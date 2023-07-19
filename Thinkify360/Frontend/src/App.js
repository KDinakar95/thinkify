import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const[data,setData]  = useState([])

  useEffect(()=>{

axios.get('http://localhost:5077/getproduct').then((res)=>{
  // console.log(res)
  setData(res.data.products)
})


  },[])

console.log(data)
  return (
    <div className="App">
   <h1>Product List</h1>
   {
 data.map((item)=>{
  return(
    <>
    <h3>{item.title}</h3>
    <h3>{item.price}</h3>
    <h3>{item.description}</h3>
<button>Add to cart</button>
    </>
  )
 })

   }
    </div>
  );
}



export default App;
