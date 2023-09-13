"use client";
import AnimeCard from "@/components/animelist/AnimeCard";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import qs from "query-string";
import ReactPaginate from "react-paginate";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface Props {
    filters: {
        sort?: string;
        order_by: string;
        status?: string;
    };
}

const AnimeListClient: FC<Props> = ({ filters }) => {
    const [animes, setAnimes] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        const getAnime = async () => {
            const baseUrl = "https://api.jikan.moe/v4/anime";
            const searchFilters: any = {
                status: filters.status,
                order_by: filters.order_by,
                sort: filters.sort,
                page: currentPage,
                sfw: true,
            };

            const searchQueryString = qs.stringify(searchFilters);
            const searchUrl = `${baseUrl}?${searchQueryString}`;
            console.log(searchUrl);

            try {
                const res = await axios.get(searchUrl);
                setAnimes(res.data.data);
                setLastPage(res.data.pagination.last_visible_page);
                console.log("done");
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        getAnime();
    }, [animes, currentPage]);

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected + 1);
    };

    return (
        <>
            <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-12 justify-center">
                {animes?.map((anime) => (
                    <AnimeCard
                        key={anime.mal_id}
                        id={anime.mal_id}
                        name={anime.titles[0].title}
                        image={anime.images.jpg.large_image_url}
                        genres={anime.genres}
                        score={anime.score}
                        scoredby={anime.scored_by}
                        duration={anime.duration}
                        episodes={anime.episodes}
                    />
                ))}
            </div>

            {animes?.length > 0 && (
                <div className="flex flex-row items-center justify-center w-full mt-12">
                    <ReactPaginate
                        nextLabel={
                            <MdOutlineNavigateNext size={20} color="#ffffff" />
                        }
                        breakLabel=". . ."
                        previousLabel={
                            <MdOutlineNavigateBefore
                                size={20}
                                color="#ffffff"
                            />
                        }
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={lastPage}
                        containerClassName={
                            "flex flex-row items-center justify-center gap-3"
                        }
                        pageClassName={
                            "flex items-center justify-center shadow-md"
                        }
                        pageLinkClassName={
                            "text-lg font-semibold text-primary-1 border-[1px] border-primary-1 leading-5 py-2 px-3"
                        }
                        activeClassName={
                            "flex items-center justify-center shadow-md"
                        }
                        activeLinkClassName={
                            "text-lg font-semibold text-white-1 bg-primary-1 leading-5 py-2 px-3"
                        }
                        previousClassName={
                            "flex items-center justify-center shadow-md mr-4"
                        }
                        nextClassName={
                            "flex items-center justify-center shadow-md ml-4"
                        }
                        previousLinkClassName={
                            "bg-primary-1 hover:bg-primary-2 leading-5 py-2 px-3"
                        }
                        nextLinkClassName={
                            "bg-primary-1 hover:bg-primary-2 leading-5 py-2 px-3"
                        }
                        disabledClassName={"opacity-50"}
                        disabledLinkClassName={"opacity-50"}
                        breakLinkClassName={
                            "text-lg font-semibold text-primary-1 leading-5 py-2 px-3"
                        }
                    />
                </div>
            )}
        </>
    );
};
export default AnimeListClient;
