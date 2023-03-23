import React,{useEffect, useState} from "react"
import './App.css';

function App() {
  const [count, setCount] = useState(10);
  const getData = ()=>{
    console.log("Going to fetch data");
  }
  useEffect(() => {
    console.log("inside of useEffect function");
  },[])

  
  console.log(1);
  console.log(6);
  const handleAdd = ()=>{
    setCount(p=>p+1)
  }
  const handleReduce = ()=>{
    setCount(p=>p-1)
  }
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce  </button>
      <button onClick={getData}>Fetch Data  </button>
    </div>
  );
}

export default App;
