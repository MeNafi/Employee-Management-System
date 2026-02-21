import React from 'react'

const Login = () => {
  
    const submitHandler = (e) =>{
      e.preventDefault()
      console.log("Hello guys, form submitted");

    }
  
    return (
    <div className='flex h-screen w-screen items-center justify-center'>
       <div className='border-2 border-emerald-600 p-20'>
    
    
      <form 
      onSubmit={(e) =>{
        submitHandler(e);
      }
    }
      
      className='flex flex-col items-center justify-center'>

        <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-3 rounded-full placeholder:text-gray-400'type="email" placeholder='Enter your email'/>

        <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-3 rounded-full placeholder:text-gray-400 mt-3'type="password" placeholder='Enter your password'/>

        <button className='text-white border-none outline-none border-2 bg-emerald-600 text-xl px-5 py-3 rounded-full placeholder:text-white mt-5'>Log in</button>
      </form>
      
       </div>

    </div>
  )
}

export default Login