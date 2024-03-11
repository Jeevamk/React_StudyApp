//icons - react-feather//
import { useEffect, useState } from "react"
import { ChevronLeft,ChevronRight } from "react-feather"

// eslint-disable-next-line react/prop-types
const Carousal = ({ children : CarousalImages , autoSlide = false , autoSlideInterval = 3000}) =>{
 
    const [currSlide , setCurrSlide]=useState(0);

    // eslint-disable-next-line react/prop-types
    const prevSlide = ()=> setCurrSlide((currSlide)=> ( currSlide ===0 ? CarousalImages.length - 1 : currSlide-1))
    // eslint-disable-next-line react/prop-types
    const nextSlide = ()=> setCurrSlide ((currSlide)=> (currSlide === CarousalImages.length - 1 ? 0 : currSlide + 1))

   useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(nextSlide,autoSlideInterval)
    return ()=>clearInterval(slideInterval)
   })

    return(
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${currSlide * 100}%)`}}>
                {CarousalImages}
                
            </div>
            <div className="absolute inset-0 items-center flex justify-between p-4">
                <button onClick={prevSlide} className="rounded-full p-1 shadow bg-white/80 text-gray-800 hover:bg-white">
                      <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="rounded-full p-1 shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight />

                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2 ">
                    {CarousalImages.map((s,i)=> (
                    <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${currSlide===i? "p-0.5": "bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousal