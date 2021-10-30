import { useState } from 'react'
import './App.scss'
import {
  AppBar,
  Typography,
  Box,
  Select,
  FormControl,
  MenuItem,
  Paper,
} from '@mui/material'

function App(): JSX.Element {
  const [lang, setLang] = useState('none')

  return (
    <Box
      sx={{ height: '100%', backgroundColor: '#020F1C' }}
      display="grid"
      gridTemplateRows="auto 1fr 1fr"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={1}
    >
      <Box gridColumn="span 12" sx={{ borderRadius: 0 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#102A43',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            height: '40px',
          }}
        >
          <Typography sx={{ margin: '10px' }} variant="h5">
            Playground
          </Typography>
          <FormControl sx={{ height: '40px', margin: '5px' }}>
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              sx={{ height: '100%', color: 'white' }}
            >
              <MenuItem value="javascript">JavaScript</MenuItem>
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="bash">Bash</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
          </FormControl>
        </AppBar>
      </Box>
      <Box
        sx={{
          height: '100%',
          boxSizing: 'border-box',
        }}
        gridRow="span 2"
        gridColumn="span 6"
      >
        <Paper
          sx={{ height: '100%', borderRadius: '0', backgroundColor: '#091A2A' }}
        >
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: '#102A43',
              height: 'auto',
              boxShadow: '0',
            }}
          >
            <Typography marginLeft={1} variant="h6">
              Code
            </Typography>
          </AppBar>
          <div
            style={{
              height: 'calc(100% - 32px)',
              width: '100%',
            }}
          >
            <textarea
              style={{
                margin: 0,
                boxSizing: 'border-box',
                height: '100%',
                width: '-moz-availabe',
                borderRadius: '0',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'white',
              }}
            ></textarea>
          </div>
        </Paper>
      </Box>
      <Box
        sx={{
          height: '100%',
          boxSizing: 'border-box',
        }}
        gridColumn="span 6"
      >
        <Paper
          sx={{ height: '100%', borderRadius: '0', backgroundColor: '#091A2A' }}
        >
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: '#102A43',
              height: 'auto',
              boxShadow: '0',
            }}
          >
            <Typography marginLeft={1} variant="h6">
              HTML
            </Typography>
          </AppBar>
        </Paper>
      </Box>
      <Box
        sx={{
          height: '100%',
          boxSizing: 'border-box',
        }}
        gridColumn="span 6"
      >
        <Paper
          sx={{ height: '100%', borderRadius: '0', backgroundColor: '#091A2A' }}
        >
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: '#102A43',
              height: 'auto',
              boxShadow: '0',
            }}
          >
            <Typography marginLeft={1} variant="h6">
              Pretty Code
            </Typography>
          </AppBar>
        </Paper>
      </Box>
    </Box>
  )
}

export default App
