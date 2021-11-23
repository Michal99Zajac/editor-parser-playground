import ThemeProvider from '@workcode/components'

import { Bar, RawText } from './components'
import { LanguageProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Bar />
        <RawText />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
