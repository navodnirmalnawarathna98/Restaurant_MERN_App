import { GrRadialSelected } from "react-icons/gr"
import { menus } from "../../constants"
import { useState } from "react"

const MenuContainer = () => {

    const [selected, setSelected] = useState(menus[0]);

    const [itemCount, setItemCount] = useState(0);

    const [itemId, setItemId] = useState();

    const increment = (id) => {
        setItemId(id);
        if (itemCount >= 4) return;
        setItemCount((prev) => prev + 1)
    }
    const decriment = (id) => {
        setItemId(id);
        if (itemCount <= 0) return;
        setItemCount((prev) => prev - 1)
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {
                    menus.map((menu) => {
                        return (
                            <div key={menu.id} className="flex flex-col items-start justify-between 
                            p-4 rounded-lg h-[100px] cursor-pointer" style={{ backgroundColor: menu.bgColor }}
                                onClick={() => {

                                    setSelected(menu);
                                    setItemId(0);
                                    setItemCount(0);
                                }

                                }>
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.icon} {menu.name}</h1>
                                    {
                                        selected.id === menu.id && <GrRadialSelected className="text-white" size={20} />
                                    }
                                </div>
                                <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} Items</p>
                            </div>
                        )
                    })
                }
            </div>

            <hr className="border-[#2a2a2a] border-t-2 mt-4" />

            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {
                    selected.items.map((menu) => {
                        return (
                            <div key={menu.id} className="flex flex-col items-start justify-between 
                            p-4 rounded-lg h-[100px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[#ababab] text-xl font-bold">${menu.price}</p>
                                    <div className="flex items-center justify-between
                                     bg-[#1f1f1f] px-4 py-2 rounded-lg gap-6">
                                        <button
                                            onClick={() => decriment(menu.id)}
                                            className="text-yellow-500 text-2xl">&minus;</button>
                                        <span className="text-white">{menu.id === itemId ? itemCount : "0"}</span>
                                        <button
                                            onClick={() => increment(menu.id)}
                                            className="text-yellow-500 text-2xl">&#43;</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenuContainer