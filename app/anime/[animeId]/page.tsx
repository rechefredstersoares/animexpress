import { getAnimeById } from "@/actions/anime.actions";
import Container from "@/components/Container";
import SingleAnime from "./SingleAnime";
import AnimeCharacters from "@/components/animeCharacters/AnimeCharacters";
import AnimeImages from "./AnimeImages";

interface IParams {
    animeId?: string;
}

export default async function Anime({ params }: { params: IParams }) {
    const anime = await getAnimeById(params);

    return (
        <div className="w-full flex flex-col items-center justify-center mt-12">
            <Container>
                <SingleAnime
                    id={anime.mal_id}
                    name={anime.titles[0].title}
                    anime={anime}
                />
                <AnimeCharacters id={anime.mal_id} />
                <AnimeImages id={anime.mal_id} />
            </Container>
        </div>
    );
}
