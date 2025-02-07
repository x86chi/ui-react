import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface TabsContainerProps {
  fullWidth: boolean
  multiline: boolean
}

const TabsContainer = styled.div<TabsContainerProps>`
  overflow-x: auto;
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'block')};
  white-space: ${({ multiline }) => (multiline ? 'nowrap' : 'normal')};
  flex-wrap: ${({ multiline }) => (multiline ? 'wrap' : 'nowrap')};
`

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
  multiline?: boolean
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { fullWidth = false, multiline = false, ...rest } = props
  return <TabsContainer fullWidth={fullWidth} multiline={multiline} {...rest} />
}
