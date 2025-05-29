import React, { useState } from "react";
import { Plus, Search, Eye, Trash, Edit, Filter } from "lucide-react";
import { useRouter } from 'next/router';
import BaseDrawerModel from "@/components/ModalPopup/BaseDrawerModel";

const allProjects = [
    {
        id: 1,
        name: "BD-123",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 1",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Liam (Emp-456)",
        UploadedOn: "10-14-2024",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 1"
    },
    {
        id: 2,
        name: "BD-124",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 2",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Isabella (Emp-369)",
        UploadedOn: "06-07-2025",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 2"
    },
    {
        id: 3,
        name: "BD-125",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 3",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Olivia (Emp-654)",
        UploadedOn: "11-05-2023",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 3"
    },
    {
        id: 4,
        name: "BD-126",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 4",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Ava (Emp-987)",
        UploadedOn: "12-18-2023",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 1"
    },
    {
        id: 5,
        name: "BD-127",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 5",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Mason (Emp-246)",
        UploadedOn: "09-30-2025",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 2"
    },
    {
        id: 6,
        name: "BD-128",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 6",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Emma (Emp-789)",
        UploadedOn: "07-22-2024",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 4"
    },
    {
        id: 7,
        name: "BD-129",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 7",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Noah (Emp-321)",
        UploadedOn: "03-11-2024",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 1"
    },
    {
        id: 8,
        name: "BD-130",
        icon: "/assets/images/frame-managebase.png",
        documentType: "MEP Document",
        Title: "Title 8",
        Description: "Figma ipsum component variant...",
        UploadedBy: "Sophia (Emp-135)",
        UploadedOn: "01-15-2026",
        Country: "UAE",
        State: "UAE",
        city: "UAE",
        brand: "UAE",
        designType: "Type 2"
    }
];

const columns = [
    { key: "name", label: "Base Data Number" },
    { key: "documentType", label: "Document Type" },
    { key: "Title", label: "Title" },
    { key: "Description", label: "Description" },
    { key: "UploadedBy", label: "Uploaded By" },
    { key: "UploadedOn", label: "Uploaded On" },
    { key: "Country", label: "Country" },
    { key: "State", label: "State" },
    { key: "city", label: "City" },
    { key: "brand", label: "Brand" },
    { key: "designType", label: "Design Type" },
    { key: "actions", label: "Actions" }
];

const ManagementBaseData = () => {
    const [filters, setFilters] = useState({});
    const router = useRouter();
    const [drawerModalOpen, setDrawerModalOpen] = useState(false);


    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value.toLowerCase() }));
    };

    const filteredProjects = allProjects.filter((project) =>
        Object.entries(filters).every(([key, value]) =>
            project[key]?.toString().toLowerCase().includes(value)
        )
    );

    return (
        <div>
            <table className="min-w-full table-fixed">
                <thead className="sticky top-0 bg-[#25272c] z-10">
                    <tr className="border-b border-slate-700/50">
                        {columns.map((col) => (
                            <th key={col.key} className="text-left p-4 text-sm font-medium text-slate-300 bg-slate-800/30">
                                <div className="flex items-center gap-2">
                                    {col.label}
                                    <span className="text-slate-500">⋯</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                    <tr className="border-b border-slate-700/50 bg-[#0000001a] h-[54px]">
                        {columns.map((col) => (
                            <td key={col.key} className="p-3">
                                <div className="flex items-center justify-between w-full">
                                    <input
                                        type="text"
                                        className={`bg-[#ffffff1a] border border-[#ffffff0f] text-[#d1d5db] h-[38px] px-3 rounded w-full ${col.key === "actions" ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        placeholder={col.key === "actions" ? "N/A" : ""}
                                        disabled={col.key === "actions"}
                                        onChange={(e) =>
                                            col.key !== "actions" && handleFilterChange(col.key, e.target.value)
                                        }
                                    />
                                    <Filter className="w-4 h-4 text-slate-400 ml-2" />
                                </div>
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map((project, index) => (
                        <tr
                            key={project.id}
                            className={`border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors ${index % 2 === 0 ? "bg-slate-900/30" : ""}`}
                        >
                            <td className="p-4 text-slate-300 text-sm">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={project.icon}
                                        alt="Grid"
                                        className="w-4 h-4 object-contain"
                                    />
                                    <span>{project.name}</span>
                                </div>
                            </td>

                            <td className="p-4 text-slate-300 text-sm">{project.documentType}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.Title}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.Description}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.UploadedBy}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.UploadedOn}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.Country}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.State}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.city}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.brand}</td>
                            <td className="p-4 text-slate-300 text-sm">{project.designType}</td>
                            <td className="p-4">
                                <div className="flex items-center gap-2 justify-center">
                                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 text-gray-300">
                                        <Trash size={16} />
                                    </button>
                                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 text-gray-300">
                                        <Edit size={16} />
                                    </button>
                                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 text-gray-300" onClick={() => setDrawerModalOpen(true)}>
                                        <Eye size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <BaseDrawerModel
                open={drawerModalOpen}
                onOpenChange={(isOpen) => setDrawerModalOpen(isOpen)}
            />
        </div>
    );
};

export default ManagementBaseData;
