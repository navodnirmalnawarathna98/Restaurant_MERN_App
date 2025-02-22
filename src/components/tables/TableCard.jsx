/* eslint-disable react/prop-types */
import { getRandomBG } from "../../utils"
import { useNavigate } from "react-router-dom";

const TableCard = ({key, name, status, initials }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    if(status === "Booked") return;
    navigate('/menu');

  }

  return (

    <div onClick={handleClick} key={key} className="w-[300px] hover:bg-[#2d2d2d] bg-[#262626] p-4 rounded-lg 
        mb-4 cursor-pointer">
        <div className="flex items-center justify-between px-1">
            <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
            <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
                {status}
            </p>

        </div>
        <div className="flex items-center justify-center mt-5 mb-9">
            <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>{initials}</h1>
        </div>
    </div>
  )
}

export default TableCard