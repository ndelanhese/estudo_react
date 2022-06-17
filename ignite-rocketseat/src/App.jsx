import React from 'react';
import Post from './components/Post';
import Header from './components/Header';

import './global.css';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nathan Delanhese"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, incidunt repudiandae inventore consequatur esse quam neque ab dolorem veniam blanditiis eveniet expedita quisquam fugiat eius nulla iure harum vitae! Veniam!"
          />

          <Post
            author="Raphael Delanhese"
            content="Esse é um texto somente para ver se funciona ou não"
          />
        </main>
      </div>
    </>
  );
}

export default App;






