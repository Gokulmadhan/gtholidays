import React from 'react';
import logo3 from '../assets/male.png';
import logo2 from '../assets/flower.jpeg';
import logo4 from '../assets/location.png';
import logo5 from '../assets/record.png';

const Home = () => {
    return (
        <section >
        <div>
        <div className='flex justify-center items-center w-full h-[80vh] '>

            <div className='h-96 w-700 overflow-hidden '>
               
                <a href="#">

                    <img src={logo2} className='h-96 w-200 scale-100 hover:scale-125 duration-30 transition-all' />
                </a>
            </div>
        </div>
            {/* Welcome Section */}
            <div>
                <h2 style={{ marginLeft: "60px", color: 'red' }}>Welcome To GT</h2>
                <div className='flex items-center hover:text-gray-700 justify-between p-11'>
                    <p>
                    GT Holidays Pvt. Ltd is a subsidiary of Sangam Group of Hotels, one of the biggest hotel chains in south Tamil Nadu. The Sangam Group of Hotels founded in 1968 has for forty years provided impeccable service and outstanding hospitality. It currently has 19 properties in Tamil Nadu. GT Holidays Pvt. Ltd built on this strong foundation aims to provide great customer satisfaction and an exemplary holiday experience. Planning a once in a lifetime holiday or a yearly corporate retreat? No problem! GT Holidays can get you what you want and in the minimal time. One of the best destination management companies in South India, it has the experience and infrastructure to handle any customer demand. In addition to destination management, GT Holidays also plans corporate tours, incentive trips, college/school excursions, business travel, arranges car/railway & hotel bookings and much, much more.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center gap-10 mt-10">
                {/* Left Card */}
                <div className='flex flex-col w-52 p-6 bg-gray-100 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300'>
                    <img src={logo3} className='rounded-full' />
                    <p className='text-center  text-yellow-600'>50,000</p>
                    <p className='text-center text-yellow-600'>Abroad Trips</p>
                    <p className='pl-2 text-justify'>
                        For the last decade, GT Holidays have organized more than 50,000 international itineraries.
                    </p>
                </div>

                {/* Right Card */}
                <div className='flex flex-col w-52 p-6 bg-gray-100 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300'>
                    <img src={logo4} />
                    <p className='text-center  text-yellow-600'>Handcrafted</p>
                    <p className='text-center text-yellow-600'>Experiences</p>
                    <p className='pl-2 text-justify'>
                        Each and every itinerary is customized according to the taste of the customers.
                    </p>
                </div>
                <div className='flex flex-col w-52 p-6 bg-gray-100 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300'>
                    <img src={logo5} />
                    <p className='text-center text-yellow-600'>Extremely Happy</p>
                    <p className='text-center  text-yellow-600'>Travellers</p>
                    <p className='pl-2 text-justify'>
                    GT Holidays holds record of great customer satisfaction and all customers are retained with us
                    </p>
                </div>
                
            </div>
        </div>
        </section>
    );
};

export default Home;
