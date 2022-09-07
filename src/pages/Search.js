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
            <h1>FIND MUSIC FROM YOUR FAVORITE ARTIST</h1>
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
          {searchResults && renderAlbums()}
        </div>

        <div id="blog">
          <h1>TRENDING</h1>
          <main>
            <section>
              <div>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273b1038aaf26f4c6daad614707"
                  alt="Free"
                />
              </div>
              <article>
                <span>New Music</span>
                <h2>DJ KHALED "GOD DID"</h2>
                <p></p>
              </article>
            </section>

            <section>
              <div>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273de14fe659e3f9327af026e42"
                  alt="Free"
                />
              </div>
              <article>
                <span>TRENDING</span>
                <h2>OMAH LAY "BOY ALONE"</h2>
                <p></p>
              </article>
            </section>

            <section>
              <div>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72"
                  alt="Free"
                />
              </div>
              <article>
                <span>TRENDING</span>
                <h2>BAD BUNNY "UN VERANO SIN TI"</h2>
                <p></p>
              </article>
            </section>

            <section>
              <div>
                <img
                  src="https://resources.tidal.com/images/f2e4192f/eefb/47be/afc4/03ed24b4e625/640x640.jpg"
                  alt="Free"
                />
              </div>
              <article>
                <span>TRENDING</span>
                <h2>LIL BABY "DETOX"</h2>
                <p></p>
              </article>
            </section>

            <section>
              <div>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2739904ecb0b1148a128bdd5e36"
                  alt="Free"
                />
              </div>
              <article>
                <span>TRENDING</span>
                <h2>STEVE LACY "BAD HABIT"</h2>
                <p></p>
              </article>
            </section>

            <section>
              <div>
                <img
                  src="https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
                  alt="Free"
                />
              </div>
              <article>
                <span>TRENDING</span>
                <h2>HARRY STYLES "AS IT WAS"</h2>
                <p>
                </p>
              </article>
            </section>
          </main>
        </div>
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
