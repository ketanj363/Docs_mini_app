import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from 'framer-motion';


function Card ({data , reference}){
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} 
     className="relative flex-shrink-0 w-60  rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 h-72 left-0 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-m mt-5 leading-tight fort-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? <IoClose/> : <LuDownload size=".9em" color="#fff"/>}
          </span>
        </div>

        {
          data.tag.isOpen && (<div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600"} py-4 flex items-center justify-center`}>
          <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
