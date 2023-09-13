import Container from "@/components/Container";
import AnimeListClient from "@/components/animelist/AnimeListClient";

const page = () => {
    const airingFilters = {
        order_by: "score",
        sort: "desc",
    };
    return (
        <div className="w-full flex justify-center mt-10">
            <Container>
                <h1 className="text-3xl font-bold text-black-2 mb-10">
                    Top Anime
                </h1>
                <AnimeListClient filters={airingFilters} />
            </Container>
        </div>
    );
};

export default page;
