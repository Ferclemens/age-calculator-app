import React, { useState } from 'react'
import Button from './Button'
import AgeDisplay from './AgeDisplay'

function DateInput() {
    const [dateInput, setDateInput] = useState({
        day : 0,
        month : 0,
        year : 0
    })
    const [currentDate, setCurrentDate] = useState('')
    const [displayDate, setDisplayDate] = useState({
        day : '--',
        month : '--',
        year : '--'
    })

    //console.log('dateInput',dateInput);
    console.log('currentDate', currentDate);

    const getCurrentDate = () => {
        const date = new Date()
        const toDay = {
            day : date.getDate(),
            month : date.getMonth()+1,
            year : date.getFullYear()
        } 
        //console.log('Hoy ES', toDay);
        return toDay
    }

    const handleChange = (e) => {
        setDateInput({
            ...dateInput,
            [e.target.name] : e.target.value
        })
        setCurrentDate(getCurrentDate)
    }


    const calculateAge = (dateInput, currentDate )

    const showAge = () => {
        //cambiar 'date' por la variable con la edad resuelta 
        setDisplayDate(dateInput)
    }
    //getCurrentDate()
  return (
    <section>
        <div>
            <label>DAY</label>
            <input type='number' value={dateInput.day} name='day' onChange={handleChange}></input>
            <label>MONTH</label>
            <input type='number' value={dateInput.month} name='month' onChange={handleChange}></input>
            <label>YEAR</label>
            <input type='number' value={dateInput.year} name='year' onChange={handleChange}></input>
        </div>
        <div>
            <Button showAge={showAge}/>
        </div>
        <div>
            <AgeDisplay data={displayDate}/>
        </div>

    </section>

  )
}

export default DateInput