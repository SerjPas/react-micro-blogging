import React from "react";

const UserContext = React.createContext({
    currentUser: null,
    handleCurrentUser: () => {},
    handleLogout: () => {}
})
export default UserContext