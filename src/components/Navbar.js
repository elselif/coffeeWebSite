import React from "react";

function Navbar() {
  return (
    <div >
      <div className="border-2  border-white-400 flex  flex-row grid gap-1 grid-cols-4 py-4 justify-center  bg-black	text-white ">
        <div className="button" >
        <a href="#menu" className="hover:bg-slate-400 text-center block ml-4 px-24 py-4">MENU</a>
        </div>
        <div className="">
        <a href="#menu" className="hover:bg-slate-400 block text-center px-24 py-4">MENU</a>
        </div>
        <div>
          <a href="#menu" className="hover:bg-slate-400 text-center block px-24 py-4">MENU</a>
        </div>
        <div >
          <a href="#where" className="hover:bg-slate-400 text-center block mr-4 px-24 py-4 ">WHERE</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
