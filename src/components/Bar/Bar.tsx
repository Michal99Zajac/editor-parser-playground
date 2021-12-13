import React from 'react'
import { Flex, Heading, Spacer, Select, Center } from '@workcode/components'

import { useLanguage } from '../../hooks'

export function Bar(): JSX.Element {
  const { setLanguage } = useLanguage()

  return (
    <Flex alignItems="center" padding={2} bg="#091A2A">
      <Heading
        size="lg"
        fontFamily="Source Code Pro"
        fontStyle="normal"
        fontWeight="400"
        color="#FFFFFF"
      >
        @Workcode/playground
      </Heading>
      <Spacer />
      <Center width="300px">
        <Select
          defaultValue="NONE"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="NONE">none</option>
          <option value="JAVASCRIPT">javascript</option>
          <option value="BASH">bash</option>
          <option value="PYTHON">python</option>
        </Select>
      </Center>
    </Flex>
  )
}

export default Bar
