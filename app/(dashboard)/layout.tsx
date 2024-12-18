import React from "react";

const Layout = ({children}: { children: React.ReactNode}) => {
    return(
        <div>
            <div className="container-dashboard-nav">
                <h1>Dashboard Navigation Bar</h1>
            </div>
            {children}
        </div>
    )
}

export default Layout;