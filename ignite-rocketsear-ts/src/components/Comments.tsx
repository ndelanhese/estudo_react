import { ThumbsUp, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import Avatar from './Avatar';
import styles from './Comments.module.css';

interface CommentsProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


const Comments = ({ content, onDeleteComment }: CommentsProps) => {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }


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

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>
                    {content}
                </p>
            </div>
            <footer>
                <button onClick={handleLikeComment}><ThumbsUp />
                    Aplaudir
                    <span>{likeCount}</span>
                </button>


            </footer>
        </div>


    </div>



    );
}

export default Comments;