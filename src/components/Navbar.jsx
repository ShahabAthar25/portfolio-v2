import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='px-5 py-7 flex justify-between items-center'>
        <div>
          <h1 className='font-oswald font-bold text-[22px] text-[#81e7f7]'>Shahab Athar</h1>
        </div>
        <div className="p-1 cursor-pointer hover:bg-gray-800 rounded-lg duration-200" onClick={() => setOpen(!open)}>
          <CiMenuBurger className="text-3xl" />
        </div>
        {open && 
          <div className="fixed bottom-0 left-0 w-full h-[60vh] rounded-t-[1.6rem] bg-[#2d3440] flex justify-center">
            <div className="my-5">
              <h1 className='font-oswald font-bold text-[25px] text-[#81e7f7]'>Shahab Athar</h1>
              <div className="flex justify-center">
                <hr className="w-[60%]" />
              </div>
            </div>
          </div>
        }
    </div>
  )
}
