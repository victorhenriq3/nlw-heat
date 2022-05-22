import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList(){
    return(
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="Dowhile 20221" />

            <ul className={styles.MessageList}>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, fugit sed at dicta voluptatem, recusandae saepe molestiae quo ipsam excepturi culpa similique id totam quis? Porro dicta hic accusantium eos!s</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/victorhenriq3.png" alt="" />
                        </div>
                        <span>Victor Henrique</span>
                    </div>
                </li>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, fugit sed at dicta voluptatem, recusandae saepe molestiae quo ipsam excepturi culpa similique id totam quis? Porro dicta hic accusantium eos!s</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/victorhenriq3.png" alt="" />
                        </div>
                        <span>Victor Henrique</span>
                    </div>
                </li>
                <li className={styles.Message}>
                    <p className={styles.MessageContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, fugit sed at dicta voluptatem, recusandae saepe molestiae quo ipsam excepturi culpa similique id totam quis? Porro dicta hic accusantium eos!s</p>
                    <div className={styles.MessageUser}>
                        <div className={styles.UserImage}>
                            <img src="https://github.com/victorhenriq3.png" alt="" />
                        </div>
                        <span>Victor Henrique</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}