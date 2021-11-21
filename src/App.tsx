import ThemeProvider from '@workcode/components'

import { Bar } from './components'
import { LanguageProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Bar />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
