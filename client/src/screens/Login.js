import React from 'react'
import Layout from "../layout/Layout"
import { Input } from '../components/UsedInputs'
import { Link } from 'react-router-dom';
import {FiLogIn} from "react-icons/fi"
const Login = () => {
  return (
   <Layout>
<div className='container mx-auto px-2 my-24 flex-colo'>

<div className='w-full 2xl:w-2/5  gap-8  flex-colo sm:p-14 p-5  bg-dry rounded-lg border border-border'>
<img src='/images/logo.png'
 alt='Logo'
 className='w-full h-12 object-contain '/>
 <Input lable="Email" placeholder="ntflix@gmail.com " type="email" bg={true}/>
 <Input lable="Password" placeholder="******" type="Password" bg={true}/>
 <Link to="/dashboard" className='bg-submain transtions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg '>
  <FiLogIn/> Sign In
 </Link>
<p className='text-center text-border'>
  Don't have an account? {" "}
  <Link to="/register" className='text-dryGray font-medium ml-2 '>
    Sign Up
  </Link>
</p>
</div>
</div>

   </Layout>
  )
}

export default Login