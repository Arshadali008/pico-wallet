import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from './Context/GlobalState'

const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
  return (
    <div>
        <h3 className='border-b border-b-gray-300 border-solid pb-2 my-10 mb-2'>History</h3>
        <ul className='list-none pt-3 mb-3'>
            {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}

        </ul>
    </div>
  )
}

export default TransactionList