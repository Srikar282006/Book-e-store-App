import React from 'react';
import {useForm} from  "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    
      const onSubmit = (data) => console.log(data)
    return ( 
        
       
       <div className='flex h-screen items-center justify-center '>
       <div  className="w-[440px]">
       <h3 className="font-bold text-lg">Contact Us </h3>
       <form onSubmit={handleSubmit(onSubmit)} method="dialog">
       <div className='mt-4 space-y-2'>
       
    <span>Name</span>
    <br/>
    <input
    type='text'
    placeholder='Enter ur fullname'
    className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("name", { required: true })}
    />
    <br/>
    {errors.name &&( <span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
    <input
    type='email'
    placeholder='Email address'
    className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("email", { required: true })}
    />
    <br/>
    {errors.email &&( <span className='text-sm text-red-500'>This field is required</span>)}
   </div>
   
   <div className='mt-4 space-y-2'>
    <span>Message</span>
    <br/>
    <textarea
    type='text'
    placeholder='Type ur message'
    className='w-80 size-lg px-3 py-1 border rounded-md outline-none'
    {...register("message", { required: true })}
    />
    <br/>
    {errors.message &&( <span className='text-sm text-red-500'>This field is required</span>)}
   </div>
   <div className='flex justify-around mt-4' >
   <button className="btn btn-secondary">Submit</button>
   <Link to="/">
                <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
   </div>
  
  </form>

       </div>
       </div>
        
     );
}

export default Contact;


   
   