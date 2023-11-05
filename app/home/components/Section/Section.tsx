import classes from "./Section.module.scss"

export default function section({
  children,
  header,
}: {
  children: React.ReactNode
  header: string
}) {
  return (
    <section>
      <h1 className={classes.Header}>{header}</h1>
      <div>{children}</div>
    </section>
  )
}
