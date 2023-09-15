import axios from "axios";
interface IParams {
    characterId?: string;
}

export async function getCharacterById(params: IParams) {
    const { characterId } = params;
    try {
        const res = await axios.get(
            `https://api.jikan.moe/v4/characters/${characterId}/full`
        );
        return res.data.data;
    } catch (error: any) {
        throw new Error(error);
    }
}
