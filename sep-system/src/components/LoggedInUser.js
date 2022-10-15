import useAuthenticateContext from "../context/useAuthenticate";
import React, {useContext} from "react";

const LoggedInUser = () => {
    const username  = useContext(useAuthenticateContext);
    return (
        username.username
    )
};

export default LoggedInUser;