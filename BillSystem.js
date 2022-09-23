import React, { useContext, useState } from 'react'
import NoteContext from './context/notes/NoteContext'

function BillSystem() {
  const a=useContext(NoteContext)
  const[qty,setBurgerqty]=useState(a.burgerqty);
  const[total,setTotal]=useState(a.total);
  function add(ch){
    setBurgerqty(qty+1)
    if(ch=="burger")
    {
       setTotal(a.burgerprice+total)
    }
  }
  function del(ch){
    setBurgerqty(qty-1)
    if(ch=="burger")
    {
        setTotal(total-a.burgerprice)
    }
  }
  return (
    <div>
        <table align='center'>
            <tr>
                <td colSpan={2}><h2><center>Billing System</center></h2></td>
            </tr>
            <tr>
                <td>Burger $100 : </td>
                <td><button onClick={()=>add('burger')}>+</button></td>
                <td><button onClick={()=>del('burger')}>-</button></td> 
                <td> Qty : {qty}</td>
            </tr>
            <tr>
                <td colSpan={4}>Total : {total}</td>
            </tr>
        </table>
    </div>
  )
}

export default BillSystem