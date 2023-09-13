"use client";
import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import SearchResultArea from "./SearchResultArea";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Search = () => {
    const [searchAnimes, setSearchAnimes] = useState<any[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const handleSearchResults = (results: any) => {
        setSearchAnimes(results);
    };

    const handleSetLastPage = (num: number) => {
        setLastPage(num);
    };

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected + 1);
    };

    return (
        <div className="w-full mt-16">
            <SearchArea
                onSearchResults={handleSearchResults}
                currentPage={currentPage}
                setLastPage={handleSetLastPage}
            />

            {searchAnimes && <SearchResultArea animes={searchAnimes} />}

            {searchAnimes.length > 0 && (
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
        </div>
    );
};

export default Search;
