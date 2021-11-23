import React, { useState } from 'react'

type setCodeType = (newCode: string) => void

export interface CodeContextType {
  code: string
  setCode: setCodeType
}

export const CodeContext = React.createContext<CodeContextType>({
  code: '',
  setCode: (newCode: string) => newCode,
})

export interface CodeProviderType {
  children: React.ReactNode
}

export const CodeProvider = ({ children }: CodeProviderType) => {
  const [code, setCode] = useState('')

  return (
    <CodeContext.Provider
      value={{
        code: code,
        setCode: setCode,
      }}
    >
      {children}
    </CodeContext.Provider>
  )
}

export default CodeContext
