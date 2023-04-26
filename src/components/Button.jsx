import React from 'react'

function Button({showAge}) {
    
  return (
    <section>
        <button onClick={() => showAge()}>Button</button>
    </section>
  )
}

export default Button