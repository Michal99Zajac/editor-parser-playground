import React, { useState } from 'react'
import { Box, Heading, Textarea } from '@workcode/components'

export function RawText(): JSX.Element {
  const [rawText, setRawText] = useState('')
  const [spacing, setSpacing] = useState(0)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(event.target.value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (['Tab', 'Enter'].includes(event.key)) {
      event.preventDefault()
    }

    if (event.key === 'Tab') {
      setRawText(rawText + '\t')
      setSpacing(spacing + 1)
    }

    if (event.key === 'Enter') {
      setRawText(rawText + '\n' + '\t'.repeat(spacing))
    }

    if (event.key === 'Backspace') {
      if (rawText.endsWith('\t') && spacing) {
        setSpacing(spacing - 1)
      }
    }
  }

  return (
    <Box height="100%">
      <Box padding={2} bg="#091A2A" height="auto">
        <Heading as="h4" size="md">
          Raw Code
        </Heading>
      </Box>
      <Textarea
        sx={{
          '&': {
            '-moz-tab-size': '4',
            '-o-tab-size': '4',
            'tab-size': '4',
          },
        }}
        value={rawText}
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

export default RawText
