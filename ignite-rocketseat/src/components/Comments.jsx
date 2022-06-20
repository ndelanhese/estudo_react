import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import Avatar from './Avatar';
import styles from './Comments.module.css';

const Comments = () => {
    return (<div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/ndelanhese.png" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Nathan Delanhese</strong>
                        <time title='17 de junho as 08:13' dateTime="2022-06-17 08:13:13">
                            Cerca de 1h atrás
                        </time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>
                    Muito bom Devan, Parabéns 👏👏
                </p>
            </div>
            <footer>
                <button><ThumbsUp />
                    Aplaudir
                    <span>20</span>
                </button>


            </footer>
        </div>


    </div>



    );
}

export default Comments;