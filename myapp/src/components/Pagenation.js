import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagenation = () =>{
    const {page,totalPages,handlePageChange} = useContext(AppContext);
    function prevHandler(){
        handlePageChange(page-1);
    }
    function nextHandler(){
        handlePageChange(page+1)
    }
    return(
        <footer className="w-[100%] h-[50px] font-bold text-2xl
                flex justify-evenly items-center border bottom-0 fixed bg-white">
            <div className="flex gap-5">
                {
                    page >1 &&
                    (<button className="w-[130px] h-[40px] border-[3px] font-bold rounded-[10px]" onClick={prevHandler}>Previous</button>)
                }
                {
                    page < totalPages &&
                    (<button className="w-[100px] h-[40px] border-[3px] font-bold rounded-[10px]" onClick={nextHandler}>Next</button>)
                }
            </div>
            <div className="flex gap-5">
                <p>Page {page} of {totalPages}</p>
            </div>
        </footer>
    )
}

export default Pagenation;