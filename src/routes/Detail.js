import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const getMovieId = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovieInfo(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMovieId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-box">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="info-container">
          <div className="info-box">
            <div className="t-box">
              <div className="trailer">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${movieInfo.yt_trailer_code}?autoplay=1&mute=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <h2>{movieInfo.title_long}</h2>
            <ul>
              <li>{movieInfo.runtime} minute</li>
              <li>RATE: {movieInfo.rating}</li>
              <li>LIKE: {movieInfo.like_count}</li>
              <li>DOWNLOAD: {movieInfo.download_count}</li>
              <li>
                GENRES:{' '}
                {movieInfo.genres.map(g => (
                  <span key={g}>{g}</span>
                ))}
              </li>
              <li>{movieInfo.description_full}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
