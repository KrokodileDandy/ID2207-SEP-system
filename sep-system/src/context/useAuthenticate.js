import React, { createContext } from "react";

const useAuthenticateContext = createContext({
    username: "",
    setUser: (user) => {}
});

export default useAuthenticateContext;