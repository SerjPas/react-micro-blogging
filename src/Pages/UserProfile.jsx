import React from "react";
import UserCard from "../components/UserCard";
import Container from "@material-ui/core/Container";

const UserProfile = () => {

    return (
        <Container style={{width: "76%", display: "flex", justifyContent: "center"}} >
            <UserCard/>
        </Container>
    );
}
export default UserProfile