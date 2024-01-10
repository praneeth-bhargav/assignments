import React, { useState } from "react";
import Card from "./components/Card";
import instagramIcon from './assets/instagram.svg'
import twitterIcon from './assets/twitter.svg'
import linkedinIcon from './assets/linkedin.svg'
import data from './data/index'
import {produce} from "immer"
const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setcontent] = useState(data.content);
  const [twitter,setTwitter]=useState({isVisible:false,text:""});
  const [instagram,setInstagram]=useState({isVisible:false,text:""});
  const [linkedin,setLinkedin]=useState({isVisible:false,text:""});
  return (
    <div className="">
      <div className="grid grid-cols-4 items-stretch bg-gray-800 min-h-screen h-full gap-x-4 gap-y-2 p-2  ">
        <div className="min-h-48 flex flex-col gap-y-2 col-span-1 max-h-screen row-span-3 bg-gray-700 justify-center items-center ">
          <input type="text" placeholder='sldjf;l' className='bg-transparent outline-none' />
          <input
            value={name}
            placeholder="Name"
            spellCheck="false"
            type="text "
            className="py-1 px-2 m-2 rounded-md min-w-36 w-48 focus:border-blue-600 border-gray-700 border-2 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
          value={description}
            placeholder="Description"
            spellCheck="false"
            type="text"
            className="py-1 px-2 m-2 rounded-md min-w-36 w-48 h-24 focus:border-blue-600 border-2 border-gray-700 outline-none"
            onChange={(e) => setDescription(e.target.value)}
          />
          {twitter.isVisible && <input
            value={twitter.text}
            placeholder="Twitter"
            spellCheck="false"
            type="text "
            className="py-1 px-2 m-2 rounded-md min-w-36 w-48 focus:border-blue-600 border-gray-700 border-2 outline-none"
            onChange={(e) => setTwitter(produce(obj=>{
              obj.text=e.target.value;
            }))}
          />}
          {instagram.isVisible && <input
            value={instagram.text}
            placeholder="Instagram"
            spellCheck="false"
            type="text "
            className="py-1 px-2 m-2 rounded-md min-w-36 w-48 focus:border-blue-600 border-gray-700 border-2 outline-none"
            onChange={(e) => setInstagram(produce(obj=>{
              obj.text=e.target.value;
            }))}
          />}
          {linkedin.isVisible && <input
            value={linkedin.text}
            placeholder="Linkedin"
            spellCheck="false"
            type="text "
            className="py-1 px-2 m-2 rounded-md min-w-36 w-48 focus:border-blue-600 border-gray-700 border-2 outline-none"
            onChange={(e) => setLinkedin(produce(obj=>{
              obj.text=e.target.value;
            }))}
          />}
          <div className="flex w-full justify-center items-center gap-x-1">
            <span className="w-1/6 h-[1px] bg-slate-500"></span>
            <h2 className="text-xs text-white">Add you Social Media Handles</h2>
            <span className="w-1/6 h-[1px] bg-slate-500"></span>
          </div>
          <div className="flex place-content-center gap-4">
            <img src={twitterIcon} alt="" onClick={()=>setTwitter(produce(obj=>{
              obj.isVisible=true;
            }))} className='w-8 h-8 rounded-md cursor-pointer'>
            </img>
            <img src={instagramIcon} alt="" onClick={()=>setInstagram(produce(obj=>{
              obj.isVisible=true;
            }))} className='w-8 h-8 rounded-md cursor-pointer'>
            </img>
            <img src={linkedinIcon} alt="" onClick={()=>setLinkedin(produce(obj=>{
              obj.isVisible=true;
            }))} className='w-8 h-8 rounded-md cursor-pointer'>
            </img>
          </div>
          <button
            onClick={() =>{
              setcontent(produce(obj=>{
                 obj.push({name,description,socialMedia:{
                  instagram:instagram.text,
                  linkedin:linkedin.text,
                  twitter:twitter.text
                 }})
              }));
            }}
            className="px-2 py-1 font-poppins text-white bg-cyan-950 mt-1 rounded-xl"
          >
            Submit
          </button>
        </div>
          {
            
            content.map((item,i)=>{
              return <Card key={i} name={item.name} description={item.description} socialMedia={item.socialMedia} url={`https://source.unsplash.com/random/400x400?${i},white`} />
              
            })
          }
      </div>
    </div>
  );
};
const socialMediaInput=()=>{
  return (
    <div></div>
  );
}
export default App;
