const signIn = () => {
    return (
        <div className='w-screen bg-[#f5f6f8] h-screen flex justify-center items-center'>
            <form className="bg-[#253237] w-[400px] h-[500px] flex flex-col justify-center items-center rounded-lg py-[1rem] px-[1.5rem] focus:outline-offset-0">
                <h1 className="text-[2rem] text-[#FFFFFF] font-bold">Forget Password</h1>
                <input type="email" placeholder="Email" autoComplete="false" className="mt-10 p-[0.5rem] w-[100%] rounded-sm text-[18px]" />
                <button  className="mt-10 bg-red-100 py-[0.5rem] px-[1.7rem] text-center rounded-sm text-[18px]">Submit </button>
            </form>

        </div>
    )
}

export default signIn
