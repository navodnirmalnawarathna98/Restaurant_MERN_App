import BottomNav from "../components/shared/BottomNav"
import OrderCard from "../components/orders/OrderCard"
import BackButton from "../components/shared/BackButton"
import { useState } from "react"

const Orders = () => {

  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4"> 
          <BackButton/>
        <h1 className="text-[#dedddd] text-2xl font-bold 
        tracking-wider">Orders</h1>
        </div>
        <div className="flex item-center justify-around gap-4">
          <buttom onClick={() => setStatus("all")} className={`text-[#ababab] cursor-pointer text-lg ${status === "all" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>All</buttom>
          <buttom onClick={() => setStatus("progress")} className={`text-[#ababab] cursor-pointer text-lg ${status === "progress" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>In Progress</buttom>
          <buttom onClick={() => setStatus("ready")} className={`text-[#ababab] cursor-pointer text-lg ${status === "ready" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>Ready</buttom>
          <buttom onClick={() => setStatus("completed")} className={`text-[#ababab] cursor-pointer text-lg ${status === "completed" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>Completed</buttom>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)] pb-24">
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
        <OrderCard /> 
      </div>



      {/* bottom nav*/}
      <BottomNav/>
    </section>
  )
}

export default Orders