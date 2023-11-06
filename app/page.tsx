import TypeWriter from "./TypeWriter"

export default function Welcome() {
  return (
    <div className="flex w-full justify-center items-center flex-col content-center h-full mt-20">
      <TypeWriter text="Welcome..." delay={150} startingDelay={1000} />
      {/* <TypeWriter text="This is My Website" delay={100} /> */}
    </div>
  )
}
