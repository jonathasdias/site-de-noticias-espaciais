import { useRef, useEffect } from "react";

export default function  PaginationButtons({page, setPage, totalPages}) {

    const btnPrev = useRef();
    const btnRight = useRef();

    useEffect(()=> {
        if (page > 1) {
            btnPrev.current.disabled = false;
        }else {
            btnPrev.current.disabled = true;
        }

        if (page < totalPages) {
            btnRight.current.disabled = false;
        }else {
            btnRight.current.disabled = true;
        }
    },[page])

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 10);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 10);
        }
    };

    return(
        <section className="bg-slate-600 p-4">
            <div className="m-auto w-32 flex gap-4">
                <button onClick={handlePrevPage} ref={btnPrev} className="bg-gray-800 text-white p-2 hover:bg-gray-700 disabled:bg-gray-400 disabled:opacity-70">Prev</button>
                <button onClick={handleNextPage} ref={btnRight} className="bg-gray-800 text-white p-2 hover:bg-gray-700 disabled:bg-gray-400 disabled:opacity-70">Next</button>
            </div>
        </section>
    )
}