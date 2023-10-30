import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineSearch ,
  AiFillBell,AiFillVideoCamera 
} from "react-icons/ai";


const Header = () => {
  const navigate =useNavigate()


  const handleSubmit=(e) => {
    e.preventDefault();
    const query =e.target[0].value;

    //kullanıcıyı arama sonuçları sayfasına yönlendirme
    navigate(`/results?search_query=${query}`);
   
  };
  return (
  <header className="flex justify-between items-center p-4">
    
    <Link to={'/'} className="flex items-center gap-[6px]">
    <img className="w-[50px]" src="/Youtubelogo.png" />
    <h1 className="text-2xl hidden md:blok">Youtube</h1>

    </Link>

    <form
     onSubmit={handleSubmit} 
     className="flex items-center border border-gray-400 rounded-[20px] ">
     
     <input className="bg-black outline-none rounded-[20px] py-1 px-3" type="search"/>
      <button className="grid place-items-center border-1 px-2 h-full ">
       <AiOutlineSearch/>
      </button>
    </form>
    <div className="flex gap-3 text-xl cursor-pointer">
      <AiFillBell/>
      <AiFillVideoCamera/>
    </div>
    
    </header>
  ) 
}

export default Header;