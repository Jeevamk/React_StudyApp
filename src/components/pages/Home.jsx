// eslint-disable-next-line no-unused-vars
import React from 'react'
import Carousal from './Carousal'
import {CarousalImages} from '../../utils/constants/Carousalimages'



export const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='max-w-3xl'>
      <Carousal autoSlide = {true}>
        {CarousalImages.map((s)=>(
          // eslint-disable-next-line react/jsx-key
          <img src={s} />
        ))}
      </Carousal>
      </div>
    </div>
  )
}
