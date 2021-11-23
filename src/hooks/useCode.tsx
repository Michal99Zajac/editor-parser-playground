import { useContext } from 'react'

import { CodeContext, CodeContextType } from '../context/CodeContext'

export function useCode(): CodeContextType {
  const values = useContext(CodeContext)

  if (!values) {
    throw new Error('Code Context is not provided')
  }

  return values
}

export default useCode
