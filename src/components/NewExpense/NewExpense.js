import React from "react";

import { v1 as uuidv1 } from 'uuid';

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    // define an unique id
    const id = uuidv1();
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: id.toString(),
        }

        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;