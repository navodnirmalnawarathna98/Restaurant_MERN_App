/* eslint-disable no-unused-vars */
import BottomNav from "../components/shared/BottomNav"
import BackButton from "../components/shared/BackButton"
import { MdTableRestaurant } from "react-icons/md"
import { useState } from "react"
import MenuContainer from "../components/menu/MenuContainer"

const Menu = () => {

    const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-4">
        {/* left div */}
        <div className="flex-[3] bg-[#1f1f1f]">
        <div className="flex items-center justify-between px-10 py-4 mt-2">
            <div className="flex items-center gap-4"> 
                <BackButton/>
                <h1 className="text-[#dedddd] text-2xl font-bold tracking-wider">Menu</h1>
            </div>
            <div className="flex item-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
                <MdTableRestaurant className="text-[#f5f5f5] text-4xl"/>
                <div className="flex flex-col items-start">
                    <h1 className="text-mb text-[#f5f5f5] font-semibold">
                        Customer Name  
                    </h1>
                    <p className="text-xs text-[#ababab] font-medium">
                        Table No 02
                    </p>
                </div>
            </div>
            </div>
        </div>
        <MenuContainer/>
        </div>
        {/* right div */}
        <div className="flex-[1] bg-[#121212] mt-4 mr-3 h-[780px] rounded-lg pt-2">
            {/* Customer Info */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex flex-col items-start">
                    <h1 className="text-md text-[#f5f5f5] font-semibold"></h1>
                </div>
            </div>
            {/* Cart Items */}
            {/* Bills */}
          
        </div>
       
       
        <BottomNav />
    </section>
  )
}

export default Menu