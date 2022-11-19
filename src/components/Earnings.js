import React from 'react';
import '../styles/Earnings.css'

function Earnings({lifetime , monthly}) {
  return (
    <div className='earningsWrapper'>
        <div className='earningsContainer'>
            <p>Lifetime Earning</p>
            <p><strong>$42342</strong></p>
        </div>
        <div className='earningsContainer'>
            <p>This Month Earning</p>
            <p><strong>$42342</strong></p>
        </div>
    </div>
  )
}

export default Earnings