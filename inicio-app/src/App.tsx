import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';
import { Routes } from "./Routes";
function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])
function createTweet(){
setTweets([...tweets, 'Tweet 5'])
}
  return (

    <Routes/>

    // <div>
    // {tweets.map(tweets =>{
    //   return <Tweet text={tweets}/>
    // })}
    //  <button
    //   onClick={createTweet}
    //   style={{
    //     backgroundColor: "blue",
    //     border: 0,
    //     padding: '6px 12px',
    //     color: "white"
    //   }} >
    //    Adicionar Tweet</button>
    // </div>
  );
}
export default App