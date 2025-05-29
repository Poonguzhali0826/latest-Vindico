import React, { useState } from "react";
import {
    Search,
    Edit,
    Star,
    Play,
    ThumbsUp,
    ThumbsDown,
    Trash2,
} from "lucide-react";

const AutoCaddRightSidebar = () => {
    const [activeTab, setActiveTab] = useState("ai");
    const suggestions = [
        { id: 17, title: "Improve Airflow", date: "5 Days Ago", liked: true, disliked: false },
        { id: 18, title: "Improve Airflow", date: "5 Days Ago", liked: false, disliked: true },
        { id: 19, title: "Improve Airflow", date: "5 Days Ago", liked: true, disliked: false },
    ];

    return (
        <div
            className="absolute bg-[#0E1015] text-gray-300 rounded-2xl "
            style={{
                width: "407px",
                left: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div className="flex flex-col h-full bg-[#151A21] rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="w-full">
                    {/* Tab Buttons */}
                    <div className="flex justify-center gap-20 px-4 py-3">
                        <button
                            onClick={() => setActiveTab("ai")}
                            className={`text-sm font-medium px-5 rounded ${activeTab === "ai"
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                            style={{
                                backgroundColor: activeTab === "ai" ? "#363A3E" : "transparent",
                            }}
                        >
                            AI Suggestions
                        </button>
                        <button
                            onClick={() => setActiveTab("history")}
                            className={`text-sm font-medium py-3 px-5 rounded ${activeTab === "history"
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                            style={{
                                backgroundColor: activeTab === "history"
                                    ? "#363A3E"
                                    : "transparent",
                            }}
                        >
                            History
                        </button>
                    </div>

                    {/* Search Bar Below Tabs */}
                    <div className="flex flex-col h-full max-h-screen">
                        <div className="flex items-center w-full px-4 gap-2">
                            {/* Search Input */}
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    className="bg-[#25292E] rounded-md w-full pr-10 pl-4 py-3 text-sm text-gray-300 border border-[#363A3E] focus:outline-none focus:ring-1 focus:ring-white"
                                />
                            </div>

                            {/* Filter Icon Button */}
                            <button className="p-3">
                                <img src="/assets/images/filter.png" alt="Filter" className="h-10 w-12" />
                            </button>
                        </div>

                        <div className="border-b border-gray-700 mt-2"></div>

                        {/* Tab Content */}
                        <div className="p-2 flex flex-col justify-between h-full">
                            {activeTab === "ai" && (
                                <>
                                    <div className="flex-grow overflow-y-auto px-4 space-y-4">
                                        {suggestions.map((item) => (
                                            <div key={item.id} className="p-4 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex justify-between items-center w-full">
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src="/assets/images/star1.png"
                                                                alt="Icon"
                                                                className="h-5 w-5"
                                                            />
                                                        </div>
                                                        <span className="text-xs text-gray-500">#{item.id}</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <div className="text-white">{item.title}</div>
                                                    <span className="text-xs text-gray-500">{item.date}</span>
                                                </div>

                                                <p className="text-xs text-gray-400">
                                                    Figma ipsum component variant main layer. Italic horizontal selection edit device inspect community font.
                                                </p>

                                                <div className="flex items-center justify-between text-gray-500 w-[327px] h-[36px]">
                                                    <img
                                                        src="/assets/images/star2.png"
                                                        alt="Icon"
                                                        className="h-8 w-8"
                                                    />
                                                    <div className="flex items-center gap-2">
                                                        <img
                                                            src="/assets/images/tham1.png"
                                                            alt="Icon"
                                                            className="h-8 w-8"
                                                        />
                                                        <img
                                                            src="/assets/images/tham2.png"
                                                            alt="Icon"
                                                            className="h-8 w-8"
                                                        />
                                                        <img
                                                            src="/assets/images/tham3.png"
                                                            alt="Icon"
                                                            className="h-8 w-8"
                                                        />
                                                        <img
                                                            src="/assets/images/tham4.png"
                                                            alt="Icon"
                                                            className="h-8 w-8"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="px-4 pt-[100px] pb-4">
                                        <button className="w-full bg-gradient-to-r from-[#D2691E] to-[#FF8C00] text-white text-sm py-3 rounded-full flex justify-center items-center gap-2 shadow-lg hover:opacity-90 transition">
                                            <img
                                                src="/assets/images/star-white.png"
                                                alt="Icon"
                                                className="h-6 w-6"
                                            />
                                            Run Liked Suggestions
                                        </button>
                                    </div>


                                </>
                            )}
                            {activeTab === "history" && (
                                <div className="text-gray-400 px-4 py-2">No history available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoCaddRightSidebar;
