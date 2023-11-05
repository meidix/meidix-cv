"use client"

import styled from "styled-components"

export default function grid({
  rows,
  columns,
  children,
}: {
  rows: number
  columns: number
  children: React.ReactNode
}) {
  const Grid = styled.div`
    grid-template-columns: repeat(${columns}, minmax(0, 1fr));
    grid-template-rows: repeat(${rows}, minmax(0, 1fr));
    display: grid;
  `

  return <Grid>{children}</Grid>
}
