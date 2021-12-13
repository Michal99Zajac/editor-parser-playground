import React, { useState } from 'react'

export type setLanguageType = (newLanguage: string) => void

export interface LanguageContextType {
  language: string | undefined
  setLanguage: setLanguageType
}

export const LanguageContext = React.createContext<LanguageContextType>({
  language: undefined,
  setLanguage: (newString: string) => newString,
})

export interface LanguageProviderType {
  children: React.ReactNode
}

export const LanguageProvider = ({
  children,
}: LanguageProviderType): JSX.Element => {
  const [language, setLanguage] = useState<string | undefined>(undefined)

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        setLanguage: (newLanguage: string) => setLanguage(newLanguage),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
