import Navbar from "@/components/Navbar";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-10  text-3xl">
       <Navbar/>
    <div className="p-10">
    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">My Working Experience</h2>
      <ul className="list-disc text-white mt-4 ml-5">
        <li>Graphic Designer at CDX (2 years)</li>
        <li>Currently working as a Graphic Designer at Viral Verse</li>
      </ul>
    </div>
    </div>
  );
};

export default Experience;
