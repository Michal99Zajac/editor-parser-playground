import ThemeProvider from '@workcode/components'

import { Bar, RawText, Layout } from './components'
import { LanguageProvider, CodeProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <CodeProvider>
        <ThemeProvider>
          <Layout
            header={<Bar />}
            editor={<RawText />}
            prettyCode={<div></div>}
            htmlCode={<div></div>}
          />
        </ThemeProvider>
      </CodeProvider>
    </LanguageProvider>
  )
}

export default App
