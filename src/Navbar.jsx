import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { hotels } from './Data';

export default function Navbar() {
    const [showinp, setshowinp] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleinp = () => {
        setshowinp(true);
    };

    const handleclose = () => {
        setshowinp(false);
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        
        setshowinp(true);
    };


    const filteredHotels = hotels.filter(hotel => hotel.name.toLowerCase().includes(searchText.toLowerCase()));

    console.log('test filter', filteredHotels);

    return (
        <>
            <div className=' '>
                <div className=' bg-black flex justify-between items-center h-20  px-12'>
                    <div className=' flex justify-center items-center  '>
                        <img src="../asets/img/logo (2).png" alt="" className=' h-14 w-56' />
                    </div>
                    <div className=' hidden  lg:flex justify-center items-center'>
                        <ul className='h-full  text-white flex justify-center items-center gap-8 text-lg'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <section className='relative'>
                        {!showinp &&
                    <div className=''>
                        <button onClick={handleinp}> <FaSearch className='text-2xl text-white' /> </button>
                    </div>
                    }
                        {showinp && (
                            <>
                                <div className="flex items-center gap-3">
                                    <input onChange={handleInputChange} value={searchText} type="text" className="border-2 w-full border-black" placeholder="Search" />
                                    <button className="text-white" onClick={handleclose}>X</button>
                                </div>
                                {searchText && (
                                    <div>
                                        {filteredHotels.map((ele) => (
                                            <div className='bg-white absolute left-0 top-full w-full flex'>
                                                <img src={ele.image} alt='' className=' h-[50px] w-[50px]' />
                                                <h2 className=' text-black'>{ele.name}</h2>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                        </section>
                </div>
            </div>
        </>
    );
}
