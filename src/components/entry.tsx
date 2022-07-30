/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SheetCols } from '../types/type';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
function entry(e: SheetCols) {
  const re = new RegExp('[https://]*[a-zA-Z]+.com+/')
  const githubBaseURL = 'https://github.com/'
  const githubNick = e['Link account GitHub'].replace(re, '');
  const badgeMaintainer = <Badge>Maintainer</Badge>
  const badgeContributor = <Badge bg="secondary">Contributor</Badge>
  return (
    <Card className='mt-4 mb-4 mb-md-3'>
      <Card.Body>
        <Card.Title>{e['Categorizza la tua idea in una frase']}</Card.Title>
        <Card.Subtitle>
          {githubNick != '' ? (
            <a href={githubBaseURL + githubNick}>{e['Username Discord']}</a>
          ) : (
            e['Username Discord']
          )}
          &nbsp;
          {e['Vuoi essere il mantainer?'] == 'Voglio diventare maintainer'
            ? badgeMaintainer
            : badgeContributor}
          <br />
          Esperienza OSS: {e['Esperienza in ambito Open-source?']}
        </Card.Subtitle>
        <Card.Text>
          {e['Descrivi la tua idea in modo dettagliato'] == '' ? (
            e['descr_ext']
          ) : (
            <a href={e['Descrivi la tua idea in modo dettagliato']}>Descrizione</a>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Esistono già dei progetti simili? {e['Esisteno già progetti simili?']}
        <br/>
        Competenze Richieste: {e['Sono richieste competenze specifiche?']}
        <br />
        Linguaggi e tecnologie: {e['Linguaggi e tecnologie']}
      </Card.Footer>
    </Card>
  )
}

export default entry;
