import ThemeProvider from '@workcode/components'

import { Bar, Editor, Layout, PrettyCode, HTMLCode } from './components'
import { LanguageProvider, CodeProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <CodeProvider>
        <ThemeProvider>
          <Layout
            header={<Bar />}
            editor={<Editor />}
            prettyCode={<PrettyCode />}
            htmlCode={<HTMLCode />}
          />
        </ThemeProvider>
      </CodeProvider>
    </LanguageProvider>
  )
}

export default App
