import { getCharacterById } from "@/actions/character.actions";
import Container from "@/components/Container";

export default async function Character() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-12">
            <Container>character</Container>
        </div>
    );
}
