import React from 'react'
import Button from './Button'

function Banner(props) {
    let isPrimary = true;
  return (
    <div className='banner grid'>
        <div className='container'>
            <div className='banner-title'>
                {props.bannerTitle}
            </div>
            <div className='banner-text'>
                {props.bannerText}
            </div>
            <Button isPrimary={isPrimary}></Button>
        </div>
    </div>
  )
}

export default Banner