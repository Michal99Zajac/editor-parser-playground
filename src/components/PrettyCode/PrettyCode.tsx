import React from 'react'
import { Box, Heading, Text } from '@workcode/components'
import { toHTML } from '@workcode/editor-parser'

import useCode from '../../hooks/useCode'
import { useLanguage } from '../../hooks'

export function PrettyCode(): JSX.Element {
  const { code } = useCode()
  const { language } = useLanguage() as any

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
        <Text as="pre" sx={{ wordWrap: 'normal', tabSize: 2 }} fontSize="sm">
          <div
            dangerouslySetInnerHTML={{
              __html: toHTML(code, language),
            }}
          />
        </Text>
      </Box>
    </Box>
  )
}

export default PrettyCode
