import { useEffect, useState } from "react";
import NewsApi from "../api/NewsApi";
import MainNewsCard from "../components/MainNewsCard";
import CardNews from "../components/CardNews";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";

export default function Home() {
  const [dataArticles, setDataArticles] = useState(null);
  const [dataBlogs, setDataBlogs] = useState(null);
  const [isError, setIsError] = useState(false);
  const [exhibitionNews, setExhibitionNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getDataArticles() {
    try {
      setIsLoading(true);
      const responseArticles = await NewsApi(`https://api.spaceflightnewsapi.net/v4/articles/?limit=5`);
      setIsLoading(false);
      const articleExhibition = responseArticles.data.results.shift();
      setDataArticles(responseArticles.data.results);
      setExhibitionNews(articleExhibition);
    } catch (error) {
      setIsError(true);
      console.error("Home Articles Error: " + error);
    }
  }

  async function getDataBlogs() {
    try {
      const responseBlogs = await NewsApi(`https://api.spaceflightnewsapi.net/v4/blogs/?limit=10`);
      setDataBlogs(responseBlogs.data.results);
    } catch (error) {
      setIsError(true);
      console.error("Home Blogs Error: " + error);
    }
  }

  useEffect(() => {
    getDataArticles();
    getDataBlogs();
  }, [])

  if(isLoading) {
    return <Loading/>;
  }

  if(isError) {
    return <MessageError />
  }

  return (
    <main className="px-1 md:px-4">
      <h1 className="text-4xl py-4 text-center">News up to date</h1>

      <h2 className="font-bold text-lg py-4 text-center">See news, articles, blogs and reports here. See the most diverse and up-to-date news to date</h2>

      <div className="grid grid-cols-8">
        <section className="col-start-1 col-end-9 md:col-start-1 md:col-end-7">
          {exhibitionNews.url && <MainNewsCard exhibitionNews={exhibitionNews} />}

          <section className="md:flex md:flex-col md:items-center grid justify-items-center grid-cols-auto-fit gap-1 py-6">
            <CardNews data={dataBlogs} width="md:w-3/4"/>
          </section>
        </section>

        <section className="col-start-1 col-end-9 grid grid-cols-2 sm:justify-items-center sm:grid-cols-auto-fit gap-2 md:col-start-7 md:col-end-9 md:flex md:flex-col md:items-center md:border-none py-2 border-t border-black">
          <CardNews data={dataArticles} width="md:w-3/4"/>
        </section>
      </div>
    </main>
  )
}