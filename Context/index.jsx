import { createContext, useState } from "react";

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [locality, setLocality] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        locality,
        setLocality,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
