import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

type Message = {
    id: string
    text: string
    user: {
        name: string
        avatar_url: string
    }
}

export function MessageList(){
    const [messages, setMessages] = useState<Message[]>([])
    
    useEffect(() => {
        api.get<Message[]>("messages/last3").then(response => {
            setMessages(response.data)
        })
    }, [])

    return(
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="Dowhile 20221" />

            <ul className={styles.MessageList}>
                {messages.map(message => (
                    <li className={styles.Message} key={message.id}>
                        <p className={styles.MessageContent}>{message.text}</p>
                        <div className={styles.MessageUser}>
                            <div className={styles.UserImage}>
                                <img src={message.user.avatar_url} alt={message.user.name}/>
                            </div>
                            <span>{message.user.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}