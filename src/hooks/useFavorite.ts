import { useState } from "react";

const loadFavorites = (): string[] => {
  const value = localStorage.getItem("favorites");
  const favorites: string[] = value ? JSON.parse(value) : [];
  return favorites;
};

const saveFavorites = (favorites: string[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const useFavorite = (id: string) => {
  const [favorites, setFavorites] = useState<string[]>(() => loadFavorites());

  const favorite = favorites.includes(id);

  const handleRemoveFavorite = () => {
    const newFavorites = favorites.filter((element) => element !== id);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const handleAddFavorite = () => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
      saveFavorites(newFavorites);
    }
  };

  return {
    favorite,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
  };
};

export default useFavorite;
