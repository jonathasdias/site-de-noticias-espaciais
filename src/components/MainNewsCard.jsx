import { useState } from "react";

export default function MainNewsCard({exhibitionNews}) {
    const [hovered, setHovered] = useState(false);
  
    return (
      <a href={exhibitionNews.url} onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}>
        <figure className={"relative md:h-[36rem] h-80"}>
  
          <p className={`${hovered ? "opacity-90" : "opacity-0"} bg-black text-white text-sm w-full p-4 transition-all ease-out duration-500 flex justify-between flex-wrap gap-2 absolute top-0 left-0`}>
            <span><b>Published at:</b> {exhibitionNews.published_at}</span>
            <span><b>Updated at:</b> {exhibitionNews.updated_at}</span>
            <span><b>Site:</b> {exhibitionNews.news_site}</span>
          </p>
  
          <img src={exhibitionNews.image_url} alt={exhibitionNews.title} className="h-full"/>
  
          <p className={`${hovered ? "opacity-90" : "opacity-0"} w-full bg-black text-white p-4 transition-all ease-out duration-500 absolute bottom-0 left-0`}>{exhibitionNews.summary}</p>
  
        </figure>
      </a>
    )
  }