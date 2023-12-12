import React,{useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'


const ExpInc = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income=
  amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expence=(
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  return (
    <div className='bg-white shadow-xl p-5 flex justify-between my-5'>
        <div className='flex-1 text-center border-r border-solid border-gray-300'>
            <h4 className='m-0 uppercase'>Income</h4>
            <p id="Increment" className='text-green-500'>₹{income}</p>
        </div>
        <div className='flex-1 text-center'>
            <h4 className='m-0 uppercase'>Expence</h4>
            <p id="Decrement" className='text-red-600'>₹{expence}</p>
        </div>
    </div>
  )
}

export default ExpInc