import { Button } from "./ui/button";
import { useRouter } from "next/router";
import Link from 'next/link';

const TopBar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-[54px] px-4 border-b border-gray-800 bg-[#0D1217]">
      <div className="flex items-center gap-3">
        {/* Updated Logo */}
        <div className="w-[52px] h-[54px] flex items-center justify-center">
          <Link href="/" className="">
                    <img
                        src="/assets/images/vindico.png"
                        alt="Logo"
                        className="h-[40px] w-[70px]"
                    />
                </Link>
        </div>

        {/* Updated Hamburger Menu */}
        <button className="p-3 text-white rounded-lg hover:bg-[#1A1D1E]">
          <img
            src="/assets/images//three-dots.png" // hamburger icon
            alt="Menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      <div className="flex items-center gap-3">
        {/* Management Button */}
        <Button
          variant="ghost"
          className="bg-[#1E2124] hover:bg-[#25282C] text-gray-300 rounded-lg px-3 py-2 flex items-center gap-2 h-8" onClick={() => router.push('/managements')}
        >

          <img
            src="/assets/images/settings-image.png" // settings icon
            alt="Management icon"
            className="w-4 h-4"
          />
          <span className="text-sm">Management</span>
        </Button>

        {/* User Profile */}
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img
            src="/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="text-gray-400 hover:text-white p-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
