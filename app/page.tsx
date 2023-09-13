import Container from "@/components/Container";
import HeroBanner from "@/components/HeroBanner";
import AiringFeat from "@/components/featured/AiringFeat";
import TopFeat from "@/components/featured/TopFeat";
import UpcomingFeat from "@/components/featured/UpcomingFeat";
import GenreFeat from "@/components/genreFeat/GenreFeat";
import Search from "@/components/search/Search";
import { FaGripLinesVertical } from "react-icons/fa";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <HeroBanner />
            <Container>
                <Search />
                <div className="mt-12">
                    {/* AIRING */}
                    <div className="mt-10">
                        <div className="flex flex-row items-center">
                            <FaGripLinesVertical size={24} color="#0cbc4d" />
                            <h2 className="text-2xl font-bold text-black-2 ml-1">
                                Airing Now
                            </h2>
                        </div>
                        <AiringFeat />
                    </div>

                    {/* TOP */}
                    <div className="mt-10">
                        <div className="flex flex-row items-center">
                            <FaGripLinesVertical size={24} color="#0cbc4d" />
                            <h2 className="text-2xl font-bold text-black-2 ml-1">
                                Top Anime
                            </h2>
                        </div>
                        <TopFeat />
                    </div>

                    {/* UPCOMING */}
                    <div className="mt-10">
                        <div className="flex flex-row items-center">
                            <FaGripLinesVertical size={24} color="#0cbc4d" />
                            <h2 className="text-2xl font-bold text-black-2 ml-1">
                                Upcoming Anime
                            </h2>
                        </div>
                        <UpcomingFeat />
                    </div>

                    {/* VARIOUS GENRES */}
                    <div className="mt-10">
                        <div className="flex flex-row items-center">
                            <FaGripLinesVertical size={24} color="#0cbc4d" />
                            <h2 className="text-2xl font-bold text-black-2 ml-1">
                                Anime by Genre
                            </h2>
                        </div>
                        {/* <GenreFeat /> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}
