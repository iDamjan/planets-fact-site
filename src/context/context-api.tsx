import React, { useState } from "react";

type planetContextObj = {
  overview: boolean;
  internal: boolean;
  surface: boolean;
  overviewHandler: () => void;
  internalHandler: () => void;
  surfaceHandler: () => void;
};
export const PlanetsContext = React.createContext<planetContextObj>({
  overview: true,
  internal: false,
  surface: false,
  overviewHandler: () => {},
  internalHandler: () => {},
  surfaceHandler: () => {},
});


const ContextProvider: React.FC = ({ children }:any) => {
    
  const [overview, setOverview] = useState(true);
  const [internal, setInternal] = useState(false);
  const [surface, setSurface] = useState(false);

  // ne mozam da importnam custom button
  const overviewHandler = () => {
    setOverview(true);
    setInternal(false);
    setSurface(false);
  };

  const internalHandler = () => {
    setOverview(false);
    setInternal(true);
    setSurface(false);
  };

  const surfaceHandler = () => {
    setOverview(false);
    setInternal(false);
    setSurface(true);
  };

  const contextValue:planetContextObj  = {
    overview,
    internal,
    surface,
    overviewHandler,
    internalHandler,
    surfaceHandler,
  };
  return (
    <PlanetsContext.Provider value={contextValue}>
      {children}
    </PlanetsContext.Provider>
  );
};

export default ContextProvider;
