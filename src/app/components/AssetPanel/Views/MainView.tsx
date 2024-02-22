import React, { useEffect, useRef, KeyboardEvent, useState } from 'react';
import Imagebutton from '../../Atoms/Imagebutton';
import LibraryCard from '../../Atoms/LibraryCard';
import { motion } from 'framer-motion';

//hooks
import useLibraryState from '@/app/hooks/useLibraryState';

interface MainViewProps {
    handleInputBlur: () => void;
    handleLibrarySwitch: (value: string) => void
}

function MainView({handleInputBlur, handleLibrarySwitch}: MainViewProps): JSX.Element {
    // Ref for the search input element
    const searchInputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        // Focus the search input on mount
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    return (
        <motion.div
            key="LibraryCard"
            exit={{ opacity: 0, x: -250 }}
            transition={{ duration: 0.1 }}
        >
            <div className="flex rounded-md space-x-2 pt-[8px] items-center">
                <div className="flex bg-[#383838] w-[188px] rounded-md items-center">
                    <Imagebutton
                        img="icon.24.search.svg"
                        state={0}
                        hasDropdown={false}
                        type="medium"
                    />
                    {/* Add ref to the input element */}
                    <input
                        ref={searchInputRef}
                        id="searchInput"
                        className="bg-[#383838] border-none rounded-md w-full placeholder:text-xs pb-0.5 pl-1 font-[Inter] focus:outline-none pb-0.5"
                        type="text"
                        placeholder="Search all libraries"
                        onBlur={handleInputBlur}
                    />
                </div>
                <Imagebutton
                    img="icon.24.filter.svg"
                    state={0}
                    hasDropdown={false}
                    type="medium"
                />
            </div>
            {/* Rest of your components */}
            <LibraryCard
                id='iris-2021'
                img1={"lib-image/lib-image.1.svg"}
                img2={"lib-image/lib-image.2.svg"}
                img3={"lib-image/lib-image.3.svg"}
                title={"Iris 2021"}
                secondary={"125 components, 25 templates"}
                onClick={() => handleLibrarySwitch("iris-2021")}
                handleLibrarySwitch={handleLibrarySwitch}
            />

            <LibraryCard
                id='iris-2022'
                img1={"lib-image/lib-image.4.svg"}
                img2={"lib-image/lib-image.5.svg"}
                img3={"lib-image/lib-image.6.svg"}
                title={"Iris 2022"}
                secondary={"55 components, 2 templates"}
                onClick={() => handleLibrarySwitch("iris-2022")}
                handleLibrarySwitch={handleLibrarySwitch}
            />
            
            <LibraryCard
                id='vimeo-ios'
                img1={"lib-image/lib-image.7.svg"}
                img2={"lib-image/lib-image.8.svg"}
                img3={"lib-image/lib-image.9.svg"}
                title={"Vimeo iOS"}
                secondary={"4 components, 100 templates"}
                onClick={() => handleLibrarySwitch("vimeo-ios")}
                handleLibrarySwitch={handleLibrarySwitch}
            />
        </motion.div>
    );
}

export default MainView;
