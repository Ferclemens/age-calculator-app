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


    const calculateAge = (userInput, currentDate) => {
        let month = 0
        const calculateMonth = (userInput, currentDate) => {
            if (currentDate.month < userInput.month) {
                month = ((currentDate.month - userInput.month) +12)
            } else {
                month = currentDate.month - userInput.month
            }
            return month
        }
        
        const userAge = {
            day : currentDate.day - userInput.day,
            month : calculateMonth(userInput, currentDate),
            year : (currentDate.year - userInput.year) - 1
        }
        console.log('USER AGE', userAge);
        return userAge
    }

    const showAge = () => {
        //cambiar 'date' por la variable con la edad resuelta 
        setDisplayDate(calculateAge(dateInput, currentDate))
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