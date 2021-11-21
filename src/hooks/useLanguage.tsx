import { useContext } from 'react'

import {
  LanguageContext,
  LanguageContextType,
} from '../context/LanguageContext'

export function useLanguage(): LanguageContextType {
  const values = useContext(LanguageContext)

  if (!values) {
    throw new Error('Language Context is not provided')
  }

  return values
}

export default useLanguage
