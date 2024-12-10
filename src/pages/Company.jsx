import React from 'react'
import about from '../assets/about1.jpg'
import about2 from '../assets/about2.png'


const Company = () => {
  return (
    <>
      <div className='mt-32 flex justify-center text-yellow-700 font-semibold'>About Us
      </div>
      <div className='flex justify-center font-light ml-16 mr-16 leading-8'>
        <p>
          Established in 1968, GT Holidays is entirely owned and managed by Sangam Group of Hotels. The Sangam Group is recognized as one of the largest hotel chains in Tamil Nadu. Along with the Group, the GT Holidays is striving hard for ultimate success and innovation.
          <br />
          We are an ISO 9001: 2008 certified company that aim to set clear goals, fix the priorities and organize the resources effectively. GT Holidays enables you to discover a new destination and offer unique ideas to your travel.
          <br />
          Our travel company offers a complete business travel environment for MICE (Meetings, Incentives, Conferences and Events) services at affordable cost. We provide a wide range of holiday tour packages for all the domestic and international destinations across the world.
        </p>
      </div>
      <br></br>

      <div className='flex justify-center w-auto h-36 pl-22 gap-9'>
        <img src={about} />
        <img src={about2} alt="" />
        </div>
        <div className='flex justify-center mr-32 ml-36 gap-4'>
        <div className=''>
          <h2 className='font-semibold '>Our Mission</h2>
          <div className='w-72'></div>
          <p className='text-sm'>
            GT Holidays is a full integrated travel company that offers comprehensive solutions for all the business and leisure travelers across the world. This prestigious travel company in Chennai mainly aims to satisfy the client’s requirements with ultimate transparency and cost-effectiveness. We assure to offer round the clock support and assistance at any point of your travel.

          </p>
          </div>
        <div className=''>
          <h2 className='font-semibold'>Our Vision</h2>
          <div className='w-56'></div>
          <p className='text-sm '>
          Our GT Team is striving hard to become the world class travel company and industry leader in the near future. We are planning to focus on customer centric approach and gain recognition among the worldwide clients. The travel company believes in maintaining highest quality standards and craft extraordinary moments especially for you.
          </p>
          </div>
        
          </div>
          <div></div>
          


      
    </>

  )
}

export default Company