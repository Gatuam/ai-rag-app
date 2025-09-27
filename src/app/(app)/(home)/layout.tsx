import Navbar from '@/components/_home/components/nav'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
     <div className=" w-full h-screen flex flex-col gap-y-3 bg-gradient-to-b from-accent/5 to-chart-2/1">
          <Navbar />
          <main className="flex-1 flex-col h-full w-full mx-auto">
            {children}
          </main>
        </div>
  )
}

export default layout
