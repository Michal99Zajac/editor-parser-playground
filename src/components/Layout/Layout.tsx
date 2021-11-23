import React from 'react'
import { Grid, GridItem } from '@workcode/components'

export interface LayoutProps {
  header: React.ReactNode
  editor: React.ReactNode
  prettyCode: React.ReactNode
  htmlCode: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { header, editor, prettyCode, htmlCode } = props

  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="auto 1fr 1fr"
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem colSpan={2}>{header}</GridItem>
      <GridItem rowSpan={2} padding={2}>
        {editor}
      </GridItem>
      <GridItem padding={2}>{prettyCode}</GridItem>
      <GridItem padding={2}>{htmlCode}</GridItem>
    </Grid>
  )
}

export default Layout
