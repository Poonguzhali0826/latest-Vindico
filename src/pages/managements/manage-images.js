import React, { useState } from "react";
import { ArrowLeft, Plus, Search, Eye, Trash, Heart } from "lucide-react";
import { useRouter } from 'next/router';
import ProjectModal from '../../components/ModalPopup/ProjectModal';
import ArchitecturePortfolio from "../projects/architecture-portfolio";




const ManageImages = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
   
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const itemsPerPage = 10;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("New Project");
    
    const [showAllImages, setShowAllImages] = useState(true);

    return (
        <div className="text-white ">
            

            {/* Main content */}
            <div className="mx-2">
                {/* Return link */}
                {/* <div className=" flex flex-center gap-2 py-4 pl-[1rem] pr-6 cursor-pointer" onClick={() => router.push('/')} >
                    <img
                        src="/assets/images/undo.png"
                        alt="User Avatar"
                        className=""
                    />
                    <span className="text-sm pt-1">Return</span>
                </div> */}

                {/* Page title */}
                <div className="px-6 py-3 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Management Images</h1>
                    <div className="flex ">
                        <button className={`p-2 rounded ${!showAllImages ? "bg-[#3A4048] rounded-lg" : ""}`} onClick={() => {
                                    setShowAllImages(false);
                                    console.log("clicked table view");
                                }}>
                            <img src="/assets/images/document.png" alt="tabMenu" className="w-6 h-6 object-cover" />
                        </button>
                        <button className={`p-2 rounded ${showAllImages ? "bg-[#3A4048] rounded-lg" : ""}`} onClick={() => {
                                    setShowAllImages(true);
                                    console.log("clicked portfolio view");
                                }} >
                            <span className="sr-only">Grid View</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" />
                                <rect x="11" y="1" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" />
                                <rect x="1" y="11" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" />
                                <rect x="11" y="11" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg mx-4 min-h-[600px]">
                    {/* Tabs and Sort Button */}
                    <div className="bg-[#374151]/40 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-6 py-4">
                        {/* Tabs */}
                        <div className="inline-flex bg-[#25272c] rounded-md overflow-hidden self-start">
                            <button
                                onClick={() => setActiveTab("all")}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "all"
                                    ? "bg-[#3A4048] text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                All Images
                            </button>
                            <button
                                onClick={() => router.push('/managements/saved-images')}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "SavedImage"
                                    ? "bg-[#3A4048] text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                               Saved Images
                            </button>
                        </div>

                        {/* Sort Dropdown/Button */}
                        <button className="bg-[#3A4048] text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto text-center">
                            Sort by: Last Modified <span className="ml-1">▾</span>
                        </button>
                    </div>

                    {/* Search and Add Button */}
                    <div className="bg-[#374151]/40 px-6 pb-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search in all Columns"
                                className="bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <ProjectModal
                            open={modalOpen}
                            onOpenChange={(isOpen) => setModalOpen(isOpen)}
                            title={modalTitle}
                        />
                        <div className="w-full sm:w-auto" onClick={() => { setModalOpen(true) }}>
                            <button className="bg-[#768FB5] text-white w-full sm:w-auto px-4 py-2 rounded-md text-sm flex justify-center sm:justify-start items-center gap-2">
                                <Plus size={18} />
                                <span>Add New Project</span>
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-col bg-[#25272c]  rounded overflow-hidden" style={{ height: '630px' }}>
                        {showAllImages && (
                           <div className="h-[630px] overflow-y-auto flex-grow scrollbar-custom">
                                   <ArchitecturePortfolio />
                                </div>
                        ) }


                        {/* Pagination with top border */}
                        <div className="border-t border-gray-700 bg-[#25272c] px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                            {/* Pagination summary */}
                            {/* <div className="text-gray-400">
                                Showing 1-{Math.min(itemsPerPage, displayedProjects.length)} of {displayedProjects.length}
                            </div> */}

                            {/* Pagination controls */}
                            <div className="flex flex-wrap items-center">
                                <button className="w-8 h-8 flex items-center justify-center  border border-gray-700 text-gray-400 hover:bg-gray-700">
                                    &lt;
                                </button>
                                {[1, 2, 3].map((page) => (
                                    <button
                                        key={page}
                                        className={`w-8 h-8 flex items-center justify-center  border ${currentPage === page
                                            ? "bg-gray-700 text-white border-gray-700"
                                            : "border-gray-700 text-gray-400 hover:bg-gray-800"
                                            }`}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <span className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400">
                                    ...
                                </span>
                                <button className="w-10 h-8 flex items-center justify-center  border border-gray-700 text-gray-400 hover:bg-gray-800">
                                    100
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center  border border-gray-700 text-gray-400 hover:bg-gray-700">
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageImages;