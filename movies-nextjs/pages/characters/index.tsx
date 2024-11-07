import styles from "@/styles/Home.module.css";
import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {Navbar} from "@/components/Navbar/Navbar";

export default function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'} />
            <div className={`${styles.page} `}>
                <Navbar />
                {characters && characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}

