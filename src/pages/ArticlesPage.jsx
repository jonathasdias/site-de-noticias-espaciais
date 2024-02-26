import { useState, useEffect } from "react";
import NewsApi from "../api/NewsApi";
import CardNews from "../components/CardNews";
import MainNewsCard from "../components/MainNewsCard";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";
import PaginationButtons from "../components/PaginationButtons";

export default function ArticlesPage() {
    const [data, setData] = useState(null);
    const [exhibitionNews, setExhibitionNews] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(10);
    const limitNewsPerPage = 10;
    const typeOfNews = "articles";

    useEffect(()=> {
        async function getApi() {
            try {
                setIsLoading(true);
                const res = await NewsApi(`https://api.spaceflightnewsapi.net/v4/${typeOfNews}/?offset=${page}&limit=${limitNewsPerPage}`);
                setIsLoading(false);
                const articleExhibition = res.data.results.shift();
                setData(res.data.results);
                setTotalPages(res.data.count);
                setExhibitionNews(articleExhibition);
            } catch (error) {
                setIsError(true);
                console.error(error);
            }
        }
        getApi();
    },[page])

    if(isLoading) {
        return <Loading/>;
    }

    if(isError) {
        return <MessageError />
    }

    return(
        <main className="p-4">
            {exhibitionNews.url && <MainNewsCard exhibitionNews={exhibitionNews}/>}

            <section className="grid justify-items-center grid-cols-2 gap-1 sm:grid-cols-auto-fill my-6">
                <CardNews data={data} />
            </section>

            {!isLoading && <PaginationButtons page={page} setPage={setPage} totalPages={totalPages} />}
        </main>
    )
}