import React, { useState,useContext } from 'react'
import { GlobalContext } from './Context/GlobalState'


const Update = () => {
    const [text, setText]=useState('')
    const [amount, setAmount]=useState(0)
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction ={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

  return (
    <div>
        <h3 className='border-b border-b-gray-300 pb-2 mb-3 mr-0 mt-10'>Add new Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className=''>
                <label className='inline-block mx-0 my-3' htmlFor='text'>Text</label>
                <input type='text' id='text' className='border border-solid border-gray-300 rounded block text-base p-3 w-full' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter any Text'/>
            </div>
            <div className=''>
                <label className='inline-block mx-0 my-3' htmlFor='amount'>Amount<br/>(note: use negative sign for expence)
                </label>
                <input type='number' className='border border-solid border-gray-300 rounded block text-base p-3 w-full' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount'/>
            </div>
            <button className='cursor-pointer bg-blue-500 shadow-lg text-white border-0 block text-base mx-0 my-3 mb-10 px-10 h-10 w-full' onSubmit={onSubmit}>Add Transaction</button>
        </form>
    </div>
  )
}

export default Update