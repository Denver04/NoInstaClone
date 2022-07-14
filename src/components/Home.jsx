import React from 'react';
import Navbar from '../Navbar';
import posts from '../Information/post';
import Card from '../Card';

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
      <div className="main-wrap">
      {
        posts.map(post=>{
            {/* console.warn(post.id) */}
        return <Card key={post.id} image={post.display_src} caption={post.caption} likes={post.likes} comments={post.comments} id={post.id} />
        })
      }
      </div>
    </div>
  )
}

export default Home