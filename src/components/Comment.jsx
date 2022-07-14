import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import posts from '../Information/post';
import Card from '../Card';
import comments from '../Information/comment';

function Comment() {
    const { id } = useParams();
    const [selected , setSelected] = useState("");
    const [comm , setComm] = useState("")
    useEffect(()=>{
        { for (let i = 0; i < posts.length; i++) {
            const element = posts[i];
            // console.log(element);
            const result = posts.findIndex(res => res.id === (id));
            if(element.id === id){
              console.log(element);
              setSelected(element);
              console.log(selected);
            //   setComm(element.comment)
            //   break;
            }
          }
        }
    } , [])

    useEffect(()=>{
        { for (let i = 0; i < comments.length; i++) {
            const ele = comments[i];
            console.log(ele);
            // const result = comments.findIndex(res => res === (id));
            if(selected.code === ele){
            //   console.log(element);
            //   setSelected(element);
              setComm(ele)
            //   break;
            }
          }
        }
    } , [])


  return (
    <div className='comment-page'>
        <div className='comment-card'>
        {/* {console.log(selected.comment)} */}
        {/* {console.warn(comm)} */}
            <Card key={selected.id} image={selected.display_src} caption={selected.caption} likes={selected.likes} comments={selected.comments} id={selected.id} />
        </div>
        <div className='comments'>
            {/* {console.log(selected.comment?.map(c =>{
                return <h1>{c.props}</h1>
            }))} */}
        </div>
    </div>
  )
}

export default Comment