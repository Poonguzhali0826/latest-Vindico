import React, { useState } from 'react';

// Thumbnail images
const thumbnailImages = [
    'assets/images/edit-image-1.png',
    'assets/images/edit-image-1.png',
    'assets/images/edit-image-1.png',
];
const EditImages = ({ onReturn }) => {
    const [isEraseMode, setIsEraseMode] = useState(false);
    const [treeRemoved, setTreeRemoved] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleRemoveTree = () => {
        setTreeRemoved(true);             // Hide tree overlay
        setIsEraseMode(false);           // Hide "Remove Element" button
        setShowSuccessMessage(true);     // Show success message
        // Hide success message after 3 seconds
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000);
    };
    const [showComment, setShowComment] = useState(false);
    const [fenceChanged, setFenceChanged] = useState(false);
    return (
        <>
            <div className="py-2 px-4">
                <button
                    className="flex items-center text-aiui-blue mb-6"
                    onClick={onReturn}
                >
                    <img
                        src="/assets/images/undo.png"
                        alt="Return"
                        className="pr-2"
                    />
                    Return Back
                </button>
            </div>
            <div className="flex justify-between items-center px-6  w-full">
                {/* Prompt Text */}
                <h1 className="text-white text-lg font-medium">
                    create a image of house vitrine modern predio
                </h1>

                {/* Button Group */}
                <div className="flex items-center gap-2">
                    <button className="flex items-center px-3 py-1 h-9 text-sm bg-[#1F1F1F] text-white rounded-md hover:bg-[#2A2A2A]">
                        <img src="/assets/images/send-2.png" alt="Share" className="w-4 h-4 mr-2" />
                        Share Image
                    </button>

                    <button className="flex items-center px-3 py-1 h-9 text-sm bg-[#1F1F1F] text-white rounded-md hover:bg-[#2A2A2A]">
                        <img src="/assets/images/add.png" alt="Collection" className="w-4 h-4 mr-2" />
                        Add to My Collection
                    </button>

                    {/* Download Icon Button */}
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#4EABD5] hover:bg-[#3A91B8] transition">
                        <img src="/assets/images/document-download.png" alt="Download" className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-8">
                
                {/* Main Image (optimized conditional rendering) */}
                {fenceChanged ? (
                    // Blue fence image
                    <img
                        className="w-[877px] h-[602px] rounded-3xl "
                        alt="Modern house"
                        src="/assets/images/Avatar (1).png"
                    />
                ) : treeRemoved ? (
                    // Tree removed image
                    <img
                        src="/assets/images/edit-image-without-tree.png"
                        alt="Edit Preview"
                        className="w-[877px] h-[602px] rounded-3xl"
                    />
                ) : (
                    // Default/original image
                    <img
                        src="/assets/images/edit-image-1.png"
                        alt="Original"
                        className="w-[877px] h-[602px] rounded-3xl object-cover"
                    />
                )}


                {isEraseMode && !treeRemoved && (
                    <div className="absolute top-[213px] left-[756px] z-20 pointer-events-none">
                        <img
                            src="/assets/images/tree-mask.png" // transparent red overlay of tree
                            alt="Tree Overlay"
                            className="w-[410px] h-[550px] object-contain"
                        />
                    </div>
                )}

                {/* Toolbar + Thumbnails Row - aligned to image width */}
                <div className="w-full max-w-[877px] flex flex-col md:flex-row md:items-center gap-4">
                    {/* Thumbnails */}
                    <div className="flex gap-2 bg-[#11192899] p-3 rounded-lg backdrop-blur-[7px] justify-center md:justify-start">
                        {thumbnailImages.map((image, index) => (
                            <div
                                key={index}
                                className={`w-[52px] h-[42px] rounded-xl bg-cover bg-center ${index !== 2 ? 'opacity-50' : ''}`}
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        ))}
                    </div>

                    <div className="relative">
                        {/* Remove Element button (above eraser) */}
                        {isEraseMode && !treeRemoved && (
                            <div className="absolute -top-12 left-0 z-30">
                                <button
                                    onClick={handleRemoveTree}
                                    className="flex items-center gap-2 bg-[#E8871E] text-white px-4 py-2 rounded-full shadow hover:bg-[#cf760f] transition"
                                >
                                    <span className="text-sm border-r border-white pr-3 mr-2">
                                        Remove Element
                                    </span>
                                    <img
                                        src="/assets/images/remove-message-add.png"
                                        alt="Message Add"
                                        className="w-4 h-4"
                                    />
                                </button>
                            </div>
                        )}
                        {showSuccessMessage && (
                            <div className="absolute -top-12 left-0 z-30 w-[350px]">
                                {/* Blue top border animation */}
                                <div className="h-[3px] w-full overflow-hidden rounded-t-md relative">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500 to-blue-500 animate-progress-bar" />
                                </div>

                                {/* Message box */}
                                <div className="flex items-center justify-between gap-4 bg-[#2A2A2A] text-white px-4 py-2 rounded-b-md border border-white/10 w-full">
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/images/tick-circle.png" className="w-4 h-4" alt="Success" />
                                        <span className="text-sm">Element removed successfully</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setTreeRemoved(false);
                                            setShowSuccessMessage(false);
                                        }}
                                        className="text-white text-sm flex items-center gap-1"
                                    >
                                        <img src="/assets/images/undo.png" className="w-4 h-4" alt="Undo" />
                                        Undo
                                    </button>
                                </div>
                            </div>
                        )}
                        {/* Toolbar Buttons */}
                        <div className="flex items-center gap-3 px-3 py-2 bg-[#111928] rounded-xl border border-white/10 justify-center md:justify-start">
                            <button>
                                <img
                                    src="/assets/images/sparkle.png"
                                    alt="Sparkle"
                                    className="w-[34px] h-[24px]"
                                />
                            </button>
                            <button onClick={() => {
                                setIsEraseMode(true);
                                setTreeRemoved(false);         // Show the tree again
                                setShowSuccessMessage(false);  // Hide the old success message
                            }}>
                                <img
                                    src="/assets/images/eraser.png"
                                    alt="Eraser"
                                    className="w-[24px] h-[24px]"
                                />
                            </button>
                            <button>
                                <img
                                    src="/assets/images/focus.png"
                                    alt="Focus"
                                    className="w-[24px] h-[24px]"
                                />
                            </button>
                            {showComment && !fenceChanged && (
                                <>
                                    {/* Speech bubble */}
                                    <div className="absolute -top-[253px] left-[344px] z-40 w-[300px] flex justify-between items-center gap-2 px-4 py-2 bg-[#111928] text-white text-xs rounded-full shadow-lg w-max max-w-[300px]">
                                        <span className="whitespace-nowrap">change the fence color to blue.</span>
                                        <img
                                            src="/assets/images/up-arrow-blue.png"
                                            alt="Up Arrow"
                                            className="w-5 h-5"
                                            onClick={() => setFenceChanged(true)}
                                        />
                                    </div>

                                    {/* Dotted Rectangle Overlay */}
                                    <div className="absolute -top-[200px] left-[450px] z-30">
                                        <img
                                            src="/assets/images/dotted-box.png"
                                            alt="Selection Box"
                                            className="w-[90px] h-[120px]"
                                        />
                                    </div>
                                </>
                            )}
                            {fenceChanged && (
                                <>
                                    <div className="absolute -top-[255px] left-[317px] z-40 w-max max-w-[400px] flex justify-between items-center gap-3 px-4 py-2 rounded-full shadow-lg text-white text-sm" style={{ background: 'linear-gradient(to right, #EF7400, #653201)' }}>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/images/tick-circle.png" className="w-4 h-4" alt="tick" />
                                            <span className="whitespace-nowrap">change the fence color to blue.</span>
                                        </div>
                                        <button
                                            className="flex items-center gap-1"
                                            onClick={() => {
                                                setFenceChanged(false);    // Revert image
                                                setShowComment(false);    // Hide speech bubble
                                            }}
                                        >
                                            <img src="/assets/images/undo.png" alt="Undo" className="w-4 h-4" />
                                            Undo
                                        </button>
                                    </div>
                                    <div className="absolute -top-[200px] left-[450px] z-30">
                                        <img
                                            src="/assets/images/dotted-box.png"
                                            alt="Selection Box"
                                            className="w-[90px] h-[120px]"
                                        />
                                    </div>
                                </>

                            )}
                            <button onClick={() => setShowComment(true)}>
                                <img
                                    src="/assets/images/message-add.png"
                                    alt="Comment"
                                    className="w-[24px] h-[24px]"
                                />
                            </button>
                            <button>
                                <img
                                    src="/assets/images/setting-2.png"
                                    alt="Settings"
                                    className="w-[24px] h-[24px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default EditImages;