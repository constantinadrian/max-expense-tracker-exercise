import React,{ useState } from 'react'

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState ('2021')

    const filterChangeYearHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                selected={selectedYear} 
                onShowYearSelected={filterChangeYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses