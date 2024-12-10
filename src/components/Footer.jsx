import React from 'react'
import face from '../assets/facebook.png';
import insta from '../assets/insta.png';
import lin from '../assets/linkedin.png';
import you from '../assets/you.png';
import goo from '../assets/google.png';

const Footer = () => {
    return (
        <div>
            <div className='flex items-center mt-8 pl-60 gap-20 bg-black text-white ' >
                <div className='mb-32   '>
                    <h2 className='font-bold' >Corporate Office</h2>
                    <p style={{ width: '125px' }}><hr /></p>
                    <br />
                    <p className='w-40 italic text-1xl'>GT Holidays Pvt LTD,
                        Novel Tech Park,
                        Opposite to 1 MG Mall,
                        MG Road, Bangalore – 560042
                        Karnataka, India.</p>
                    <div className='mt-4'>
                        <br/>
                        <p>Call us</p>
                        <br/>
                        <p >+91 7904237345</p>


                    </div>


                </div>
                <div className='mb-32'>
                    <h2 className='font-bold' >Head Office</h2>
                    <p style={{ width: '90px' }}><hr /></p>
                    <br />
                    <p className='w-40 italic text-1xl'>
                        GT Holidays Pvt LTD,
                        No.1, Gemini Parsn,
                        Kodambakkam High Road,
                        Nungambakkam, Chennai – 600006
                        Tamilnadu, India.
                    </p>
                    <div >
                        <br/>
                      
                        <p>Email us</p>
                        <br/>
                        <a href='mailto:gokulmadhn49@gmail.com'>info@gmail.com</a>
                        
                    </div>
                </div>
                <div className='mb-32'>
                    <h2 className='font-bold ' >Our Branches</h2>
                    <p><hr /></p>
                    <br />
                    <div className='italic text-1xl'>
                        <a href='#' >Mumbai
                        </a><br />
                        <a href='#'>Hyderabad
                        </a><br />
                        <a href='#'>Bangalore
                        </a><br />
                        <a href='#'>Chennai
                        </a><br />
                        <a href='#'>Coimbatore
                        </a><br />
                        <a href='#' >Erode
                        </a><br />
                        <a href='#' >Madurai
                        </a>
                    </div>
                
                <div>
                    <br/>
                    
                    <p>Follow us:</p>
                    <br/>
                    <div className="flex gap-x-4">
                <a href="https://www.facebook.com/">
                        <img src={face} alt='logo' width={'20px'}  className=''/>
                    </a>
                    <a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-us&gl=US">
                        <img src={insta} alt='logo' width={'20px'} className=' '  />
                    </a>
                    <a href="https://www.linkedin.com/feed/">
                        <img src={lin} alt='logo' width={'20px'} className='' />
                    </a>
                    <a href="https://www.youtube.com/account">
                        <img src={you} alt='logo' width={'20px'}  className=''/>
                    </a>
                    <a href="https://www.google.co.in/">
                        <img src={goo} alt='logo' width={'20px'}  className=''/>
                    </a>
                    </div>
                </div>
                
            </div>
                </div>
                <div>
        <p className='flex gap-x-64 '>Copyright © 2024 by GT Holidays Pvt Ltd. All Rights Reserved.
                        <div >
                        <a href='#'>Privacy Policy | 
                        </a>
                        <a href='#'>Terms & Conditions | 
                        </a>
                        <a href='#'>Cancellation & Refund Policy
                        </a>
                        </div>
                        </p>
                        

                </div>

        </div>
    )
}

export default Footer