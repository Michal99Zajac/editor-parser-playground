import React from 'react'
import { Box, Heading, Text } from '@workcode/components'

import useCode from '../../hooks/useCode'

export function PrettyCode(): JSX.Element {
  const { code } = useCode()

  return (
    <Box height="100%">
      <Box padding={2} bg="#091A2A" height="auto">
        <Heading as="h4" size="md">
          Pretty Code
        </Heading>
      </Box>
      <Box
        bg="#102A43"
        height="calc(100% - 40px)"
        maxHeight="calc(42vh)"
        maxWidth="calc(50vw - 1rem)"
        overflow="scroll"
        padding={2}
      >
        {code.split('\n').map((line, index) => (
          <Text
            as="pre"
            key={`${line}-${index}`}
            sx={{ wordWrap: 'normal', tabSize: 2 }}
            fontSize="sm"
          >
            {line ? line : '\n'}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

export default PrettyCode
