
import React from "react";

const AutoCaddLeftSidebar = () => {
    return (
        <div
            className="absolute"
            style={{
                width: "425px",
                top: "150px",
                 bottom: "20px",
                left: "20px",
                padding :"20px",
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(9.9px)",
                WebkitBackdropFilter: "blur(9.9px)",
                border: "1px solid rgba(146, 79, 255, 0.35)",
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                color: "#fff",
                boxSizing: "border-box",
            }}
        >
           {/* Top Icon Buttons */}
<div className="absolute -top-10 left-0 right-0 flex items-center justify-between px-3 z-20">
    {/* Left Side - Delete Icon */}
    <div>
        <button className="w-6 h-6">
            <img
                src="/assets/images/delete.png"
                alt="Delete"
                className="w-full h-full object-contain"
            />
        </button>
    </div>

    {/* Right Side - Bookmark and Favorite */}
    <div className="flex items-center gap-3">
        <button className="w-6 h-6">
            <img
                src="/assets/images/edit-auto.png"
                alt="Bookmark"
                className="w-full h-full object-contain"
            />
        </button>

        <button className="flex items-center gap-1 px-3 py-1 bg-[#1E1F22] rounded-full text-white text-xs">
            <img
                src="/assets/images/heart.png"
                alt="Favorite"
                className="w-4 h-4"
            />
            Favorite
        </button>
    </div>
</div>


            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm text-white">AI Chatbot</h2>
                <img
                    src="/assets/images/sidebar-top.png"
                    alt="Top Icon"
                    className="w-4 h-4 opacity-60 hover:opacity-100 cursor-pointer"
                />
            </div>

            {/* Scrollable chat area */}
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    paddingRight: "8px",
                }}
                className="custom-scrollbar"
            >
                {/* Messages stack */}
                <div className="space-y-4">
                    <div className="self-start max-w-[280px] bg-[#2B2E32] text-gray-300 text-sm px-4 py-2 rounded-[12px]">
                        How can I help you?
                    </div>
                    <div className="flex justify-end">
                        <div className="w-fit max-w-[80%] bg-[#103B53] text-white text-sm px-4 py-2 rounded-[12px]">
                            Figma ipsum component variant main layer. Layer flatten.
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed message input at the bottom */}
            <div
                style={{
                    width: "100%",
                    borderRadius: "24px",
                    backgroundColor: "#1E1F22",
                    padding: "16px",
                    marginTop: "16px",
                }}
            >
                <div className="text-sm leading-relaxed text-gray-300">
                    Figma ipsum component variant main layer. Align ellipse scrolling layout
                    vector layout bold comment component selection. Figma main hand scale
                    create style rectangle select. Pixel stroke rotate clip image.
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                        <img
                            src="/assets/images/attach-square.png"
                            alt="Attach"
                            className="w-4 h-4"
                        />
                        <span>Attach files</span>
                    </button>
                    <button>
                        <img
                            src="/assets/images/Send_button.png"
                            alt="Send"
                            className="w-8 h-8"
                        />
                    </button>
                </div>
            </div>

            {/* Footer image buttons */}
            <div className="flex items-center gap-3 mt-5">
                <button className="w-[168px] h-[35px]">
                    <img
                        src="/assets/images/ai-design critique.png"
                        alt="AI design critique"
                        className="w-full h-full object-contain"
                    />
                </button>
                <button className="w-[154px] h-[37px]">
                    <img
                        src="/assets/images/hifirender.png"
                        alt="High-fi Render"
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>
        </div>
    );
};

export default AutoCaddLeftSidebar;
