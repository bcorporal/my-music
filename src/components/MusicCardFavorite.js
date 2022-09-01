import React from 'react';
import PropTypes from 'prop-types';

class MusicCardFavorite extends React.Component {
  render() {
    const { musics, changeFavorite, isFavorite } = this.props;
    return (
      musics.map((music) => (
        <div key={ music.trackId } class="music-card">
          <img src= {music.artworkUrl60 } class="mini-cover" alt={ music.trackName }/>
          <p>{ music.trackName }</p>
          <audio src={ music.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
          <input
            type="checkbox"
            className="heart-checkbox"
            id={ music.trackId }
            onChange={ () => changeFavorite(music, music.trackId) }
            checked={ isFavorite(music.trackId) }
          />
          <label htmlFor={ music.trackId} className="heart-label">❤</label>
        </div>
      )));
  }
}

MusicCardFavorite.propTypes = {
  musics: PropTypes.arrayOf.isRequired,
  isFavorite: PropTypes.func.isRequired,
  changeFavorite: PropTypes.func.isRequired,
};

export default MusicCardFavorite;
