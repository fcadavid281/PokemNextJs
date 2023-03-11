
const nameLocalStorage: string = "favorites";

const getFavorites = (): number[] => {

    if (typeof window === 'object') {
        return JSON.parse(localStorage.getItem(nameLocalStorage) || '[]');
    }
    return [];

}

const toggleFavorite = (id: number) => {

    let favorite: number[] = getFavorites();

    if (favorite.includes(id)) {
        favorite = favorite.filter(pokeId => pokeId !== id);
    } else {
        favorite.push(id)
    }

    localStorage.setItem(nameLocalStorage, JSON.stringify(favorite));
}

const existInFavorite = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    const favorite: number[] = getFavorites();
    return favorite.includes(id);

}

const pokemon = (): number[] => {
    return JSON.parse(localStorage.getItem(nameLocalStorage) || '[]');
}


export default {
    toggleFavorite,
    existInFavorite,
    pokemon
}
