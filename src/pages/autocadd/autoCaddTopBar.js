import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";

const AutoCaddTopBar = () => {
      const router = useRouter();
    return (
        <div className="flex items-center justify-between h-[54px] px-2 sm:px-4 border-b border-gray-800 ">
            {/* Left section */}
            <div className="flex items-center gap-1 sm:gap-2">
                {/* Logo */}
                <div className="w-[52px] h-[54px] flex items-center justify-center"onClick={() => router.push('/')}>
                    <img
                        src="/assets/images/vindico.png"
                        alt="Logo"
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Back to Home */}
                <span className="text-sm text-white opacity-60 hover:opacity-100 cursor-pointer "onClick={() => router.push('/')}>
                    Back to Home
                </span>

                {/* Hamburger Menu */}
                <button className="ml-1 p-2 hover:bg-[#1A1D1E] rounded-md">
                    <img
                        src="/assets/images/three-dots.png"
                        alt="Menu"
                        className="w-5 h-5"
                    />
                </button>
            </div>

        <div className="flex items-center gap-4 px-6 py-4 ">
  {/* Tabs Container */}
  <div className="flex items-center gap-[50px]">
    <div className="flex items-center text-sm text-gray-400 hover:text-white px-20 py-[6px] cursor-pointer">
      RW 123
      <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div className="px-3 py-[6px] text-sm text-white rounded-t">Draft 2025 Jho...</div>
    <div className="px-3 py-[6px] text-sm text-white">RW 325</div>
    <div className="px-3 py-[6px] text-sm text-white">RW 325</div>
  </div>

  {/* Management Button */}
  <Button
    variant="ghost"
    className="bg-[#1E2124] hover:bg-[#25282C] text-gray-300 rounded-lg px-3 py-2 h-8 flex items-center gap-2"onClick={() => router.push('/managements')}
  >
    <img src="/assets/images/settings-image.png" alt="Management icon" className="w-4 h-4" />
    <span className="text-sm">Management</span>
  </Button>

  {/* Profile Avatar */}
  <div className="w-7 h-7 overflow-hidden">
    <img
      src="/assets/images/7a0a698c-47b2-4d6f-990d-53af8220bed0.png"
      alt="User avatar"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dropdown Icon */}
  <button className="p-1 text-gray-400 hover:text-white">
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>


        </div>
    );
};

export default AutoCaddTopBar;
