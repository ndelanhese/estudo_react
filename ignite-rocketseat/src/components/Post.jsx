import React from 'react';
import Avatar from './Avatar';
import Comments from './Comments';
import styles from './Post.module.css';

const Post = () => {
    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/ndelanhese.png" />

                    <div className={styles.authorInfo}>
                        <strong>
                            Nathan Delanhese
                        </strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='17 de junho as 08:13' dateTime="2022-06-17 08:13:13">
                    Publicado a 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    Fala galeraa 👋
                </p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p> 👉 {' '}
                    <a href='#'>
                        jane.design/doctorcare
                    </a>
                </p>
                <p>
                    <a href='#'>
                        #novoprojeto
                    </a>
                    {' '}
                    <a href='#'>
                        #nlw
                    </a>
                    {' '}
                    <a href='#'>
                        #rocketseat
                    </a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>
                    Deixe seu comentário
                </strong>
                <textarea placeholder='Deixe seu comentário' />
                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>

        </article>

    );
}

export default Post;