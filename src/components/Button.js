import React from 'react'

function Button(props) {
  return (
    <div className='banner-buttons grid'>
        <div className='grid banner-btnl'>
            <div className={props.isPrimary ? 'primary-btn' : 'secondary-btn'}>
                {props.isPrimary ? 'Shop now' : 'See details'}         
            </div>
        </div>
        <div className='grid banner-btnr'>
            <div className={props.isPrimary ? 'secondary-btn' : 'primary-btn'}>
                {props.isPrimary ? 'See details' : 'Shop now'}
            </div>
        </div>
    </div>
  )
}

export default Button