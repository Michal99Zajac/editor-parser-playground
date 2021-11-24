import React, { useState } from 'react'
import { Box, Heading, Textarea } from '@workcode/components'

import useCode from '../../hooks/useCode'

export function Editor(): JSX.Element {
  const { code, setCode } = useCode()
  const [spacing, setSpacing] = useState(0)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (['Tab', 'Enter'].includes(event.key)) {
      event.preventDefault()
    }

    if (event.key === 'Tab') {
      setCode(code + '\t')
      setSpacing(spacing + 1)
    }

    if (event.key === 'Enter') {
      setCode(code + '\n' + '\t'.repeat(spacing))
    }

    if (event.key === 'Backspace') {
      if (code.endsWith('\t') && spacing) {
        setSpacing(spacing - 1)
      }
    }
  }

  return (
    <Box height="100%">
      <Box padding={2} bg="#091A2A" height="auto">
        <Heading as="h4" size="md">
          Edit
        </Heading>
      </Box>
      <Textarea
        sx={{
          '&': {
            MozTabSize: 2,
            OTabSize: 2,
            tabSize: 2,
          },
        }}
        value={code}
        onKeyDown={onKeyDown}
        onChange={onChange}
        borderRadius="0"
        resize="none"
        placeholder="your code hare!"
        height="calc(100% - 40px)"
      />
    </Box>
  )
}

export default Editor
