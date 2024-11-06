import {useEffect, useState} from "react";
import axios from "axios";

export const useCharacters = (): null | CharacterType[] => {
    const [characters, setCharacters] = useState<null | CharacterType[]>(null)

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacters(res.data.results))
    }, []);

    return characters
}

//types
export type CharacterType = {
    id: number
    name: string
    image: string
}