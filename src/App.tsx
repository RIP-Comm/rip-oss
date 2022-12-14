/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import './App.css'
import entry from './components/entry'
import { SheetCols } from './types/type'
import useGoogleSheets from 'use-google-sheets'
import { ThemeContext, ThemeImage, Themes } from './class/theme'
import { Button } from 'react-bootstrap'

const App = () => {
  const [lightMode, setLightMode] = React.useState(true)

  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID!,
  })

  if (loading) {
    return <div></div>
  }

  if (error) {
    return <div>Error!</div>
  }
  const parsed = JSON.parse(JSON.stringify(data[0]['data']))
  return (
    <div>
      <img id='logo-left' src={!lightMode ? ThemeImage.DARK : ThemeImage.LIGHT} />
      <img id='logo-right' src={!lightMode ? ThemeImage.DARK : ThemeImage.LIGHT} />
      <div className='container position-relative'>
        <h1>Ripsters - Proposte progetti Open Source</h1>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <Button
              id='button-toggle-theme'
              variant={!lightMode ? 'light' : 'dark'}
              className='position-absolute'
              onClick={() => {
                setLightMode(!lightMode)
                changeTheme(lightMode ? Themes.dark : Themes.light)
              }}
            >
              {!lightMode ? 'Light' : 'Dark'}
            </Button>
          )}
        </ThemeContext.Consumer>
        <h4>
          Se vuoi proporre un tuo progetto compila il{' '}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSc3NmWUpO5dX3tztCy-W6bs3eBTX17aNxdhfP9C5PSUjhPx3g/viewform'>
            form
          </a>
        </h4>
        {parsed.map((p: SheetCols) => {
          return entry(p)
        })}
      </div>
      <footer className='footer mt-auto py-3'>
        <div className='container'>
          <span className='text-muted'>
            <a href='https://github.com/RIP-Comm/rip-oss'>Source code </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
