import React from "react"
import Image from "next/image"
import Section from "./components/Section/Section"
import Button from "./components/Button"
import Grid from "./components/Grid"

const MyHome = () => {
  return (
    <main>
      <legend className="justify-center flex w-full items-center space-x-9 mb-24">
        <div className="border border-double border-grey p-3 rounded-full overflow-hidden w-72 h-72">
          <Image
            src="/profile.jpg"
            width={400}
            height={400}
            alt="picture of Author"
          />
        </div>
        <div className="w-1/2">
          <div className="antialiased text-gray-400 tracking-wide">
            Software Engineer
          </div>
          <h1 className="text-4xl font-bold leading-relaxed">Mehdi Hossieni</h1>
          <p className="text-justify text-gray-600">
            I am a dedicated software engineer with a strong background in
            project management and team coordination. With a track record of
            successfully leading cross-functional teams and ensuring projects
            are delivered on time and within scope, I bring a strategicapproach
            to software development. My ability to communicate effectively with
            stakeholders and leverage agile methodologiesenhances collaboration,
            resulting in consistently high-quality deliverables.
          </p>
          <div>
            <Button label="Download CV" style="main" disabled={false} />
            <Button label="Contact" style="main" disabled={false} />
          </div>
        </div>
      </legend>
      <Section header="What I do">
        <Grid columns={2} rows={2}>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
        </Grid>
      </Section>
    </main>
  )
}

export default MyHome
