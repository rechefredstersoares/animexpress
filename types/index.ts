export type Anime = {
    id: number;
    name: string;

    airedFrom?: string;
    airedTo?: string;
    airing?: boolean;

    duration?: string;
    episodes?: number;

    genres: any[];
    image: string;

    producers?: {}[];

    studios?: {}[];

    popularity?: number;
    rank?: number;
    rating?: string;
    score?: number;
    scoredby?: number;

    synopsis?: string;

    titles?: {}[];
    trailerUrl?: string;
    trailerImage?: string;

    type?: string;
    year?: number;
};

export type SelectOptionType = {
    value: string; // The value of the option (e.g., "tv", "movie")
    label: string; // The label or display text of the option (e.g., "TV", "Movie")
};

export type SetSelectOptionType = React.Dispatch<
    React.SetStateAction<SelectOptionType | null>
>;
