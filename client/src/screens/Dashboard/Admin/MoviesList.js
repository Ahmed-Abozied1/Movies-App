import React from 'react'
import Table from '../../../components/Table'
import { Movies } from '../../../Data/MovieData'
import SlideBar from '../SlideBar'

const MoviesList = () => {
  return (
<SlideBar>
<div className='flex flex-col gap-6 '>
    <div className='flex-btn gap-2 '>
        <h2 className='text-xl font-semibold'>Movies List</h2>
        <button className='bg-main font-medium transitions hover:bg-submain  border   border-submain  text-white  py-3 px-6  rounded '>
        Delete All

        </button>
    </div>
    <Table data={Movies} admin={true}/ >
</div>

</SlideBar> 
 )
}

export default MoviesList