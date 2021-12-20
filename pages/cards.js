import Image from "next/image"
const cards = () => {
    return (
        <div className =" cards w-[500px]  h-[500px] px-[20px] m-[10px] bg-[#9EBC9E]  flex justify-center items-center flex-col shadow-xl rounded-md	">
        <Image className="rounded-full " width="140px" height="140px pb-0.5	 mb-[2rem]"   src="/img1.jpg"   />
        <h1 className="text-[1.4rem] mt-[10px] text-bolder font-semibold">Sonakshi Sharma</h1>
        <p> <span className="font-medium"> Discription </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio inventore nostrum iste minima? Eos expedita veritatis architecto aut quod, repudiandae tempora iste tenetur eius, quisquam ipsa cum, dolor minus.</p>
        <p>Publish : 12/11/2021</p>
        </div>
    )
    
}

export default cards
 