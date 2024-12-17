import React from "react";

const User = async ({params} : {params: {id : string}}) => {

    const {id} = await params;
    return (
        <><h1>User - {id} profile page!</h1></>
    )
}

export default User;