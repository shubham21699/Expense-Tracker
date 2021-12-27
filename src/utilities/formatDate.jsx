import React from 'react';

const formatDate = ( date ) => {
    
    const dt = new Date(date);
    let month = `${dt.getMonth() + 1}`; // Here Month starts from 0 that's why we have to add 1 to it.
    const day = `${dt.getDate()}`;
    const year = dt.getFullYear();

    if(month.length < 2) { 
        // Means month digit lies b/w 1 and 9, then it must be appended with 0 like 01, 02, ... , 09
        month = `0${month}`;
    }
    if(day.length < 2) { 
        // Means day digit lies b/w 1 and 9, then it must be appended with 0 like 01, 02, ... , 09
        day = `0${day}`;
    }

    // It returns the date in this order only with '-' in b/w them, like year-month-day: 2021-12-27
    return [year, month, day].join('-');
}

export default formatDate;
