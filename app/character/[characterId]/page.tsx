import { getCharacterById } from "@/actions/character.actions";
import Container from "@/components/Container";
import CharacterClient from "./CharacterClient";

interface IParams {
    characterId?: string;
}

export default async function Anime({ params }: { params: IParams }) {
    const char = await getCharacterById(params);

    return (
        <div className="w-full flex flex-col items-center justify-center mt-12">
            <Container>
                <CharacterClient char={char} />
            </Container>
        </div>
    );
}
