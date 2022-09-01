import React from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import MusicCardFavorite from '../components/MusicCardFavorite';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = { favoriteSongs: [] };
  }

  componentDidMount() {
    this.getSavedMusic();
  }

  getSavedMusic =  () => {
    const data = getFavoriteSongs();
    this.setState({ favoriteSongs: [...data] });
  };

  isFavorite = (trackId) => {
    const { favoriteSongs } = this.state;
    if (favoriteSongs.length === 0) return false;
    return favoriteSongs
      .map((song) => song.trackId)
      .includes(trackId);
  }

  changeFavorite = (song, trackID) => {
    if (this.isFavorite(trackID)) {
      removeSong(song);
      this.getSavedMusic();
    }
    if (!this.isFavorite(trackID)) {
      addSong(song);
      this.getSavedMusic();
    }
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <>
        <Header />
          <div id="favorites">
            <MusicCardFavorite
              musics={ favoriteSongs }
              changeFavorite={ this.changeFavorite }
              isFavorite={ this.isFavorite }
            />
          </div>
      </>
    );
  }
}

export default Favorites;
