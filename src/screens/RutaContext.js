import React, { createContext, useState } from "react";

const RutaContext = createContext({
  ruta: "",
  setRuta: () => {},
  newSituationAdded: false,
  setNewSituationAdded: () => {},
  newUbicationAdded: false,
  setNewUbicationAdded: () => {},
});

const RutaProvider = ({ children }) => {
  const [ruta, setRuta] = useState("");
  const [newSituationAdded, setNewSituationAdded] = useState(false);
  const [newUbicationAdded, setNewUbicationAdded] = useState(false);

  return (
    <RutaContext.Provider
      value={{
        ruta,
        setRuta,
        newSituationAdded,
        setNewSituationAdded,
        newUbicationAdded,
        setNewUbicationAdded,
      }}
    >
      {children}
    </RutaContext.Provider>
  );
};

export { RutaContext };
export default RutaProvider;
