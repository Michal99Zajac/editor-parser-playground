import ThemeProvider from '@workcode/components'

import { Bar, Editor, Layout } from './components'
import { LanguageProvider, CodeProvider } from './context'

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <CodeProvider>
        <ThemeProvider>
          <Layout
            header={<Bar />}
            editor={<Editor />}
            prettyCode={<div></div>}
            htmlCode={<div></div>}
          />
        </ThemeProvider>
      </CodeProvider>
    </LanguageProvider>
  )
}

export default App
