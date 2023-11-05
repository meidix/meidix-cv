import React from "react"
import Navbar from "./Navbar"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="px-20">
          <Navbar />
          <section className="py-10 grid grid-flow-col justify-start items-between justify-items-stretch w-full h-full">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
