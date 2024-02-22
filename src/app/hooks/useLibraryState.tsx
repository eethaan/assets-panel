import { useState, useEffect } from "react";

// export functions to handle library switching
type LibraryHookType = () => {screenState: ScreenState, libraryName:string, handleLibrarySwitch:(arg0: string) => void , handleLibraryBack:() => void }

const useLibraryState : LibraryHookType = () =>{

const [screenState, setScreenState] = useState<ScreenState>(ScreenState.MAIN);
const [libraryName, setLibraryState] = useState("");

// enter library
const handleLibrarySwitch = (libraryName: string) => {
    console.log("Switching to library:", libraryName);
    setLibraryState(libraryName);
    setScreenState(ScreenState.INNER);
  };

  // exit library
  const handleLibraryBack = () => {
    setScreenState(ScreenState.MAIN);
  };

  // check for entered library state
  useEffect(() => {
    if (screenState === ScreenState.MAIN) {
      setLibraryState("");
    }
  }, [libraryName, screenState]);

    return {screenState, libraryName, handleLibrarySwitch, handleLibraryBack}
}

// three types of screenstates
enum ScreenState {
    MAIN = "main",
    INNER = "inner",
    INNERSECONDARY = "secondary",
  }

export default useLibraryState;
