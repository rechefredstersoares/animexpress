import axios from "axios";
interface IParams {
    animeId?: string;
}

export async function getAnimeById(params: IParams) {
    const { animeId } = params;
    try {
        const res = await axios.get(
            `https://api.jikan.moe/v4/anime/${animeId}/full`
        );
        return res.data.data;
    } catch (error: any) {
        throw new Error(error);
    }
}
