import React from 'react';

const isIncome = Math.round(Math.random()); // Gives 0 50% of time and 1 rest 50% of time, so act like boolean.


const Infocard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }} >
            Try Saying: 
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$100 ' : '$50 '}
            in category {isIncome ? 'Salary ' : 'Travel '}
            for {isIncome ? 'Monday...' : 'Sunday...'}
        </div>
    )
}

export default Infocard
