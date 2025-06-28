import React from 'react'

const Login = () => {
  const handleSubmit= (e) =>{
e.preventDefault();
  }
    return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-purple-700 shadow-xl shadow-purple-500 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
           <h1 className='text-3xl font-bold'><span className='text-purple-600'>Admin 
            </span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>



</div>
<form onSubmit={handleSubmit}>
  <div className='flex flex-col'>
    <label>Email</label>
    <input type='email' required placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>

  </div>

  <div className='flex flex-col'>
    <label>Password</label>
    <input type='password' required placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
    
  </div>
  <button type='subimit' className='w-full py-3 font-medium bg-purple-600 text-white rounded cursor-pointer hover:bg-purple-300'>
    Login
  </button>
</form>
        </div>
      </div>
      
    </div>
  )
}

export default Login
