import React, { useState } from 'react';

const FidelitySlider = () => {
    const [value, setValue] = useState(90);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="mb-6 relative">
            {/* Label */}
            <label className="block text-sm text-white mb-2">Fidelity to the reference</label>

            <div className="relative pt-6 pb-10">
                {/* Track & Fill */}
                <div className="relative h-1.5 rounded-full bg-[#444c55]">
                    <div
                        className="absolute h-1.5 bg-[#00aedd] rounded-full"
                        style={{ width: `${value}%` }}
                    ></div>
                </div>

                {/* Percentage markers */}
                <div className="absolute left-0 text-xs text-gray-400 mt-2">0%</div>
                <div className="absolute right-0 text-xs text-gray-400 mt-2">100%</div>

                <div className="absolute top-[32px] w-full pointer-events-none mt-2">
                    <div
                        className="absolute text-xs text-gray-400"
                        style={{ left: '20%' }}
                    >
                        20%
                    </div>
                    <div
                        className="absolute text-xs text-gray-400"
                        style={{ left: '50%', transform: 'translateX(-50%)' }}
                    >
                        50%
                    </div>
                    <div
                        className="absolute text-xs text-gray-400"
                        style={{ left: '70%' }}
                    >
                        70%
                    </div>
                </div>

                {/* Thumb */}
                <div
                    className="absolute top-[19px] w-4 h-4 bg-white rounded-full shadow border border-gray-300"
                    style={{ left: `calc(${value}% - 8px)` }}
                ></div>

                {/* Value Label */}
                {isDragging ? (
                    <div
                        className="absolute -top-4 text-xs text-aiui-blue font-medium"
                        style={{ left: `calc(${value}% - 12px)` }}
                    >
                        {value}%
                    </div>
                ) : (
                    <div
                        className="absolute bottom-[60px] text-xs text-aiui-blue font-medium"
                        style={{ left: `calc(${value}% - 12px)` }}
                    >
                        {value}%
                    </div>
                )}
            </div>

            {/* Range Input (invisible but functional) */}
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                className="absolute top-[40px] left-0 w-full h-4 opacity-0 z-10 cursor-pointer"
            />
        </div>
    );
};

export default FidelitySlider;
