import Navbar from "@/components/Navbar"

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 p-10 text-3xl">
        <Navbar/>
     <div className="p-10">
     <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">My Career Objective</h2>
     <ul>
       <li className="text-white mt-4">
        To work in a challenging environment where I can apply my skills and grow professionally.
      </li>
      </ul>
     </div>
    </div>
  );
};

export default Career;
