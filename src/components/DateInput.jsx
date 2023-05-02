import React, { useEffect, useState } from 'react'
import AgeDisplay from './AgeDisplay'

function DateInput() {
    const displayObject = {
        day : '--',
        month : '--',
        year : '--'
    }
    const [dateInput, setDateInput] = useState({
        day : '',
        month : '',
        year : ''
    })
    const [displayDate, setDisplayDate] = useState(displayObject)
    
    const [currentDate, setCurrentDate] = useState('')
    
    const [dayError, setDayError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)
    const [invalidDate, setInvalidDate] = useState(false)

    //console.log('currentDate', currentDate);

    const getCurrentDate = () => {
        const date = new Date()
        const toDay = {
            day : date.getDate(),
            month : date.getMonth()+1,
            year : date.getFullYear()
        } 
        return toDay
    }
    /* const validDate = (date) => {
        return date instanceof Date && !isNaN(date)
    } */
    const handleChange = (e) => {
        setDateInput({
            ...dateInput,
            [e.target.name] : e.target.value
        })
        setCurrentDate(getCurrentDate)
    }
    const calculateAge = (userInput, currentDate) => {
        const calculateMonth = (userInput, currentDate) => {
            let month = null
            if (currentDate.month < userInput.month) {
                month = ((currentDate.month - userInput.month) + 12)
            } else {
                month = currentDate.month - userInput.month
            }
            return month
        }
        const calculateYear = (userInput, currentDate) => {
            console.log('AÑO CARGADO',parseInt(userInput.year));
            console.log('AÑO DATE',currentDate.year);
            let year = 0
            if (currentDate.year - parseInt(userInput.year) === 0){
                return year = 0
            } 
            else if (currentDate.year > parseInt(userInput.year)){
                return year = currentDate.year - parseInt(userInput.year) -1
            }

        }
        
        const userAge = {
            day : Math.abs(currentDate.day - userInput.day),
            month : calculateMonth(userInput, currentDate),
            year : calculateYear(userInput, currentDate)
        }
        //console.log('USER AGE', userAge);
        return userAge
    }
    const showAge = () => {
        //date inputs validation
        if(isNaN(dateInput.day) === true || dateInput.day <= 0 || dateInput.day > 31){
            setDayError(true)
            setDisplayDate(displayObject)
        }
        else if(isNaN(dateInput.month) === true || dateInput.month <= 0 || dateInput.month > 12) {
            setMonthError(true)
            setDisplayDate(displayObject)
        }
        else if(dateInput.year === '' || isNaN(dateInput.year) === true || dateInput.year > currentDate.year) {
            setYearError(true)
            setDisplayDate(displayObject)
        }
        else if (new Date(`${dateInput.year}-${dateInput.month}-${dateInput.day}`) > new Date()){
            setInvalidDate(true)
            setDisplayDate(displayObject)
        }

        else {
            setDisplayDate(calculateAge(dateInput, currentDate))
            setDayError(false)
            setMonthError(false)
            setYearError(false)
            setInvalidDate(false)
        }
    }
  return (
    <section className='app--container'>
        <div className='input--container'>
            <div className='input--component'>
                <label className={dayError ? 'label--error' : 'label--date'}>DAY</label>
                <input className={dayError ? 'input--error' : 'input--date'} placeholder='DD' value={dateInput.day} name='day' onChange={handleChange}></input>
                {dayError && <p className='error--message'>Must be a valid day</p>}
                {invalidDate && <p className='error--message'>Must be a valid DATE.</p>}
            </div>
            <div className='input--component'>
                <label className={monthError ? 'label--error' : 'label--date'}>MONTH</label>
                <input className={monthError ? 'input--error' : 'input--date'} placeholder='MM' value={dateInput.month} name='month' onChange={handleChange}></input>
                {monthError && <p className='error--message'>Must be a valid month</p>}
            </div>
            <div className='input--component'>
                <label className={yearError ? 'label--error' : 'label--date'}>YEAR</label>
                <input className={yearError ? 'input--error' : 'input--date'} placeholder='YYYY' value={dateInput.year} name='year' onChange={handleChange}></input>
                {yearError && <p className='error--message'>Must be in the past</p>}
            </div>
        </div>
        <div className='button--container'>
            <hr className='line'/>
            <button className='button--display' onClick={showAge}><img className='button--img' src='./src/assets/images/button.png'></img></button>
        </div>
        <div className='display--container'>
            <AgeDisplay data={displayDate}/>
        </div>

    </section>

  )
}

export default DateInput