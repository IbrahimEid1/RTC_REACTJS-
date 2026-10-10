import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const AddUser = ({handelusers}) => {
const [userData , setUserData ] =useState({
id: uuidv4(),
name:'' ,
age:'' ,
Job:''
})

    const handelChanges =(event)=> {
          setUserData({...userData ,[event.target.name]:event.target.value})
    }

    const handelSubmitData = (e)=> {
        e.preventDefault()
        handelusers(userData)
    }

   return (   
    <div className='w-full mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-7 shadow-xl'>
        {/* header  */}
        <div className="mb-6 text-center"> 
       
                <h2 className='text-2xl font-bold tracking-tight text-gray-900 '>Add New User</h2>
                <p className='mt-2 text-xs text-gray-500'>Enter user Details to Create a new Profile </p>
        </div>
        {/* Form  */}
        <form className='space-y-5' onSubmit={handelSubmitData}> 
            <div >
                <label htmlFor="name" className='mb-2 block text-sm font-semibold text-gray-700'> 
                    Full Name 
                </label>
                <input type="text" onChange={handelChanges} name="name" placeholder='Enter Your Full Name ' className='w-full rounded-xl border border-gray-200
                 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-violet-100 '/>
            </div>
            <div >
                <label htmlFor="age"  className='mb-2 block text-sm font-semibold text-gray-700'> 
                    Age
                </label>
                <input type="text" onChange={handelChanges} name="age"  placeholder='Enter Your Age  ' className='w-full rounded-xl border border-gray-200
                 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-violet-100 '/>
            </div>
            <div >
                <label htmlFor="age" className='mb-2 block text-sm font-semibold text-gray-700'> 
                    Job Title 
                </label>
                <input type="text" onChange={handelChanges} name="Job"  placeholder='e.g. Front-End Developer   ' className='w-full rounded-xl border border-gray-200
                 bg-gray-50 px-4 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-violet-100 '/>
            </div>
            <button type='submit' className='flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white
                shadow-md shadow-violet-200 transition hover:bg-violet-800
            '>
            <span className='text-xl leading-nonoe'>+</span>
                Add New User 
            </button>
        </form>
    </div>
  )
}

export default AddUser