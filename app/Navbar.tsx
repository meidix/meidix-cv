import NavItem from "./home/components/NavItem"

export default function navBar() {
  return (
    <nav className="w-full flex justify-between h-20 items-center sticky">
      <div className="flex justify-center space-x-3 items-center content-center">
        <div className=" bg-blue-600 rounded-full h-9 w-9 flex">
          <span className="text-white font-sans text-lg w-full h-full inline-block text-center font-black leading-loose antialiased">
            M
          </span>
        </div>
        <span className="text-lg">
          <strong>Mehdi</strong> Hosseini
        </span>
      </div>
      <div className="flex justify-between grow max-w-lg">
        <NavItem name="About me" />
        <NavItem name="Resume" />
        <NavItem name="Portfolio" />
        <NavItem name="Contact" />
        <NavItem name="PDF" />
      </div>
    </nav>
  )
}
