import React from "react";

const Layout = ({children}: {children : React.ReactNode}) => {
    return (
        <div>
            <h1>About Navigation</h1>
            {children}
        </div>
    )
}

export default Layout;