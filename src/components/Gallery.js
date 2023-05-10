import React from 'react'

function Gallery(props) {
  return (
    <div className='gallery-color'>
        <div className='container'>
            <div className='gallery grid'>
                {props.galleryList.map(e => (
                    <img alt={e.poster} src={e.poster} ></img>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Gallery