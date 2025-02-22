import BottomNav from "../components/shared/BottomNav"
import Greetings from "../components/home/Greetings"
import Minicard from "../components/home/Minicard"
import RecentOrders from "../components/home/RecentOrders"
import PopulerDishes from "../components/home/PopulerDishes"
import { BsCashCoin } from "react-icons/bs"
import { GrInProgress } from "react-icons/gr"

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-4">
        {/* left div */}
        <div className="flex-[3] bg-[#1f1f1f]">
          {/* time date welcome */}
            <Greetings/>
            <div className="flex items-ceenter w-full gap-3 px-8 mt-8">
              <Minicard title="Total Earnings" icon={<BsCashCoin/>} number={512} footerNum={1.6}/>
              <Minicard title="In Progress" icon={<GrInProgress/>} number={16} footerNum={3.6}/>
            </div>
            <RecentOrders/>
        </div>
        {/* right div */}
        <div className="flex-[2] bg-[#121212]">
            <PopulerDishes/>
        </div>

        {/* buttom Navigation */}
        <BottomNav/>
    </section>
  )
}

export default Home