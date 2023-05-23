import React from 'react'
import Head from '../components/Head'
import Layout from "./../layout/Layout"
const AboutUs = () => {
  return (
    <Layout>
<div className='min-h-screen container mx-auto px-2 my-2'>

  <Head title="About Us"/>
  <div className='py-10 lg:py-20 px-4'>
<div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16  items-center'>
<div >
  <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
    Welcome to our Netflix
  </h3>
  {/* <div className='mt-3 text-sm leading-8 text-white'>
  <p>Netflix is a streaming platform that
   provides subscribers with access to a vast
    library of movies, TV shows, documentaries,
     and more. It was founded in 1997 and initially
      started as a DVD-by-mail service. However,
       with the rise of streaming technology, 
       Netflix shifted its focus to online streaming,
        and today,it is one of the most popular streaming
    platforms in the world. </p>
</div> */}
<div className='grid md:grid-cols-2 gap-6 mt-8'>
  <div className='p-8 bg-dry rounded-lg'>
    <span className='text-3xl block font-extrabold my-1'>10K</span>
    <h4 className='text-lg font-semibold mb-1'>Listed Movies</h4>
  <p className='mb-0 text-text leading-7 text-sm'>
  including drama, comedy, horror, romance, action, and more.
  </p>
  </div>
  <div className='p-8 bg-dry rounded-lg'>
    <span className='text-3xl block font-extrabold my-1'>8K</span>
    <h4 className='text-lg font-semibold mb-1'>Lovely Users</h4>
  <p className='mb-0 text-text leading-7 text-sm'>
  users can access a variety of content from different genres  </p>
  </div>
  
</div>
</div>
<div className='mt-10 lg:mt-0'>
<img src='/images/about.jpg' className='w-full xl:block hidden h-header rounded-lg object-cover' alt=''/>
</div>
</div>
  </div>
</div>
    </Layout>
  ) 
}

export default AboutUs