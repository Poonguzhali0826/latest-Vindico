import AutoCaddMainContent from "./autoCaddMainContent";
import AutoCaddRightSidebar from "./autoCaddRightBar";
import AutoCaddTopBar from "./autoCaddTopBar";
import AutoCaddLeftSidebar from"./autoCaddLeftBar";

const AutoCaddLayout = () => {
    return (
        <div className="h-screen overflow-hidden relative flex flex-col">
            {/* Top Navigation Bar */}
            <div className="w-full h-[54px]">
                <AutoCaddTopBar />
            </div>

            <div className="flex flex-1 mt-[32px] px-[32px] gap-[32px] overflow-hidden pr-[439px]">
                {/* Sidebar */}
                <div className="w-[407px]  bg-[#121417] rounded-[24px] p-[24px] overflow-hidden">
                    <AutoCaddLeftSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-[24px] overflow-hidden">
                    <AutoCaddMainContent />
                </div>
                <div className="fixed right-[32px] w-[407px] z-50">
                    <AutoCaddRightSidebar />
                </div>
            </div>

            {/* Right Sidebar - moved OUTSIDE the overflow-hidden div */}

        </div>
    );
};
export default AutoCaddLayout;

