import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>ME</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>MY OFFICE</p>
          <p className=' text-gray-500'>Centurion University <br /> Bhubaneswar, India</p>
          <p className=' text-gray-500'>Tel: +91 9876543210 <br /> Email: pratikdash.dev@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>WORK WITH ME</p>
          <p className=' text-gray-500'>I'm open to collaborations, internships, and freelance opportunities.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Let's Connect</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
