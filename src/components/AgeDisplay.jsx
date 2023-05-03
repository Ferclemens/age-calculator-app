import React from 'react'

function AgeDisplay({data}) {
    const {year, month, day} = data
    //console.log('datos desde ageDisplay', data)
  
  return (
    <>
      <h1 className='age--legend'><label className='age--number'>{year}</label> Years</h1>
      <h1 className='age--legend'><label className='age--number'>{month}</label> Months</h1>
      <h1 className='age--legend'><label className='age--number'>{day}</label> Days</h1>
    </>
  )
}

export default AgeDisplay