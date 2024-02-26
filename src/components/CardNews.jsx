export default function CardNews({data, width}) {
    return(
        <>
            {data && data.map((article)=> (
              <a href={article.url} key={article.id} className={width + " p-2 hover:shadow-md transition-all ease-out duration-700"}>

                <figure><img src={article.image_url} alt={article.title} /></figure>
                <h3 className="font-bold">{article.title}</h3>
                <p className="line-clamp-3 overflow-hidden overflow-ellipsis my-2">{article.summary}</p>
    
                <p className="text-xs flex justify-between flex-wrap gap-2">
                  <span><b>Published at:</b> {article.published_at}</span>
                  <span><b>Updated at:</b> {article.updated_at}</span>
                  <span><b>Site:</b> {article.news_site}</span>
                </p>
              </a>
            ))}
        </>
    )
}