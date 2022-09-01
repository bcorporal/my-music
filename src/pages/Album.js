import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = { musics: [], loading: true, favoriteSongs: [] };
  }

  componentDidMount() {
    this.getSavedMusic();
    this.renderMusics();
  }

  renderMusics = () => {
    this.setState({ loading: true },
      async () => {
        const { match } = this.props;
        const { id } = match.params;
        const data = await getMusics(id);
        this.setState({ musics: [...data], loading: false });
      });
  }

  getSavedMusic = () => {
    const data = getFavoriteSongs();
    this.setState({ favoriteSongs: [...data] });
  }

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
    const { musics, loading } = this.state;
    return (
      <>
        <Header />
        { loading && <Loading /> }
        { !loading
          && (
            <div id="album-page">
              <div id="album-cover">
                <img src={ musics[0].artworkUrl100.replace('100x100bb.jpg', '300x300bb.jpg') } alt={ musics[0].collectionName } />
                <h2>{ musics[0].artistName }</h2>
                <h3>{ musics[0].collectionName }</h3>        
              </div>
              <div id="album-musics">
                <MusicCard
                  musics={ musics.slice(1) }
                  changeFavorite={ this.changeFavorite }
                  isFavorite={ this.isFavorite }
                />
              </div>
            </div>
          )}
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Album;
