import React, { useRef } from 'react'
import Card from './Card'


function Fg() {
const ref = useRef(null);
  const data = [
    {
       desc:'Lorem ipsum dolor sit amet.',
       filesize:".9mb" , 
       close:true, 
       tag:{isOpen:true , tagtitle:"Download Now" , tagColor:"green"} 
       },
       {
        desc:'Lorem ipsum dolor sit amet.',
        filesize:".9mb" , 
        close:true, 
        tag:{isOpen:true , tagtitile:"Download Now" , tagColor:"green"} 
        },
        {
          desc:'Lorem ipsum dolor sit amet.',
          filesize:".9mb" , 
          close:true, 
          tag:{isOpen:true , tagtitile:"Download Now" , tagColor:"green"} 
          },
  ];
  return ( 
   <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-10 flex-wrap p-5'>
   
    {data.map((item,index) =>(
    <Card data={item} reference={ref} />
    ))}
   </div>
    
  )
}

export default Fg
