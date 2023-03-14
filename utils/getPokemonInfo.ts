import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


const getPokemonInfo = async (nameOrId: string) => {

    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId.toString().toLowerCase()}`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        };
    } catch (error) {
        return null;
    }

}


export {
    getPokemonInfo
}
