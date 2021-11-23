import ThemeProvider from '@workcode/components'

import { Bar, RawText, Layout } from './components'
import { LanguageProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout
          header={<Bar />}
          editor={<RawText />}
          prettyCode={<div></div>}
          htmlCode={<div></div>}
        />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
