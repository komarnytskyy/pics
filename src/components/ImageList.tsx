import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export const ImageList = (props: any) => {
  const imagesList = props.images.map((image: any) => {
    return (
      <ImageCard
        key={image.id}
        image={image}
      />
    )
  })

  return (
    <div className='image-list'>{imagesList}</div>
  )
}
