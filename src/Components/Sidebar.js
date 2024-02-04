

const Sidebar = () => {
    return(
        <div className="h-[700px] w-[320px] bg-violet-50">
            <h1 className="mt-4 ml-4">WSTF FRONT-END HACKATHON</h1>
            <div className="h-[200px] w-[300px] mt-[58px]">
                <div className="flex ml-4">
                    <h1 className="font-bold">All users</h1>
                    <h6 className="font-normal text-xs ml-3 mt-4">DETAIL</h6>
                    <img 
                    className="h-[10px] w-[10px] mt-6 ml-2"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3jo54FiD2WcoG4k0iFCVLBzH2jex0cQfUUybKr4h1A&s'
                    alt=""
                    />
                </div>
                <div className="mt-2">
                    <p className="ml-5 font-hairline text-3xl">2,431,340</p>
                </div>
            </div>
            <div className="h-[160px] w-[80px] mt-[-68px]">
                <div className="flex ml-4">
                    <img 
                    className="h-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/5501/5501360.png"
                    alt="revenue-icon"
                    />
                    <div className="ml-10 h-[40px]">
                        <p className="font-smaller mt-[-2px] ml-7">Total_Earning</p>
                        <p className="font-bold mt-[-1px] ml-7 mt-2">540549</p>
                    </div>
                </div>
                <div className="flex ml-4 mt-5">
                    <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/s/a/sales_target_achievement_monotone_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg"
                    className="h-[40px]"
                    alt="sale-icon"
                    />
                    <div className="ml-4 h-[40px]">
                        <p className="font-smaller mt-[-2px] ml-7">Sales</p>
                        <p className="font-bold mt-[-1px] ml-7 mt-2">1,205,677</p>
                    </div>
                </div>
                <div className="flex ml-4 mt-5">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/purchase-12-918095.png"
                    className="h-[40px]"
                    alt="purchase-icon"
                    />
                    <div className="ml-10 h-[40px]">
                        <p className="font-smaller mt-[-2px] ml-7">Purchase</p>
                        <p className="font-bold mt-[-1px] ml-7 mt-2">48,430,039</p>
                    </div>
                </div>
            </div>

            <div className="h-[80px] w-[260px] mt-[60px]">
                <div className="flex ml-3">
                    <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxj5FvYjvWyIqUsvpmVwTFI5D5hSQV4Eg2w&usqp=CAU'
                    className="h-[80px] w-[80px]"
                    alt=''
                    />
                    <div className="mt-3 ml-3">
                        <p className="font-small text-smaller ml-5">92,980</p>
                        <p className="font-small text-smaller ml-5">Active users</p>
                    </div>
                </div>
                <div className="flex ml-3">
                    <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxj5FvYjvWyIqUsvpmVwTFI5D5hSQV4Eg2w&usqp=CAU'
                    className="h-[80px] w-[80px]"
                    alt=''
                    />
                    <div className="mt-3 ml-3">
                        <p className="font-small text-smaller ml-5">22,652</p>
                        <p className="font-small text-smaller ml-5">New users</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Sidebar;