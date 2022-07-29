/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import './App.css';
import entry from './components/entry';
import { sheetCols } from './types/type';
import useGoogleSheets from 'use-google-sheets';


const App = () => {

  const [data, setData] = useState<sheetCols[]>([] as sheetCols[]);

  if (process.env.NODE_ENV == 'development') {

    const getData = () => {
      import('./assets/response.mock.json').then((response: any) => {
        const keys: string[] = response.keys;
        const data: [][] = response.data;
        const result: sheetCols[] = [];

        for (const obj of data) {
          const objMap: Map<string, any> = new Map<string, any>();
          for (let i = 0; i < keys.length; i++) {
            objMap.set(keys[i], obj[i]);
          }
          result.push(Object.fromEntries(objMap) as sheetCols);
        }

        setData(result);
      });
    };

    useEffect(() => {
      getData();
    }, []);
  } else {
    const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY !,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID !
    });

    if (loading) {
      return <div></div>;
    }

    if (error) {
      return <div>Error!</div>;
    }
    setData(JSON.parse(JSON.stringify(data[0]['data'])));
  }

  return (
    <div>
      <div className="container">
        <h1>Ripsters - Proposte progetti Open Source</h1>
        <h4>
          Se vuoi proporre un tuo progetto compila il{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3NmWUpO5dX3tztCy-W6bs3eBTX17aNxdhfP9C5PSUjhPx3g/viewform">
            form
          </a>
        </h4>
        {data.map((p: sheetCols) => {
          return entry(p);
        })}
      </div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">
            <a href="https://github.com/matteasu/rip-oss">Source code </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
