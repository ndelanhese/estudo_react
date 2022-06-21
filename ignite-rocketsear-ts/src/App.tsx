import React from 'react';
import Post from './components/Post';
import Header from './components/Header';

import './global.css';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';


const posts = [

  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/ndelanhese.png',
      name: 'Nathan Delanhese',
      role: 'CTO @Delanhese'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },

    ],
    publishedAt: new Date('2022-06-19 20:00:15'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://camo.githubusercontent.com/2ff45551799f40372ce88af54aa7343623620e9896276f93d21173d98c7b6351/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3438303532383537373732393635383838302f3938373835393235373230303336393637342f436170747572615f64655f74656c615f323032322d30362d31385f3230313930342e706e67',
      name: 'Pedro Pedroso',
      role: 'Developer @Delanhese'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },

    ],
    publishedAt: new Date('2022-05-18 21:00:15'),
  },
];

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;






