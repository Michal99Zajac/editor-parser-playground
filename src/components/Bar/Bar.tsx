import React from 'react'
import { Flex, Heading, Spacer, Select, Center } from '@workcode/components'

import { useLanguage } from '../../hooks'

export function Bar(): JSX.Element {
  const { language, setLanguage } = useLanguage()

  return (
    <Flex alignItems="center" padding={1} bg="#091A2A">
      <Heading
        size="lg"
        fontFamily="Source Code Pro"
        fontStyle="normal"
        fontWeight="400"
        color="#FFFFFF"
      >
        @Workcode playground
      </Heading>
      <Spacer />
      <Center width="300px">
        <Select
          defaultValue={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">javascript</option>
          <option value="bash">bash</option>
          <option value="python">python</option>
        </Select>
      </Center>
    </Flex>
  )
}

export default Bar
