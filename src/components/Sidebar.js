import React from "react";
import { Search, Edit } from "lucide-react";
 
// interface ChatItem {
//   id: string;
//   date: string;
//   title: string;
//   avatars: string[];
//   unread?: boolean;
// }
 
const Sidebar = () => {
  const chats= [
    {
      id: "1",
      date: "MAY 5, 2025",
      title: "Consectetur Adipiscing Elit",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png", "/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "2",
      date: "MAY 4, 2025",
      title: "Lorem Ipsum Dolor Sit Amet",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png", "/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png", "/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "3",
      date: "MAY 4, 2025",
      title: "Et Dolore Magna Aliqua",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "4",
      date: "MAY 3, 2025",
      title: "Ut Enim Ad Minim Veniam",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png", "/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "5",
      date: "APRIL 29, 2025",
      title: "Incididunt Ut Labore",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "6",
      date: "APRIL 27, 2025",
      title: "Quis Nostrud Exercitation",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "7",
      date: "APRIL 11, 2025",
      title: "Sed Do Eiusmod Tempor",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    },
    {
      id: "8",
      date: "APRIL 4, 2025",
      title: "Ullamco Laboris Nisi",
      avatars: ["/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"]
    }
  ];
 
  return (
    <div
      className="absolute bg-[#0E1015] text-gray-300 rounded-2xl p-3"
      style={{
        width: "407px",
        height: "964px",
        top: "86px",
        left: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div className="bg-[#151A21] rounded-2xl h-full flex flex-col">
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-200">Last chats</h2>
 
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1"></div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder=""
                className="bg-[#1A1A1A] rounded-full w-9 hover:w-[150px] focus:w-[150px] transition-all duration-300 pl-9 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <button className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#252525]">
              <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
 
        <div className="overflow-y-auto flex-grow px-2 pb-3">
          {chats.map((chat, index) => (
            <React.Fragment key={chat.id}>
              {index === 0 || chats[index - 1].date !== chat.date ? (
                <div className="px-2 pt-3 pb-1 text-xs text-gray-500">{chat.date}</div>
              ) : null}
              <div className="p-2 hover:bg-[#1A1A1A] cursor-pointer rounded-lg group">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-200 truncate">{chat.title}</div>
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-gray-300">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-300">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-300">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex mt-1">
                  <div className="flex -space-x-2">
                    {chat.avatars.map((avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt="User"
                        className="w-5 h-5 rounded-full border border-[#1A1A1A]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default Sidebar;
 