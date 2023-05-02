import React from 'react'

function AgeDisplay({data}) {
    const {year, month, day} = data
    //console.log('datos desde ageDisplay', data)
  
  return (
    <section>
        <h1>{year} Years</h1>
        <h1>{month} Months</h1>
        <h1>{day} Days</h1>
    </section>
  )
}

export default AgeDisplay