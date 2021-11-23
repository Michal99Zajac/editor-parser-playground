import ThemeProvider from '@workcode/components'

import { Bar, RawText, Layout } from './components'
import { LanguageProvider, CodeProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CodeProvider>
          <Layout
            header={<Bar />}
            editor={<RawText />}
            prettyCode={<div></div>}
            htmlCode={<div></div>}
          />
        </CodeProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
