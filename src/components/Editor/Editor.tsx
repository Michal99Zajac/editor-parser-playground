import React, { useRef } from 'react'
import { Box, Heading, Textarea } from '@workcode/components'

import useCode from '../../hooks/useCode'

export function Editor(): JSX.Element {
  const { code, setCode } = useCode()
  const ref = useRef() as React.MutableRefObject<HTMLTextAreaElement>

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      const { selectionStart, selectionEnd } = event.currentTarget

      const newCode =
        code.substring(0, selectionStart) + '\t' + code.substring(selectionEnd)

      setCode(newCode)

      ref.current.value = newCode
      ref.current.selectionStart = selectionStart + 1
      ref.current.selectionEnd = selectionStart + 1
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
        ref={ref}
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
