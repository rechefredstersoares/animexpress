"use client";
import React, { useState, useEffect, FC } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import qs from "query-string";
import axios from "axios";
import {
    orderOptions,
    sortOptions,
    statusOptions,
    typeOptions,
} from "./filterOptions";
import FilterSelect from "./FilterSelect";
import clsx from "clsx";

interface FilterState {
    type?: { value: string; label: string };
    status?: { value: string; label: string };
    order?: { value: string; label: string };
    sort?: { value: string; label: string };
}

const initialFilterState: FilterState = {
    type: undefined,
    status: undefined,
    order: { value: "popularity", label: "Popularity" },
    sort: { value: "asc", label: "Ascending" },
};

interface Props {
    onSearchResults: (results: any[]) => void;
    currentPage?: number;
    setLastPage: (num: number) => void;
}

const SearchArea: FC<Props> = ({
    onSearchResults,
    currentPage,
    setLastPage,
}) => {
    const [filterState, setFilterState] =
        useState<FilterState>(initialFilterState);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInitiated, setSearchInitiated] = useState(false);

    const handleSearch = async () => {
        setSearchInitiated(true);
        const baseUrl = "https://api.jikan.moe/v4/anime";

        const searchFilters: any = {
            ...(filterState.type && { type: filterState.type.value }),
            ...(filterState.status && { status: filterState.status.value }),
            ...(filterState.order && { order_by: filterState.order.value }),
            ...(filterState.sort && { sort: filterState.sort.value }),
            q: searchQuery,
            page: currentPage,
            sfw: true,
        };

        const searchQueryString = qs.stringify(searchFilters);
        const searchUrl = `${baseUrl}?${searchQueryString}`;

        console.log(searchUrl);

        try {
            const res = await axios.get(searchUrl);
            if (res && res.data) {
                onSearchResults(res.data.data);
                setLastPage(res.data.pagination.last_visible_page);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setSearchInitiated(false);
        onSearchResults([]);
    };

    useEffect(() => {
        if (searchInitiated) {
            handleSearch();
        }
    }, [filterState, searchInitiated, currentPage]);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="border-[1px] border-primary-1 relative flex flex-row items-center bg-white-2 rounded-full p-1 pl-4 w-[400px] shadow-lg">
                <input
                    type="text"
                    placeholder="search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none focus:outline-none bg-transparent flex-1"
                />
                <button
                    onClick={handleSearch}
                    type="button"
                    className=" p-1 rounded-full bg-primary-1 hover:bg-primary-2"
                >
                    <IoSearch color="#ffffff" size={28} />
                </button>
                {searchInitiated && (
                    <button
                        onClick={handleClearSearch}
                        type="button"
                        className="flex flex-row absolute top-[10px] right-[-60px] ml p-1 rounded-sm bg-red-500 hover:bg-red-300"
                    >
                        <MdOutlineClear color="#ffffff" size={16} />
                        <span className="text-xs text-white-1">clear</span>
                    </button>
                )}
            </div>

            <div className="flex items-center justify-between w-full mt-10">
                <FilterSelect
                    options={typeOptions}
                    placeholder="Type"
                    value={filterState.type}
                    onChange={(selectedOption: any) =>
                        setFilterState({ ...filterState, type: selectedOption })
                    }
                />
                <FilterSelect
                    options={statusOptions}
                    placeholder="Status"
                    value={filterState.status}
                    onChange={(selectedOption: any) =>
                        setFilterState({
                            ...filterState,
                            status: selectedOption,
                        })
                    }
                />
                <FilterSelect
                    options={orderOptions}
                    placeholder="Order By"
                    value={filterState.order}
                    onChange={(selectedOption: any) =>
                        setFilterState({
                            ...filterState,
                            order: selectedOption,
                        })
                    }
                />
                <FilterSelect
                    options={sortOptions}
                    placeholder="Sort"
                    value={filterState.sort}
                    onChange={(selectedOption: any) =>
                        setFilterState({ ...filterState, sort: selectedOption })
                    }
                />
            </div>
        </div>
    );
};

export default SearchArea;
