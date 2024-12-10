import React from 'react'
import group from '../assets/group tour.jpg'
import dubai from '../assets/dubai.jpg'
import chennai from '../assets/chennai.jpg'
import ban from '../assets/ban.jpg'
import europe from '../assets/europe.jpg'


const GroupTour = () => {
  return (
    <>
    <div className='mt-32 ml-3 mr-3'>
      <img src={group} />
      <div className='text-4xl mt-6 ml-28'>
      <h1>Ultimate Group Tour Adventures</h1>
      <div className='text-2xl mt-3'> 
      <h3>Summer Groups for 2025</h3>
    <div className='flex justify-center w-64 gap-2 ml-96 mt-5'>
      <img src={dubai} />
      <img src={chennai} />
      <img src={ban} />
      <img src={europe} />
      </div>
    </div>
      



        </div>

    </div>
    </>
  )
}

export default GroupTour