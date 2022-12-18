import React from 'react';
import { CenturyView } from './features/episodesList/CenturyView';
import { YearView } from './features/episodesList/YearView';
import { Footer } from './features/Footer/Footer';
import { StyledContainer } from './features/Layout/Layout.styles';
import { Navbar } from './features/Navbar/Navbar';
import { getEpisodesFromRSSFeed } from './lib/episodes';
import { EpisodeType } from './lib/types';
import { globalStyles } from './stitches.config';

const App = () => {
  globalStyles();
  const [episodes, setEpisodes] = React.useState<EpisodeType[]>([]);
  const [view] = React.useState<'century' | 'year'>('century');

  React.useEffect(() => {
    const doAsync = async () => {
      const episodes = await getEpisodesFromRSSFeed();
      setEpisodes(episodes);
    };

    doAsync();
  }, []);

  // const bonusEps = episodes.filter(
  //   (episode) => episode.itunes_episodeType === 'bonus'
  // );
  // const trailerEps = episodes.filter(
  //   (episode) => episode.itunes_episodeType === 'trailer'
  // );
  // const fullEps = episodes.filter(
  //   (episode) => episode.itunes_episodeType === 'full'
  // );

  const episodesWithYear = episodes.filter(
    (episode) => episode.year && episode.itunes_episodeType === 'full'
  );
  const episodesWithoutYear = episodes.filter(
    (episode) => !episode.year && episode.itunes_episodeType === 'full'
  );

  return (
    <div className="App">
      <Navbar />
      <StyledContainer>
        {/* <p>RSS Items: {episodes?.length}</p>
        <p>Full Items: {fullEps?.length}</p>
        <p>BonusEps: {bonusEps?.length}</p>
        <p>TrailerEps: {trailerEps?.length}</p>
        <>----</>
        <p>Episodes With Year: {episodesWithYear?.length}</p>
        <p>Episodes Without Year: {episodesWithoutYear?.length}</p> */}

        {view === 'century' && <CenturyView episodes={episodesWithYear} />}
        {view === 'year' && <YearView episodes={episodesWithYear} />}

        <h2>Ohne Zuordnung</h2>
        <ul>
          {episodesWithoutYear.map((episode, i) => {
            return <li key={i}>{episode.title}</li>;
          })}
        </ul>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default App;
