import { useEffect, useState } from "react";

export default function MainNewsCard({exhibitionNews}) {
  const [hovered, setHovered] = useState(false);
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setHovered(true);
      return;
    }
    setHovered(false);
  }, [screenWidth]);

  const handleMouseEnter = () => {
    if (screenWidth >= 768) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (screenWidth >= 768) {
      setHovered(false);
    }
  };
  
  return (
    <a href={exhibitionNews.url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <figure className={"relative md:h-[36rem] h-80"}>

        <p className={`${hovered ? "opacity-70 md:opacity-90" : "opacity-0"} bg-black text-white text-sm w-full p-4 transition-all ease-out duration-500 flex justify-between flex-wrap gap-2 absolute top-0 left-0`}>
          <span><b>Published at:</b> {exhibitionNews.published_at}</span>
          <span><b>Updated at:</b> {exhibitionNews.updated_at}</span>
          <span><b>Site:</b> {exhibitionNews.news_site}</span>
        </p>

        <img src={exhibitionNews.image_url} alt={exhibitionNews.title} className="h-full"/>

        <p className={`${hovered ? "opacity-70 md:opacity-90" : "opacity-0"} line-clamp-2 md:line-clamp-3 overflow-hidden overflow-ellipsis w-full bg-black text-white px-4 py-1 transition-all ease-out duration-500 absolute bottom-0 left-0`}>{exhibitionNews.summary}</p>
      </figure>
    </a>
  )
}