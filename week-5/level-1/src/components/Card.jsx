import React, { useRef, useState } from 'react'
import twitterIcon from '../assets/twitter.svg'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'
import editIcon from '../assets/edit.svg'
import { produce } from 'immer'
const Card = ({ name, description, socialMedia, url }) => {
  const [editName,setEditName]=useState({editing:false,content:name});
  const [editDesc,setEditDesc]=useState({editing:false,content:description});
  const ref=useRef(null);
  console.log(editName.editing);
  function handleEditName(){
    setEditName((prev) => {
      return {
        ...prev,
        editing:!prev.editing,
      }
    });
    // if(editName.ref)
    //   editName.ref.current.focus();
  }
  
  return (
    <div className={`bg-cover bg-center p-2 rounded-md bg-blue-800 h-48 flex flex-col justify-between overflow-auto self-start`}>
     
      <div>
        <div className="flex justify-between">
            {!editName.editing 
            ? <h1 className="text-white font-semibold font-poppins text-xl bg-black text-transparent bg-clip-text">{editName.content}</h1>
            :<input autoFocus type="text" ref={editName.ref} spellCheck={false} defaultValue={editName.content} className="border-b-2 outline-none w-2/3 border-red-800 bg-transparent font-poppins font-semibold text-xl" onChange={(event)=>{
              ref.current=event.target.value;
              console.log(ref.current);
            }}/>}
            
            {!editName.editing && <img src={editIcon} 
            alt="" 
            className='h-6 w-6 cursor-pointer'
            onClick={handleEditName}
            />}
            {
              editName.editing && <button onClick={()=>{
                console.log(ref.current);
                setEditName({
                  editing: false,
                  content: ref.current,
                });
                // ref.current=null;
              }}>s</button>
            }
            {
              editName.editing && <button onClick={()=>{
                setEditName({editing:false,content:editName.content});
                ref.current=null;
              }}>x</button>
            }
        </div>
        <div className="flex justify-between">
          {!editDesc.editing &&  <p className="text-gray-300 font-medium font-popins text-lg bg-black text text-transparent bg-clip-text">{description}</p>}
          {editDesc.editing && <input className='outline-none' value={name}/>}
        </div>
       
      </div>
      <div className="flex flex-row justify-center gap-x-8 ">
        <a href={`${socialMedia.twitter}`}>
          <img src={twitterIcon} alt="" className='w-8 h-8 rounded-md hover:cursor-pointer' />
        </a>
        <a href={`${socialMedia.instagram}`}>
        <img src={instagramIcon} alt="" className='w-8 h-8 rounded-md hover:cursor-pointer' />
        </a>
        <a href={`${socialMedia.linkedin}`}>
        <img src={linkedinIcon} alt="" className='w-8 h-8 rounded-md hover:cursor-pointer' />
        </a>

      
      </div>

      <img src={editIcon} alt="" className='h-6 w-6 cursor-pointer' />
    </div>
  );
}

export default Card
