import Container from "@/components/Container";
import AnimeListClient from "@/components/animelist/AnimeListClient";

const page = () => {
    const airingFilters = {
        status: "airing",
        order_by: "popularity",
        sort: "asc",
    };
    return (
        <div className="w-full flex justify-center mt-10">
            <Container>
                <h1 className="text-3xl font-bold text-black-2 mb-10">
                    Airing Now
                </h1>
                <AnimeListClient filters={airingFilters} />
            </Container>
        </div>
    );
};

export default page;
