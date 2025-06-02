import react from 'react'

export default function Navbar()
{
    return(
        <>
        {/* <!-- Navbar --> */}
        <div className="w-full h-35">
            {/* <!-- First Navbar --> */}
             <div className="h-18 w-full px-48 flex items-center justify-between" id="First_Navbar">
                {/* <!-- First Left Logo --> */}
                 <div className="h-10 w-40 flex items-center">
                    <img src='./Logo.svg    ' alt="" height="auto" width="100%" />
                 </div>
                 {/* <!-- First Right Content --> */}
                <div className="h-15 w-110 flex items-center justify-between">
                    {/* <!-- Search Bar --> */}
                    <div className="w-70 h-10 p-[10px] rounded flex items-center justify-between" id="searchbar">
                        <div className="mr-[10px]"><img src="iconoir--search.svg" alt="" /></div>
                        <div className="w-full"><input type="text" placeholder="Searc by products"  id="search_input"  className="w-full inputt text-xs" /></div>
                        <div className="ml-[10px]" ><img src="./Icon/oui--cross (1).svg" style={{visibility: "hidden", opacity: 0}} alt="" id="search_cross" /></div>
                    </div>
                    {/* <!-- Line --> */}
                    <div className="h-6 w-[1px] rounded Line"></div>
                    {/* <!-- Login --> */}
                     <a href="" className="text-xs">LOGIN</a>
                    {/* <!-- Like --> */}
                    <div><img src="Wishlist.svg" alt="" /></div>
                     {/* <!-- Add To Cart --> */}
                    <div><a href="http://127.0.0.1:5500/Project/Full%20E-Coomerce/add_to_cart.html"><img src="add_to_cart.svg" alt="" /></a></div>
                </div>
             </div>
            {/* <!-- Second Navbar --> */}
            <div className="h-17 flex items-center" id="Second_Navbar">
                <ul className="flex items-center w-full">
                    <li className="ml-[30px] cursor-pointer">All</li>
                    <li className="ml-[30px]" >Men</li>
                    <li className="ml-[30px]" >Women</li>
                    <li className="ml-[30px]" >Children</li>
                    <li className="ml-[30px]" >Add To Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}