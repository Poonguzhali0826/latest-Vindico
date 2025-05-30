import React, { useState } from "react";
import { ArrowLeft, Plus, Search, Eye, Trash, Heart } from "lucide-react";
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';
import ProjectModal from '../../components/ModalPopup/ProjectModal';
import ArchitecturePortfolio from "./architecture-portfolio";
import Link from 'next/link';
 
// Project data
const allProjects = [
    {
        id: 1,
        thumbnail: "/assets/images/frame1.png",
        title: "Modern style for houses",
        lastModified: "10-14-2024",
        created: "10-14-2024",
        isFavorite: false,
    },
    {
        id: 2,
        thumbnail: "/assets/images/frame3.png",
        title: "Modern style for houses",
        lastModified: "08-07-2025",
        created: "08-07-2025",
        isFavorite: true,
    },
    {
        id: 3,
        thumbnail: "/assets/images/frame4.png",
        title: "Chic aesthetics for living spaces",
        lastModified: "11-05-2023",
        created: "11-05-2023",
        isFavorite: true,
    },
    {
        id: 4,
        thumbnail: "/assets/images/frame5.png",
        title: "Modern style for houses",
        lastModified: "12-18-2023",
        created: "12-18-2023",
        isFavorite: true,
    },
    {
        id: 5,
        thumbnail: "/assets/images/frame2.png",
        title: "Innovative layouts for homes",
        lastModified: "09-30-2025",
        created: "09-30-2025",
        isFavorite: false,
    },
    {
        id: 6,
        thumbnail: "/assets/images/frame3.png",
        title: "Modern style for houses",
        lastModified: "07-22-2024",
        created: "07-22-2024",
        isFavorite: false,
    },
    {
        id: 7,
        thumbnail: "/assets/images/frame4.png",
        title: "Stylish themes for dwellings",
        lastModified: "03-11-2024",
        created: "03-11-2024",
        isFavorite: false,
    },
    {
        id: 8,
        thumbnail: "/assets/images/frame5.png",
        title: "Contemporary design for residences",
        lastModified: "01-15-2026",
        created: "01-15-2026",
        isFavorite: false,
    },
];

// Project list item component
const ProjectListItem = ({ project, onToggleFavorite, index }) => {
    // const rowBg = index % 2 === 0 ? 'bg-[#22282c]' : 'bg-[#202226]';
    const rowBg = index % 2 === 0 ? 'bg-[#25272c]' : 'bg-[#212328]';
    return (
        <tr className={`border-b border-gray-800 ${rowBg}`}>
            <td className="w-1/4 py-2 px-6 text-sm">
                <div className="flex items-center gap-3">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-[66px] h-[30px] object-cover rounded"
                    />
                    <span className="text-gray-300">{project.title}</span>
                </div>
            </td>
            <td className="w-1/4 py-2 pl-4 sm:pl-8  lg:pl-[6rem] pr-6 text-sm text-left text-gray-400">
                {project.lastModified}
            </td>
            <td className="w-1/4 py-2 px-6 text-sm text-center text-gray-400">{project.created}</td>
            <td className="w-1/4 py-2 px-6 text-sm">
                <div className="flex items-center gap-2 justify-end">
                    <button className="text-gray-400 hover:text-gray-200">
                        <Trash size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-200">
                        <Eye size={18} />
                    </button>
                    <button
                        onClick={() => onToggleFavorite(project.id)}
                    >
                        <Heart
                            size={18}
                            className={project.isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}
                        />
                    </button>
                </div>
            </td>
        </tr>
    );
};

const ListView = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
    const [projects, setProjects] = useState(allProjects);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const itemsPerPage = 10;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("New Project");


    const toggleFavorite = (id) => {
        setProjects(projects.map(project =>
            project.id === id ? { ...project, isFavorite: !project.isFavorite } : project
        ));
    };

    const displayedProjects = activeTab === "all"
        ? projects
        : projects.filter(project => project.isFavorite);
    const [showTable, setShowTable] = useState(true);

    return (
        <div className="min-h-screen text-white bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,rgba(15,18,23,0)_25%)] ">
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" >
                        <img
                            src="/assets/images/vindico-logo.png"
                            alt="Logo"
                            className="h-[40px] w-[70px]"
                        />
                        </Link>
                        <button className="p-2">
                            <span className="sr-only">Menu</span>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center pr-2 gap-2">
                        <div className="flex items-center pr-2 gap-2">
                            <div
                                role="button"
                                tabIndex={0}
                                className="w-8 h-8 bg-orange-300 rounded-full overflow-hidden cursor-pointer"
                                
                            >
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="User Avatar"
                                    className="w-full h-full object-cover" 
                                />
                            </div>

                            <ChevronDown
                                size={16}
                                className="text-gray-400 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <div className="mx-2">
                {/* Return link */}
                <div className=" flex flex-center gap-2 py-4 pl-[1rem] pr-6 cursor-pointer" onClick={() => router.push('/')} >
                    <img
                        src="/assets/images/undo.png"
                        alt="User Avatar"
                        className=""
                    />
                    <span className="text-sm pt-1">Return</span>
                </div>

                {/* Page title */}
                <div className="px-6 py-3 flex justify-between items-center">
                    <h1 className="text-lg font-bold">All Projects</h1>
                    <div className="flex ">
                        <button className={`p-2 rounded ${showTable ? "bg-[#3A4048] rounded-lg" : ""}`} onClick={() => {
                                    setShowTable(true);
                                    console.log("clicked table view");
                                }}>
                            <img src="/assets/images/document.png" alt="tabMenu" className="w-6 h-6 object-cover" />
                        </button>
                        <button className={`p-2 rounded ${!showTable ? "bg-[#3A4048] rounded-lg" : ""}`} onClick={() => {
                                    setShowTable(false);
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
                                All Projects
                            </button>
                            <button
                                onClick={() => setActiveTab("favorites")}
                                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "favorites"
                                    ? "bg-[#3A4048] text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                My Favorite Projects
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
                        {showTable ? (
                            <>
                                {/* Table header */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full table-fixed">
                                        <thead className="bg-[#212328]">
                                            <tr className="border-b border-gray-800">
                                                <th className="w-1/4 text-left py-2 px-6 text-gray-400 font-medium">
                                                    Project <button className="ml-2">⋮</button>
                                                </th>
                                                <th className="w-1/4 text-left py-2 pl-4 sm:pl-8  lg:pl-[6rem] pr-6 text-gray-400 font-medium">
                                                    Last Modified <button className="ml-2">⋮</button>
                                                </th>
                                                <th className="w-1/4 text-center py-2 px-6 text-gray-400 font-medium">
                                                    Created <button className="ml-2">⋮</button>
                                                </th>
                                                <th className="w-1/4 text-right py-2 px-6 text-gray-400 font-medium">
                                                    Actions <button className="ml-2">⋮</button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                {/* Scrollable table body */}
                                <div className="overflow-y-auto flex-grow">
                                    <table className="min-w-full table-fixed">
                                        <tbody>
                                            {displayedProjects.map((project, index) => (
                                                <ProjectListItem
                                                    key={project.id}
                                                    project={project}
                                                    index={index}
                                                    onToggleFavorite={toggleFavorite}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        ) : (
                                <div className="h-[630px] overflow-y-auto flex-grow scrollbar-custom">
                                    <ArchitecturePortfolio />
                                </div>
                        )}


                        {/* Pagination with top border */}
                        <div className="border-t border-gray-700 bg-[#25272c] px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                            {/* Pagination summary */}
                            <div className="text-gray-400">
                                Showing 1-{Math.min(itemsPerPage, displayedProjects.length)} of {displayedProjects.length}
                            </div>

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

export default ListView;