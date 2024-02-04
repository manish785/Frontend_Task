

const Footer = () => {
    return(
        <div className="mt-[7px] h-[80px] bg-white-800 border">
            <div className="ml-2">
                <p>Sales Figures</p>
                <p className="font-bold">$10,430</p>
            </div>
            <div className="ml-40">
            <div className="line h-0.5 w-full bg-slate-800 flex justify-between">
                <div></div>
                {Array.from({ length: 50 }, (_, index) => (
                    <div key={index} className="bg-gray-100 h-[4px] w-[2px]"></div>
                ))}
            </div>
            </div>
        </div>
    )
};


export default Footer;