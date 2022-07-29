/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import './App.css';
import entry from './components/entry';
import useGoogleSheets from 'use-google-sheets';
import {sheetCols} from './types/type'


const App = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY !,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID !,
  });

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  const parsed = JSON.parse(JSON.stringify(data[0]['data']))


  return (
    <div className='container'>
      <h1>Ripsters - Proposte progetti Open-Source</h1>
      <h4>
        Se vuoi proporre un tuo progetto compila il{' '}
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc3NmWUpO5dX3tztCy-W6bs3eBTX17aNxdhfP9C5PSUjhPx3g/viewform'>
          form
        </a>
      </h4>
      {parsed.map((p: sheetCols) => {
        return entry(p)
      })}
    </div>
  )
};

export default App;
