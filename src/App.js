import React, {useState, useEffect} from 'react';
import axios from "axios";

function App(){

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(()=> {

    const loadPost = async () =>{
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
      setPosts(response.data);
      setLoading(false);
    }

    loadPost();
  }, []);

  return(
    <>
      {loading ? (<h1>Loading...</h1>) : (posts.map(items =>  <h4>{items.title}</h4>))}
    </>
  )
  
}

export default App;
