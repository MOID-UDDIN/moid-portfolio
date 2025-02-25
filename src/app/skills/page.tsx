import Navbar from "@/components/Navbar";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-10 text-3xl ">
       <Navbar/>
     <div className="p-10">
     <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">My Skills</h2>
      <ul className="list-disc text-white mt-4 ml-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>Speaking Skills</li>
      </ul>
     </div>
    </div>
  );
};

export default Skills;
