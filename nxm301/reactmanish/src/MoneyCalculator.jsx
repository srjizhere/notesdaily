import React, { useState } from 'react'

const MoneyCalculator = () => {
    //hooks --> resuable functions
     let [amount,setAmount] = useState(100000)
    const handleWithdraw=async()=>{
       await setAmount(amount-100)
        console.log(amount);
    }
    const handleDeposit=()=>{
        setAmount(amount+100)
    }
  return (
    <div>
        <h1> Current Money ${amount}</h1>
        <button onClick={handleWithdraw}>Withdraw $100</button>
        <button onClick={handleDeposit}>Deposit $100</button>
        </div>
  )
}

export default MoneyCalculator