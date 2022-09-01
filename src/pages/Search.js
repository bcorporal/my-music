import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';


class Search extends React.Component {
  render() {
    const {
      handlechange,
      value,
      btnSearchAlbums,
      searchResults,
      loading,
      renderAlbums,
    } = this.props;

    return (
      <>
        <Header />
        <div id="searchSection">
          <div className="searchText">
            <h1>SEARCH TO FIND MUSIC FROM YOUR FAVORITE ARTIST</h1>
          </div>
          <input
            className="searchBox"
            type="text"
            name="artistSearch"
            placeholder="Artist Name"
            onChange={handlechange}
            value={value}
          />
          <button className="searchBtn" type="submit" onClick={btnSearchAlbums}>
            SEARCH
          </button>
        </div>
        <div>
        {loading && <Loading />}
        {searchResults && renderAlbums()}</div>
      </>
    );
  }
}

Search.propTypes = {
  handlechange: PropTypes.func.isRequired,
  btnSearchAlbums: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  searchResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  renderAlbums: PropTypes.func.isRequired,
};

export default Search;
