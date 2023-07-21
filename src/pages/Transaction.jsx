import React,{useEffect, useState} from 'react'
import Filter from '../component/Filter';

function Transaction() {
  const [transactions, setTransactions]=useState([]);
  useEffect(() =>{
    fetch("http://localhost:3000/transactions")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data)
      setTransactions(data)
    })
  }, []);
  return (
    <>
      {transactions && <Filter data={transactions}/>}
    </>
  )
}

export default Transaction
