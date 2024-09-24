import React, { useState } from 'react';

function Country() {
  
  const [posts, setPosts] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);  
  const postsPerPage = 10; 

 
  const fetchMorePosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

   
    const newPosts = data.slice(loadedCount, loadedCount + postsPerPage);

    
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);

    setLoadedCount(loadedCount + postsPerPage);
  };

  return (
    <div>
      <button onClick={fetchMorePosts}>Load More Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
