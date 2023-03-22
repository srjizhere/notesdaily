import React, { useState } from 'react'

const MoneyCalculator = () => {
    //hooks --> resuable functions
     const [data,setData] = useState("Masai")
    const handleWithdraw=()=>{
        
    }
    const handleDeposit=()=>{

    }
    console.log(data);
  return (
    <div>
        <h1> Current Money $1,00,000</h1>
        <button onClick={handleWithdraw}>Withdraw $100</button>
        <button onClick={handleDeposit}>Deposit $100</button>
        </div>
  )
}

export default MoneyCalculator