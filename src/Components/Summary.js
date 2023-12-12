import React,{useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'


const Summary = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
  return (
    <div>
        <h4 className='m-0 uppercase'>Your Balance</h4>
        <h1 className='m-0 text-3xl tracking-wide'>₹{total}</h1>
    </div>
  )
}

export default Summary