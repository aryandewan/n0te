import React from 'react'

const Layout = ({children}) => {
    return (
        <main className="w-full min-h-dvh bg-[#121312] overflow-hidden">
            {children}
        </main>
    )
}
export default Layout
