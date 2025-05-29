import React from "react";
// import { Avatar } from "../../../../components/ui/avatar";
// import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
    return (
        <div className="border-0 bg-transparent">
            <div className="flex items-center gap-3 px-6 py-4 w-full">
                {/* <Avatar className="w-[142px] h-16 rounded-none"> */}
                    <img
                        className="w-full h-full object-cover"
                        alt="Modern house"
                        src="https://c.animaapp.com/mb26iuiaEe4h4s/img/avatar.png"
                    />
                {/* </Avatar> */}

                <div className="flex flex-col items-start gap-1 flex-1">
                    <h2 className="font-semibold text-white text-2xl tracking-[-0.48px] leading-6 font-sans">
                        Modern style for houses
                    </h2>

                    <p className="text-gray-300 text-base tracking-[-0.32px] leading-6 font-sans">
                        Envision a grand library with soaring ceilings and intricate
                        woodwork, where natural light floods in through stained glass
                        windows, creating a serene atmosphere for readers.
                    </p>
                </div>
            </div>
        </div>
    );
};