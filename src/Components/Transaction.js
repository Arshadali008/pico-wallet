import React,{useContext} from 'react';
import { GlobalContext } from './Context/GlobalState'


const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign= transaction.amount < 0 ? '-' : '+';
  return (
    <div>
        <li className={transaction.amount<0?'shadow-lg bg-red-400 text-white flex justify-between relative p-2 mx-2':'bg-green-500 shadow-lg  text-white flex justify-between relative p-2 mx-2'}>
                {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className='cursor-pointer bg-yellow-30 border-0 text-red-500 text-xl inline-block leading-8 px-1 py-2 absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 opacity-0 hover:transition-opacity hover:duration-300 hover:opacity-100'>x</button>
            </li>
    </div>
  )
}

export default Transaction