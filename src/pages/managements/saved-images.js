import React, { useState } from "react";
import { Plus, Search, Eye, Trash, Send } from "lucide-react";
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';
import ProjectModal from '../../components/ModalPopup/ProjectModal';
import Link from 'next/link';
 
 
 
// Project list item component
const savedImagesData = [
    {
        id: 1,
        thumbnail: "/assets/images/frame1.png",
        title: "Modern style for houses",
        lastModified: "10-14-2024",
        created: "10-14-2024",
        prompt:
            "Envision a grand library with soaring ceilings and intricate woodwork, where natural light floods in through stained glass windows, creating a serene atmosphere for readers.",
    },
    {
        id: 2,
        thumbnail: "/assets/images/frame2.png",
        title: "Modern style for houses",
        lastModified: "06-07-2025",
        created: "06-07-2025",
        prompt:
            "Visualize a sleek, modern bridge that spans a river, featuring innovative lighting that changes colors at night, enhancing the beauty of the city.",
    },
    {
        id: 3,
        thumbnail: "/assets/images/frame3.png",
        title: "Modern style for houses",
        lastModified: "11-05-2023",
        created: "11-05-2023",
        prompt:
            "Visualize a cozy, modern cabin nestled in the woods, with large windows that bring the outside in. The warm wooden tones and minimalist design create a perfect retreat for nature lovers.",
    },
    {
        id: 4,
        thumbnail: "/assets/images/frame4.png",
        title: "Modern style for houses",
        lastModified: "12-18-2023",
        created: "12-18-2023",
        prompt:
            "Picture a futuristic cityscape at dusk, where skyscrapers with green terraces and solar panels tower over bustling streets. The blend of nature and technology showcases a sustainable future.",
    },
    {
        id: 5,
        thumbnail: "/assets/images/frame5.png",
        title: "Modern style for houses",
        lastModified: "09-30-2025",
        created: "09-30-2025",
        prompt:
            "Imagine a stunning architectural design featuring a sleek glass facade that reflects the surrounding skyline. The building's unique shape resembles a wave, creating a dynamic presence in the urban landscape.",
    },
    {
        id: 6,
        thumbnail: "/assets/images/frame1.png",
        title: "Modern style for houses",
        lastModified: "07-22-2024",
        created: "07-22-2024",
        prompt:
            "Imagine a vibrant community center designed with colorful murals and open spaces, fostering creativity and collaboration among residents of all ages.",
    },
    {
        id: 7,
        thumbnail: "/assets/images/frame2.png",
        title: "Modern style for houses",
        lastModified: "03-11-2024",
        created: "03-11-2024",
        prompt:
            "Envision a charming village square surrounded by quaint shops and cafes, with cobblestone paths and lush greenery, inviting visitors to explore.",
    },
    {
        id: 8,
        thumbnail: "/assets/images/frame3.png",
        title: "Modern style for houses",
        lastModified: "01-15-2026",
        created: "01-15-2026",
        prompt:
            "Picture a luxurious hotel with an infinity pool overlooking the ocean, where guests can relax in style while enjoying breathtaking sunset views.",
    },
];
 
const ProjectListItem = ({ row, index }) => {
    const rowBg = index % 2 === 0 ? 'bg-[#25272c]' : 'bg-[#212328]';
    return (
        <tr className={`border-b border-gray-800 ${rowBg}`}>
            <td className="w-[20%] py-2 px-6 text-sm">
                <div className="flex items-center gap-3">
                    <img
                        src={row.thumbnail}
                        alt={row.title}
                        className="w-[66px] h-[30px] object-cover rounded"
                    />
                    <span className="text-gray-300">{row.title}</span>
                </div>
            </td>
            <td className="w-[15%] py-2 pl-4 sm:pl-8 lg:pl-[6rem] pr-6 text-sm text-left text-gray-400">
                {row.lastModified}
            </td>
            <td className="w-[15%] py-2 px-6 text-sm text-center text-gray-400">
                {row.created}
            </td>
            <td className="w-[40%] py-2 px-6 text-sm text-left text-gray-400">
                {row.prompt}
            </td>
            <td className="w-[10%] py-2 px-6 text-sm">
                <div className="flex items-center gap-2 justify-end">
                    <button className="text-gray-400 hover:text-gray-200">
                        <Trash size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-200">
                        <Send size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-200">
                        <Eye size={18} />
                    </button>
                </div>
            </td>
        </tr>
    );
};
const SavedImages = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("New Project");
    const totalItems = savedImagesData.length; // Replace 1000 if you want dynamic count
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
 
    return (
        <div className="min-h-screen text-white bg-[radial-gradient(circle_at_top,rgba(0,174,217,0.5)_0%,rgba(15,18,23,0)_25%)] ">
            {/* Header */}
            <header className="border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="">
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
                <div className="px-6 py-2 flex justify-between items-center">
                    <h1 className="text-lg font-bold">Saved Images</h1>
                </div>
                <div className="rounded-lg shadow-lg mx-4 min-h-[600px]">
                    <div className="bg-[#374151]/40 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-6 py-4">
                        {/* Sort Dropdown/Button */}
                        <div className="flex flex-col gap-3 p-6 w-full">
                            <div className="flex items-center justify-end gap-3 pb-2 w-full">
                                <div className="flex items-center gap-4">
                                    <button className="bg-[#3A4048] flex item-center text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto text-center">
                                        <img
                                            src="/assets/images/document-download.png"
                                            alt="upload"
                                            className="w-4 h-4 mr-2"
                                        /><span className="ml-1">Upload Base Image</span>
                                    </button>
                                    <button className="bg-[#3A4048] flex item-center text-white text-sm px-4 py-2 rounded-md w-full sm:w-auto text-center">
                                        <img
                                            src="/assets/images/document-download.png"
                                            alt="upload"
                                            className="w-4 h-4 mr-2"
                                        /><span className="ml-1">Export</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3 pb-2 w-full">
                                {/* Search and Add Button */}
                                <div className="relative w-full sm:w-auto">
                                    <Search className="absolute left-3 top-3 text-gray-500" placeholder="Search in all columns" size={18} />
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
                                        <span>Add New</span>
                                    </button>
 
                                </div>
                            </div>
                        </div>
 
                    </div>
 
                    <div className="bg-[#374151]/40 px-6 pb-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
 
                        <div className="flex flex-col bg-[#25272c] w-full rounded overflow-hidden" style={{ height: '600px' }}>
                            {/* Table header */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-fixed">
                                    <thead className="bg-[#212328]">
                                        <tr className="border-b border-gray-800">
                                            <th className="w-[20%] text-left py-2 px-6 text-gray-400 font-medium">Image</th>
                                            <th className="w-[15%] text-left py-2 pl-4 sm:pl-8 lg:pl-[6rem] pr-6 text-gray-400 font-medium">Last Modified</th>
                                            <th className="w-[15%] text-center py-2 px-6 text-gray-400 font-medium">Created</th>
                                            <th className="w-[40%] text-left py-2 px-6 text-gray-400 font-medium">Prompt</th>
                                            <th className="w-[10%] text-right py-2 px-6 text-gray-400 font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
 
                            {/* Scrollable table body */}
                            <div className="overflow-y-auto flex-grow">
                                <table className="min-w-full table-fixed">
                                    <tbody>
                                        {savedImagesData.map((row, index) => (
                                            <ProjectListItem
                                                key={row.id}
                                                row={row}
                                                index={index}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
 
                            {/* Pagination with top border */}
                            <div className="border-t border-gray-700 bg-[#25272c] px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                                {/* Pagination summary */}
                                <div className="text-gray-400">
                                    Showing {startItem}–{endItem} of {totalItems}
                                </div>
 
                                {/* Pagination controls */}
                                <div className="flex flex-wrap items-center">
                                    <button
                                        className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-700"
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    >
                                        &lt;
                                    </button>
                                    {[1, 2, 3].map((page) => (
                                        <button
                                            key={page}
                                            className={`w-8 h-8 flex items-center justify-center border ${currentPage === page
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
                                    <button
                                        className="w-10 h-8 flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800"
                                        onClick={() => setCurrentPage(100)}
                                    >
                                        100
                                    </button>
                                    <button
                                        className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-700"
                                        disabled={currentPage === 100}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    );
}
 
export default SavedImages;