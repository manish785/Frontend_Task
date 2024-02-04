import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const Body = () => {
    return(
        <div className="flex">
            <Sidebar/>
            <Main/>
            <div className="h-[100px] w-full ml-[14px] mt-[620px] absolute bg-white">
              <Footer/>
            </div>
        </div>
    )
};


export default Body;