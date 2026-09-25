import React from 'react'
import assets from '../../../assets/assets'

const Footer = ({ theme }) => {

    const yearNow = new Date().getFullYear();
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-15 pb-5 text-gray-800 dark:text-white bg-[#F9FBFF] dark:bg-gray-900'>

            <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-8 sm:gap-60 pb-[40px] border-b-1 border-[#3737374D]'>
                <div className='flex flex-col items-start gap-7'>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
                    <p className='text-xs sm:text-sm max-w-[431px]'>From strategy to execution, we craft digital solutions that move your business forward.</p>

                    <div className='flex flex-wrap items-center justify-start gap-6'>
                        <a href="#" className='sm:hover:border-b font-medium text-sm'>Home</a>
                        <a href="#services" className='sm:hover:border-b font-medium text-sm'>Services</a>
                        <a href="#our-work" className='sm:hover:border-b font-medium text-sm'>Our Work</a>
                        <a href="#contact-us" className='sm:hover:border-b font-medium text-sm'>Contact Us</a>
                    </div>
                </div>
                <div className='flex flex-col text-start gap-7'>
                    <h3 className='font-semibold w-full'>Subscribe to our newsletter</h3>
                    <p className='text-xs sm:text-sm'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex items-center gap-4'>
                        <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 outline-none text-sm pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900' required />
                        <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-6 py-3 rounded-md cursor-pointer hover:scale-103 transition-all'>
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-5 justify-between items-center w-full'>
                <p className='text-xs sm:text-sm text-[#7A7A7ACC] dark:text-white leading-4 text-center sm:text-left'>Copyright {yearNow} © agency.ai  -  All Right Reserved.</p>

                <div className='flex items-center justify-end gap-4'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer
