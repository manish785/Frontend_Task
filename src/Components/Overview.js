import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const Overview = () => {
    return(
        <div className="flex mt-[-200px]">
            <Sidebar/>
            <Main/>
            <div className="h-[100px] w-full ml-[14px] mt-[620px] absolute bg-white">
              <Footer/>
            </div>
        </div>
    )
};


export default Overview;