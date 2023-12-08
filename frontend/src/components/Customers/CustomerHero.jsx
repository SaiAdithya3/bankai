import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { PiExport } from 'react-icons/pi';
import { BiSolidGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import Sticky from 'react-stickynode';
import ToggleButton from '../../utils/utilcomp/ToggleButton';


const CustomerHero = () => {
    return (
        <>
            <Sticky enabled={true} top={0}   >
                <div className=" bg-white">
                    <div className='flex flex-col items-center p-4 justify-between'>
                        <div className='flex items-center w-full'>
                            <h1 className='text-2xl font-bold mx-8'>Customer Details</h1>
                        </div>

                        <div className="flex w-full px-8 py-1">
                            <div className='gap-2 w-full flex items-center '>
                                <ToggleButton name={"Grid"} icon={BiSolidGridAlt} />
                                <ToggleButton name={"List"} icon={FaListUl} />
                                <ToggleButton name={"Analytics"} icon={SiSimpleanalytics} />

                            </div>
                            <div className="flex py-2 w-full  items-center justify-between relative">
                                <CiSearch className="inline-block ml-3 absolute text-gray-400 w-5 h-5" />
                                <input type="text" className="shadow focus:outline-none focus:ring-1 border focus:ring-gray-300 pl-12 text-black/70 bg-white border-gray-200 text-sm rounded-lg p-2 w-[100%] h-10" placeholder='Search for it!' />
                            </div>
                        </div>
                    </div>
                    {/* <Sticky enabled={true} top={0}   > */}
                    <div className="flex gap-10 bg-white px-8 pt-3">

                    </div>
                    <hr className="border-gray-200" />
                    {/* </Sticky> */}
                </div>
            </Sticky>
        </>
    )
}

export default CustomerHero