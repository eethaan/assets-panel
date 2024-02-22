import React, { useEffect, useState } from "react";
import useKeyboardShortcut from "@/app/hooks/useKeyboardShortcut";
import LibraryRow from "../Atoms/LibraryRow";
import libraryDataFusion from "../../data/LibraryData";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Breadcrumb from "../Atoms/Breadcrumb";
import PrimitiveRow from "../Atoms/PrimitiveRow";
import MainView from "./Views/MainView";

//hooks
import useLibraryState from "@/app/hooks/useLibraryState";

function Librarylist() {
  const [selectedState, setSelectedState] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  
  const{libraryName, handleLibrarySwitch, handleLibraryBack} = useLibraryState()

  // hook for library
  useKeyboardShortcut("2", () => {
    setSelectedState(true)
    console.log("Keyboard Mode Enabled");
  });

  // check if input unselected
  const handleInputBlur = () => {
    console.log("deselected")
    setSelectedState(false);
  };

  // check if keyboard shortcut was pressed
  useEffect(() => {
    const inputField = document.getElementById('searchInput') as HTMLInputElement;
    if(inputField && selectedState){
      inputField.focus();
    }
  },[selectedState])


  return (
    <>
      <div className="overflow-hidden h-dvh">
        <AnimatePresence mode="wait">
          {(() => {
            switch (libraryName) {
              case "iris-2021":
                return (
                  <>
                    <Breadcrumb
                      title="Iris 2021"
                      onClick={() => handleLibraryBack()}
                    />
                    {libraryDataFusion.map((item, index) => (
                      <LibraryRow
                        key={index}
                        img={item.img}
                        title={item.title}
                        handleLibraryBack={handleLibraryBack}
                      />
                    ))}
                  </>
                );
              case "iris-2022":
                return (
                  <>
                    <Breadcrumb
                      title="Iris 2022"
                      onClick={() => handleLibraryBack()}
                    />
                    <PrimitiveRow
                      img="/images/icon.24.template.small.svg"
                      title="Template"
                      state="open"
                    />
                  </>
                );
              default:
                return (
                  <MainView handleInputBlur={handleInputBlur} handleLibrarySwitch={handleLibrarySwitch}/>
                );
            }
          })()}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Librarylist;
