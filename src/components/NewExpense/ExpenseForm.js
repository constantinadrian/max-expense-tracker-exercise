import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [showForm, setShowForm] = useState(false)

    const [enteredTitle, setEnteredTitle] = useState ('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // Single Update
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    // Single Update
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    
    // Single Update
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    // alternative using One State Instead
    // const [userInput, setUserInput] = useState({
    //     'enteredTitle': '',
    //     'enteredAmount': '',
    //     'enteredDate': '',
    // })

    // All Update - This is unreliable. Will fail and result in bugs
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // All Update - This is reliable. Guaranteed state is the latest version of state
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevSate) => {
    //         return {
    //             ...prevSate,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevSate) => {
    //         return {
    //             ...prevSate,
    //             enteredAmount: event.target.value,
    //         }
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevSate) => {
    //         return {
    //             ...prevSate,
    //             enteredDate: event.target.value,
    //         }
    //     })
    // }

    // All this could be done with one function that need to be add on each 
    // input onChange={onInputChangeHandler} 
    // and update each input state using event.target.name: event.target.value
    // const onInputChangeHandler = (event) => {
    //     setUserInput((prevSate) => {
    //         return { ...prevSate, [event.target.name]: event.target.value}

    //     })
    // }

    const submitFormHaldler = (event) => {
        event.preventDefault();

        const expenseData = {
            // title: userInput.enteredTitle,
            // amount: +userInput.enteredAmount,
            // date: new Date(userInput.enteredDate),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData)
        showFormHandler()
        clearForm();
    }

    const clearForm = () => {
        // setUserInput({
        //     'enteredTitle': '',
        //     'enteredAmount': '',
        //     'enteredDate': '',
        // })
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const showFormHandler = () => {
        // using previous state
        setShowForm((currentShowForm) => {
            return !currentShowForm
        })
    }

    if (showForm === false) {
        return (
            <div className='new-expense__display-form-button'>
                <button type='button' onClick={showFormHandler} >Add New Expense</button>
            </div>
        )
    }


    return (
        <form onSubmit={submitFormHaldler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        name='enteredTitle'
                        onChange={titleChangeHandler}/>
                        {/* onChange={onInputChangeHandler}/> */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount}
                        name='enteredAmount'
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler} />
                        {/* onChange={onInputChangeHandler}/> */}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        value={enteredDate}
                        name='enteredDate'
                        min='2019-01-01' 
                        max='2022-12-13' 
                        onChange={dateChangeHandler} />
                        {/* onChange={onInputChangeHandler}/> */}
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={showFormHandler}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;