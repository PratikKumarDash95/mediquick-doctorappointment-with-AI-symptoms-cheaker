import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediQuick Health, a cutting-edge healthcare platform designed to revolutionize the way you access and manage medical care. Our mission is to bring **efficiency, accessibility, and innovation** to the healthcare industry, ensuring that patients receive timely and hassle-free medical attention.</p>
          
          <p>At **MediQuick Health**, we leverage modern technology to simplify appointment scheduling, health record management, and doctor consultations. Our platform is built for patients and healthcare providers alike, offering a seamless and user-friendly experience.</p>

          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a world where healthcare is just a click away. We aim to bridge the gap between patients and medical professionals by providing an intuitive and reliable digital platform that supports proactive health management.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>INSTANT ACCESS:</b>
          <p>Get connected with healthcare providers in real time, reducing wait times for critical care.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>SMART HEALTH RECORDS: </b>
          <p>Securely store and access your medical history anytime, ensuring smooth consultations and follow-ups.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>AI-DRIVEN CARE:</b>
          <p>Our AI-powered system provides health insights, medication reminders, and symptom tracking to keep you informed.</p>
        </div>
      </div>

    </div>
  )
}

export default About
