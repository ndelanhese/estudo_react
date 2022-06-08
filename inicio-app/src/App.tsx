import { useState } from "react";
import { Tweet } from "./components/Tweet";

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
    <div>

    {tweets.map(tweets =>{
      return <Tweet text={tweets}/>
    })}

     <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App
