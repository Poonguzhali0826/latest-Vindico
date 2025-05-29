import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
 
const Layout = () => {
  return (
    <div className="flex flex-col  bg-[#0E1015] text-gray-200 overflow-hidden">
     
      {/* Top Navigation Bar */}
      <div className="w-full h-[54px]">
        <TopBar />
      </div>
 
      {/* Main Section (Sidebar + MainContent) */}
      <div className="flex flex-1 mt-[32px] px-[32px] gap-[32px]">
       
        {/* Sidebar */}
        <div className="w-[407px] h-[964px] flex flex-col justify-between bg-[#121417] rounded-[24px] p-[24px] overflow-y-auto">
          <Sidebar />
        </div>
 
        {/* Main Content */}
        <div className="flex-1 h-[964px] rounded-[24px] border border-[#2C2F34] p-[24px] overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,#25272c_20%)] ">
          <MainContent />
        </div>
 
      </div>
    </div>
  );
};
 
export default Layout;