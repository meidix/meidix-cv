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
          <section className="py-10  w-full h-full">{children}</section>
        </main>
      </body>
    </html>
  )
}
