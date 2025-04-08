import React from 'react'

const Layout = ({children}) => {
    return (
        <main className="w-full min-h-screen bg-[#121312] overflow-x-hidden">
            {children}
        </main>
    )
}
export default Layout
