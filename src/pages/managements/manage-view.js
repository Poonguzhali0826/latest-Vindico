import React, { useState } from "react";
import { Plus, Search, Eye, Trash, Edit } from "lucide-react";
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';
import ProjectModal from '../../components/ModalPopup/ProjectModal';
import DrawerModal from '../../components/ModalPopup/DrawerModal';
import StatusBadge from './status-badge'
import ManageImages from "./manage-images";
import ManagementBaseData from "./manage-base-data";
const allProjects = [
    {
        id: 1,
        name: "Modern style for houses",
        image: "assets/images/frame1.png",
        documentType: "MEP",
        addedDate: "10-14-2024",
        country: "UAE",
        state: "Al Ain",
        city: "Fujairah",
        brand: "Brand",
        description: "Envision a grand library with soaring ceilings and intricate woodwork, where natural light floods in through stained...",
        status: "Trained",
        isKnowledgeData: true
    },
    {
        id: 2,
        name: "Good practices in architecture",
        image: "assets/images/frame2.png",
        documentType: "Architecture",
        addedDate: "06-07-2025",
        country: "UAE",
        state: "Umm Al-Quwain",
        city: "Umm Al-Quwain",
        brand: "Brand",
        description: "Visualize a sleek, modern bridge that spans a river, featuring innovative lighting that changes colors at night...",
        status: "In Progress",
        isKnowledgeData: true
    },
    {
        id: 3,
        name: "Chic aesthetics for living spaces",
        image: "assets/images/frame3.png",
        documentType: "Design Guideline",
        addedDate: "11-05-2023",
        country: "UAE",
        state: "Abu Dhabi",
        city: "Al Ain",
        brand: "Brand",
        description: "Visualize a cozy, modern cabin nestled in the woods, with large windows that bring the outside in. The warm wood...",
        status: "Disabled",
        isKnowledgeData: true

    },
    {
        id: 4,
        name: "Effective techniques in structural planning",
        image: "assets/images/frame4.png",
        documentType: "Architecture",
        addedDate: "12-18-2023",
        country: "UAE",
        state: "Ajman",
        city: "Ras Al Khaimah",
        brand: "Brand",
        description: "Picture a futuristic cityscape at dusk, where skyscrapers with green terraces and solar panels tower over bustling...",
        status: "Trained",
        isKnowledgeData: true

    },
    {
        id: 5,
        name: "Innovative layouts for homes",
        image: "assets/images/frame5.png",
        documentType: "Design Guideline",
        addedDate: "09-30-2025",
        country: "UAE",
        state: "Dubai",
        city: "Sharjah",
        brand: "Brand",
        description: "Imagine a stunning architectural design featuring a sleek glass facade that reflects the surrounding skyline. The b...",
        status: "Trained",
        isKnowledgeData: true
    },
    {
        id: 6,
        name: "Innovative strategies in building design",
        image: "assets/images/frame3.png",
        documentType: "Architecture",
        addedDate: "07-22-2024",
        country: "UAE",
        state: "Sharjah",
        city: "Abu Dhabi",
        brand: "Brand",
        description: "Imagine a vibrant community center designed with colorful murals and open spaces, fostering gatherings and...",
        status: "Trained",
        isKnowledgeData: true
    },
    {
        id: 7,
        name: "Stylish themes for dwellings",
        image: "assets/images/frame2.png",
        documentType: "Design Guideline",
        addedDate: "03-11-2024",
        country: "UAE",
        state: "Ras Al Khaimah",
        city: "Ajman",
        brand: "Brand",
        description: "Envision a charming village square surrounded by quaint shops and cafes, with cobblestone paths and lush green...",
        status: "Trained",
        isKnowledgeData: true
    },
    {
        id: 8,
        name: "Contemporary design for residences",
        image: "assets/images/frame4.png",
        documentType: "MEP",
        addedDate: "01-15-2026",
        country: "UAE",
        state: "Fujairah",
        city: "Dubai",
        brand: "Brand",
        description: "Picture a luxurious hotel with an infinity pool overlooking the ocean, where guests can relax in style while enjoyin...",
        status: "Trained",
        isKnowledgeData: true
    }
];
const columns = [
    "Project Name",
    "Document Type",
    "Added Date",
    "Country",
    "State",
    "City",
    "Brand",
    "Description",
    "Status",
    "Actions"
];

const ManagementView = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
    const [projects, setProjects] = useState(allProjects);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const itemsPerPage = 10;
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerModalOpen, setDrawerModalOpen] = useState(false);
    const displayedProjects = activeTab === "all"
        ? projects
        : projects.filter(project => project.isKnowledgeData);
    const [showManageImages, setShowManageImages] = useState(false);
    return (
        <div className="min-h-screen text-white bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,rgba(15,18,23,0)_25%)] ">
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="/assets/images/vindico-logo.png"
                            alt="Logo"
                            className="h-[40px] w-[70px]"
                        />
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
                                className="w-8 h-8 bg-orange-300 rounded-full overflow-hidden cursor-pointer">
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
                {!showManageImages ? (
                    <>
                        <div className="px-6 py-3">
                            <h1 className="text-lg font-bold">Management View</h1>
                        </div>
                        <div className="rounded-lg shadow-lg mx-4 min-h-[600px]">
                            {/* Tabs and export Button */}
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
                                        Manage Projects
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("baseData")}
                                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === "baseData"
                                            ? "bg-[#3A4048] text-white"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        Manage Base Data
                                    </button>
                                </div>
                                {/* EXPORT/Button */}
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    {activeTab === "all" && (
                                        <button className="bg-[#3A4048] text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto text-center" onClick={() => setShowManageImages(true)}>
                                            Management Images
                                        </button>
                                    )}

                                    <button className="flex items-center gap-2 bg-[#3A4048] text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto text-center">
                                        <img src="assets/images/document-download.png" alt="export icon" className="w-4 h-4" />
                                        <span>Export</span>
                                    </button>
                                </div>
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
                                />
                                <div className="w-full sm:w-auto" onClick={() => { setModalOpen(true) }}>
                                    <button className="bg-[#768FB5] text-white w-full sm:w-auto px-4 py-2 rounded-md text-sm flex justify-center sm:justify-start items-center gap-2">
                                        <Plus size={18} />
                                        <span>Add New</span>
                                    </button>

                                </div>
                            </div>

                            <div className="flex flex-col bg-[#25272c]  rounded overflow-hidden" style={{ height: '650px' }}>
                                {activeTab === "all" ? (

                                    <div className="flex flex-col bg-[#25272c] rounded overflow-hidden" style={{ height: '650px' }}>
                                        {/* Table with scrollable tbody */}
                                        <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: '660px' }}>
                                            <table className="min-w-full table-fixed">
                                                <thead className="sticky top-0 bg-[#25272c] z-10">
                                                    <tr className="border-b border-slate-700/50">
                                                        {columns.map((column, index) => (
                                                            <th key={index} className="text-left p-4 text-sm font-medium text-slate-300 bg-slate-800/30">
                                                                <div className="flex items-center gap-2">
                                                                    {column}
                                                                    <span className="text-slate-500">⋯</span>
                                                                </div>
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {projects.map((project, index) => (
                                                        <tr
                                                            key={project.id}
                                                            className={`border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors ${index % 2 === 0 ? 'bg-slate-900/30' : ''}`}
                                                        >
                                                            <td className="p-4">
                                                                <div className="flex items-center gap-3">
                                                                    {project.image ? (
                                                                        <img
                                                                            src={project.image}
                                                                            alt={project.name}
                                                                            className="w-10 h-10 rounded-md object-cover bg-slate-700"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-10 h-10 rounded-md bg-slate-700 flex items-center justify-center">
                                                                            <span className="text-slate-400 text-xs">📄</span>
                                                                        </div>
                                                                    )}
                                                                    <span className="text-slate-200 text-sm font-medium">{project.name}</span>
                                                                </div>
                                                            </td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.documentType}</td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.addedDate}</td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.country}</td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.state}</td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.city}</td>
                                                            <td className="p-4 text-slate-300 text-sm">{project.brand}</td>
                                                            <td className="p-4 text-slate-300 text-sm max-w-md">
                                                                <p className="truncate">{project.description}</p>
                                                            </td>
                                                            <td className="p-4">
                                                                <StatusBadge status={project.status} />
                                                            </td>
                                                            <td className="p-4">
                                                                <div className="flex items-center gap-2 justify-end">
                                                                    <button className="text-gray-400 hover:text-gray-200">
                                                                        <Trash size={18} />
                                                                    </button>
                                                                    <button className="text-gray-400 hover:text-gray-200">
                                                                        <Edit size={18} />
                                                                    </button>
                                                                    <button className="text-gray-400 hover:text-gray-200"onClick={() => setDrawerModalOpen(true)} >
                                                                        <Eye size={18} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <DrawerModal
                                            open={drawerModalOpen}
                                            onOpenChange={(isOpen) => setDrawerModalOpen(isOpen)}
                                        />
                                        </div>
                                        
                                    </div>

                                ) : (
                                    <div className="h-[630px] overflow-y-auto flex-grow scrollbar-custom">
                                        <ManagementBaseData /> 
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
                    </>
                ) : (

                    <ManageImages onClose={() => setShowManageImages(false)} />
                )}
            </div>
        </div>
    );
};
export default ManagementView;