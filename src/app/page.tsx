import Navbar from "@/components/Navbar";
import Image from "next/image";
import image from "@/public/image.jpg"



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-10 text-center ">
      <Navbar/>
 <div className="flex-col gap-2 text center text-2xl p-10">
 <h1 className="text-5xl font-bold text-transparent bg-clip-text text-white">MOID UDDIN</h1>
      <p className=" text-white mt-4">Date of Birth: 30 August 1999</p>
      <p className="text-white">Email: moiduddin990@gmail.com</p>
      <p className="text-white">Gender: Male</p>
      <p className="text-white">Phone: 03002977077</p>
 </div>
 <Image src={image} alt="image" className="rounded-full w-64 h-64 mt-6 mx-auto border-4 border-gradient-to-r from-sky-900 to-sky-900 "/>
    </div>
  );
};

export default Home;