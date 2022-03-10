import './App.css';
import React from 'react';
import { ContainerMain, ContainerWhats, ContainerControl, ContainerMessage, ContainerConversa, ContainerConversaDireta } from './style.js'
import { useState } from 'react/cjs/react.development';

const App = () => {
  const [msgValue, setMsgValue] = useState('')
  const [userValue, setUserValue] = useState('')
  const [historyMessage, setHistoryMessage] = useState([])

  const enviar = (event) => {
    event.preventDefault()
    const newArrayConversa = {
      user: userValue,
      text: msgValue
    }

    const newArray = [newArrayConversa, ...historyMessage]

    setHistoryMessage(newArray)
    setUserValue('')
    setMsgValue('')

  }


  return (
    <ContainerMain>
      <ContainerWhats>
        <ContainerMessage>
          {historyMessage.map((conversa) => {
            if (conversa.user === 'eu') { return <ContainerConversaDireta> <p><strong>{conversa.user}</strong>: {conversa.text}</p></ContainerConversaDireta> } return <ContainerConversa> <p><strong>{conversa.user}</strong>: {conversa.text}</p></ContainerConversa>
          })
          }
        </ContainerMessage>
        <ContainerControl>
          <form onSubmit={enviar}>
            <input placeholder='Usuário' value={userValue} onChange={(event) => setUserValue(event.target.value)} />
            <input placeholder='Mensagem' value={msgValue} onChange={(event) => setMsgValue(event.target.value)} />
            <button>Enviar</button>
          </form>
        </ContainerControl>
      </ContainerWhats>
    </ContainerMain>
  );
}

export default App;
