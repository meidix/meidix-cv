export default function NavItem({ name }: { name: string }) {
  return (
    <span className="font-thin cursor-pointer hover:font-semibold focus:font-semibold">
      {name}
    </span>
  )
}
