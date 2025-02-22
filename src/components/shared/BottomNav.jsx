import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { FaBorderNone } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Model from "./Model";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModelOpen, setIsModelOpen] = useState(false);

  const [getsCount, setGuestCount] = useState(0);

  const openModel = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  const increment = () =>{
    if(getsCount >= 6) return;
    setGuestCount((prev) => prev + 1)
  } 
  const decriment = () => {
    if(getsCount <= 0) return;
    setGuestCount((prev) => prev - 1)
  }
    

  // Common styles for buttons
  const buttonClasses = "flex items-center justify-center w-[200px] rounded-[20px] px-5 py-2 font-semibold transition-colors duration-200";
  // Styles for active and inactive buttons
  const activeClasses = "bg-[#343434] text-[#f5f5f5]";
  const inactiveClasses = "text-[#ababab]";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className={`${buttonClasses} ${location.pathname === "/" ? activeClasses : inactiveClasses}`}
      >
        <FaHome className="inline mr-2" size={20} />
        Home
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`${buttonClasses} ${location.pathname === "/orders" ? activeClasses : inactiveClasses}`}
      >
        <FaBorderNone className="inline mr-2" size={20} />
        Orders
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`${buttonClasses} ${location.pathname === "/tables" ? activeClasses : inactiveClasses}`}
      >
        <MdTableBar className="inline mr-2" size={20} />
        Tables
      </button>
      <button
        onClick={() => navigate("/more")}
        className={`${buttonClasses} ${location.pathname === "/more" ? activeClasses : inactiveClasses}`}
      >
        <CiCircleMore className="inline mr-2" size={20} />
        More
      </button>
      <button onClick={openModel} className="absolute bottom-5 bg-[#F68100] text-[#f5f5f5] rounded-full p-3">
        <BiSolidDish size={30} />
      </button>

      <Model isOpen={isModelOpen} onClose={closeModal} tittle="Create Order">
          <div>
            <lable className="block text-[#ababab] mb-2 text-sm font-medium">
              Customer Name
            </lable>
            <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
              <input type="text" name="" placeholder="Enter Customer name" id=""
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <lable className="block text-[#ababab] mb-2 mt-2 text-sm font-medium">
              Customer Phone
            </lable>
            <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
              <input type="number" name="" placeholder="+94-702298135" id=""
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div>
            <lable className="blockk mb-2 mt-3 text-sm font-medium text-[#ababab]">
              Guest
            </lable>
            <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
              <button onClick={decriment} className="text-yellow-500 text-2xl">&minus;</button>
              <span className="text-white">{getsCount} Person</span>
              <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
            </div>
          </div>
          <button onClick={() => navigate("/tables")} className="w-full bg-[#f6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700">
            Create Order
          </button>
      </Model>
    </div>
  );
};

export default BottomNav;
