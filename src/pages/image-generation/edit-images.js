import React from 'react';

// Thumbnail images
const thumbnailImages = [
    'assets/images/example-image-1.png',
    'assets/images/example-image-1.png',
    'assets/images/example-image-1.png',
];
const EditImages = ({ onReturn }) => {
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
                {/* Main Image */}
                <img
                    src="/assets/images/edit-image-1.png"
                    alt="Edit Preview"
                    className="w-[877px] h-[602px] rounded-3xl"
                />

                {/* Toolbar + Thumbnails Row - aligned to image width */}
                <div className="w-[877px] flex items-center justify-start gap-4">
                    {/* Thumbnails */}
                    <div className="flex gap-2 bg-[#11192899] p-3 rounded-lg backdrop-blur-[7px]">
                        {thumbnailImages.map((image, index) => (
                            <div
                                key={index}
                                className={`w-[52px] h-[42px] rounded-xl bg-cover bg-center ${index !== 2 ? 'opacity-50' : ''}`}
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        ))}
                    </div>

                    {/* Toolbar Buttons */}
                    <div className="flex items-center gap-3 px-3 py-2 bg-[#111928] rounded-xl border border-white/10">
                        <button>
                            <img
                                src="/assets/icons/sparkle.png"
                                alt="Sparkle"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <button>
                            <img
                                src="/assets/icons/eraser.png"
                                alt="Eraser"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <button>
                            <img
                                src="/assets/icons/focus.png"
                                alt="Focus"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <button>
                            <img
                                src="/assets/icons/message.png"
                                alt="Comment"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <button>
                            <img
                                src="/assets/icons/gear.png"
                                alt="Settings"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                    </div>



                </div>
            </div>

        </>
    );
};

export default EditImages;