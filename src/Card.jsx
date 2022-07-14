import React, { useState } from 'react';
import "./card.css";
import { Link , useParams } from "react-router-dom";
import posts from './Information/post';

const Card = (props) => {
    const { id } = useParams();
    const [render , setRender] = useState(false);
    const [likes , setLikes] = useState(props.likes)
    const handleClick = () => {
        setLikes(likes+1)
        setRender(true)
            setTimeout(() => {
                setRender(false)
            }, 500);
    }
    const imageClick=(event) =>{
        if(event.detail === 2){
            setRender(true)
            setTimeout(() => {
                setRender(false)
            }, 500);
            setLikes(likes+1)
        }
    }
    const commentClick = (id) =>{
        {
            for (let i = 0; i < posts.length; i++) {
              const element = posts[i];
              const result = posts.findIndex(res => res.id === (id));
              if(element.id === id){
                console.warn(element);
              }
              
            }
          }
    }

  return (
    <div className='main-card'>
        <div className='card-img'>
            <img src={props.image} alt="random one" onClick={imageClick} />
            {render && <i className="fa-solid fa-heart like-heart"/>}
        </div>
        <div className='card-info'>
            <h4>{props.caption}</h4>
        </div>
        <div className='card-button'>
            <button className='btn' onClick={handleClick}><div className='btn-info'><i className="fa-solid fa-heart" style={{ color:"rgb(11, 89, 137)"}}></i>{likes}</div></button>
            <Link to={`/comment/${props.id}`} onClick={()=>commentClick(props.id)}><button className='btn'><div className='btn-info'><i class="fa-solid fa-comment"></i>{props.comments}</div></button></Link>
        </div>
    </div>
  )
}

export default Card