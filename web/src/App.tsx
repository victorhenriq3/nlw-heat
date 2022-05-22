import { useContext, useState } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './context/auth'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
      
    </main>
  )
}
