import React from "react"

const NotFound = () => {

    return(
        <>
         <section className="pt-[135px] pb-[156px]">
            <div className="container">
                <div className="pb-[140px]">
                    <p className="font-poppin font-normal text-[14px] leading-[21px] text-black flex gap-4"><a href="" className="text-[#000000]">Home</a>
                     <span>/</span>
                     <span>404Error</span>
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="text-[110px] leading-[115px] font-inter font-medium text-black pb-10">404 Not Found</h2>
                    <p className="text-4 leading-6 font-poppin font-normal text-black pb-[96px]">Your visited page not found. You may go home page.</p>
                    <a href="" className="text-4 leading-6 font-poppin font-normal text-[#FAFAFA] bg-[#DB4444] py-4 px-[48px]">Back to home page</a>
                </div>
            </div>
         </section>
        </>
    )
}

export default NotFound