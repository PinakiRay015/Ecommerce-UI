import React , {useState} from "react";
import search from "../assets/search.png";
import cart from "../assets/Cart.png";
import wishlist from "../assets/wishlist.png";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {

  const [open, setOpen] = useState(false)

  const openMenu = () =>
  {
    setOpen(!open);
  }

  return (
    <div className="w-full h-16 border-b sticky z-9 top-0 bg-white">
      <div className="h-full px-3 max-w-screen-xl m-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
        <p onClick={openMenu} className="lg:hidden text-[24px]"><HiMenuAlt2 /></p>
        <Link to="/"><p className="font-inter text-[24px] font-bold">Exclusive</p></Link>
        </div>

        {/* navbar  */}
        <nav className="hidden lg:flex gap-[48px] ml-[10rem]">
          <Link to="/"><li className="list-none font-poppins text-[16px] cursor-pointer">Home</li></Link>
          <Link to="/contact"><li className="list-none font-poppins text-[16px] cursor-pointer">Contact</li></Link>
          <Link to="/about"><li className="list-none font-poppins text-[16px] cursor-pointer">About</li></Link>
          <Link to="/signup"><li className="list-none font-poppins text-[16px] cursor-pointer">Sign Up</li></Link>
        </nav>

        {/* search bar  */}
        <div className=" w-[347px] h-[38px] flex items-center justify-between">
          <div className="flex items-center w-[223px] h-full bg-[#dddcdc] justify-between rounded-sm py-[7px] px-[8px]">
            <input
              type="text"
              className="w-full bg-transparent h-full outline-none font-poppins text-[14px] placeholder-black font-light"
              placeholder="what are you looking for?"
            />
            <img className="cursor-pointer" src={search} alt="" />
          </div>
          <Link to="/wishlist"><img className="cursor-pointer" src={wishlist} alt="" /></Link>
          <Link to="/cart"><img className="cursor-pointer" src={cart} alt="" /></Link>
        </div>
      </div>

      <div className={`${open ? 'translate-x-[0rem]' : 'translate-x-[-100rem]'} px-5 lg:hidden max-w-screen-xl m-auto bg-black text-white transition-all duration-300 ease-in-out`}>
        <ul className="leading-[5rem]">
        <Link to="/"><li className="list-none font-poppins text-[16px] cursor-pointer">Home</li></Link>
          <Link to="/contact"><li className="list-none font-poppins text-[16px] cursor-pointer">Contact</li></Link>
          <Link to="/about"><li className="list-none font-poppins text-[16px] cursor-pointer">About</li></Link>
          <Link to="/signup"><li className="list-none font-poppins text-[16px] cursor-pointer">Sign Up</li></Link>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
