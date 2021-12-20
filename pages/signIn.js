const signIn = () => {
  
   const  handleOnClick = (e) => {
       e.preventDefault()
     console.log(e.target.value);
    }



    return (
        <div className='w-screen bg-[#f5f6f8] h-screen flex justify-center items-center'>
            <form className="bg-[#253237] w-[400px] h-[500px] flex flex-col justify-center items-center rounded-lg py-[1rem] px-[1.5rem] focus:outline-offset-0">
                <h1 className="text-[2rem] text-[#FFFFFF] font-bold">Login</h1>
                <input  onChange={handleOnClick} type="email" placeholder="Email" autoComplete="false" className="mt-10 p-[0.5rem] w-[100%] rounded-sm text-[18px] name_field" />
                <input  onChange={handleOnClick} type="password" placeholder="Password" autoComplete="false"  className="mt-10 p-[0.5rem] w-[100%] rounded-sm text-[18px]" />
                <button onClick={handleOnClick}  className="mt-10 bg-red-100 py-[0.5rem] px-[1.7rem] text-center rounded-sm text-[18px]">Sign In</button>
            </form>

        </div>
    )
}

export default signIn
