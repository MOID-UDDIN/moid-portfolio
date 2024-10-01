import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-gradient-to-r from-sky-600 to-cyan-800 p-2 shadow-md rounded-lg text-2xl ">
        <ul className="flex space-x-4 text-white ">
          <li className='hover:font-bold'><Link href="/">Home</Link></li>
          <li className='hover:font-bold'><Link href="/skills">My Skills</Link></li>
          <li className='hover:font-bold'><Link href="/education">My Education</Link></li>
          <li className='hover:font-bold'><Link href="/career">Career Objective</Link></li>
          <li className='hover:font-bold'><Link href="/experience">Working Experience</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
