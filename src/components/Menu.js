import React, { useState } from 'react'


export default function Menu() {

   const [menu,setMenu] = useState("PRESS TO SEE THE MENU")
 


  return (
    <div className='relative h-full w-full flex   items-center my-[100px]'>
      
      <div className='bg-slate-100	border-2 shadow-inner shadow-xl w-6/12 mx-auto  text-lg place-self-center  overscroll-auto whitespace-pre-line leading-loose'>
            
            <button onClick={()=>{
                setMenu(
                <h5 className='mt-[50px] font-medium ml-5'>Bread Baske
                <p className='font-light text-slate-400 my-10'>Assortment of fresh baked fruit breads and muffins 5.50</p>
                <h5>Honey Almond Granola with Fruits</h5>
                <p className='font-light text-slate-400 my-10'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p></h5>
                
                )
            }} className=" w-6/12 shadow-lg shadow-slate-300 border-b-2 focus:bg-gray-700	focus:text-white ">EAT</button>
            
            <button onClick={()=>{
                setMenu(
                    <h5 className='mt-[50px] font-medium ml-5'>Coffee
                    <p className='font-light text-slate-400 my-10'>Regular coffee 2.50</p>
                    
                    
                    
                    <h5>Chocolato</h5>
                    <p className='font-light text-slate-400 my-10'>Chocolate espresso with milk 4.50</p>
                    
                    
                    <h5>Corretto</h5>
                    <p className='font-light text-slate-400 my-10'>Whiskey and coffee 5.00</p>

                    </h5>
                )
            }} className='w-6/12 shadow-lg shadow-slate-300 border-b-2 focus:bg-gray-700	focus:text-white '>DRINK</button>

            <p className='text-center m-10 text-lg antialiased'>{menu}</p>
            
            
      </div>

    </div>
  )
}
