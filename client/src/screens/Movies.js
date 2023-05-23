import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Filters from '../components/Filters'
import Movie from "../components/Movie";
import {Movies} from "../Data/MovieData"
import { CgSpinner } from 'react-icons/cg';
const MoviesPage = () => {
  const maxPage=6;
  const[page,setPage]=useState(maxPage);
  const handleLoadingMore=()=>{
    setPage(page+maxPage);
  }
  return (
    <Layout>
    <div className='min-h-screen container mx-auto px-2 my-2'>
    <Filters/>
      <p className='text-lg font-medium my-6'>
        Total <span className='font-bold text-submain'>
          {Movies?.length}
        </span>{" "} items Found
      </p>
      <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6  '>

        {Movies.slice(0,page).map((movie,index)=>(
<Movie key={index} movie={movie}/>
        ))}
      </div>
      {/* loading More */}
      <div className='w-full flex-colo md:my-20 my-10'>
        <button onClick={handleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-submain '>
          Loading More... <CgSpinner className='animate-spin'/>
        </button>
      </div>
    </div>
        </Layout>
  )
}

export default MoviesPage