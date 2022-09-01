const FAVORITE_SONGS_KEY = 'favorite_songs';

const readFavoriteSongs = () => JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));

const saveFavoriteSongs = (favoriteSongs) => localStorage
  .setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

export const getFavoriteSongs = () => {
  const favoriteSongs = readFavoriteSongs();
  if (favoriteSongs === null) return [];
  return favoriteSongs;
};

export const addSong = (song) => {
  if (song) {
    const favoriteSongs = readFavoriteSongs();
    if (favoriteSongs === null) saveFavoriteSongs([ song]);
    else saveFavoriteSongs([...favoriteSongs, song]);
  }
};

export const removeSong = (song) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s) => s.trackId !== song.trackId));
};
