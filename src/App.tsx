import React from 'react';
import { CenturyView } from './features/episodesList/CenturyView';
import { YearView } from './features/episodesList/YearView';
import { Footer } from './features/Footer/Footer';
import { StyledButton } from './features/Layout/Button.styles';
import { StyledContainer } from './features/Layout/Layout.styles';
import { Navbar } from './features/Navbar/Navbar';
import { getEpisodesFromRSSFeed } from './lib/episodes';
import { EpisodeType } from './lib/types';
import { globalStyles } from './stitches.config';

const App = () => {
  globalStyles();
  const [episodes, setEpisodes] = React.useState<EpisodeType[] | null>(null);
  const [view, setView] = React.useState<'century' | 'year'>('century');

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

  if (!episodes) return <div>Loading Data...</div>;

  const episodesWithYear = episodes.filter(
    (episode) => episode.year && episode.itunes_episodeType === 'full'
  );
  const episodesWithoutYear = episodes.filter(
    (episode) => !episode.year && episode.itunes_episodeType === 'full'
  );

  return (
    <div className="App">
      <Navbar variant="sticky" />
      <StyledContainer>
        <h1 style={{ textAlign: 'center', fontWeight: 'normal' }}>
          Geschichten aus der{' '}
          <span style={{ fontFamily: 'serif' }}>
            <i>Geschichte</i>
          </span>{' '}
          <br />
          <span style={{ fontSize: '1.5rem' }}>sortiert</span>
        </h1>

        {/* <p>RSS Items: {episodes?.length}</p>
        <>----</>
        <p>Episodes With Year: {episodesWithYear?.length}</p>
        <p>Episodes Without Year: {episodesWithoutYear?.length}</p> */}

        <div style={{ textAlign: 'center' }}>
          <StyledButton
            onClick={() => setView('century')}
            position="left"
            active={view === 'century'}
          >
            Jahrhunderte
          </StyledButton>
          <StyledButton
            onClick={() => setView('year')}
            position="right"
            active={view === 'year'}
          >
            Jahre
          </StyledButton>
        </div>

        {view === 'century' && <CenturyView episodes={episodesWithYear} />}
        {view === 'year' && <YearView episodes={episodesWithYear} />}

        <h2>Ohne Zuordnung</h2>
        <ul>
          {episodesWithoutYear.map((episode, i) => {
            return (
              <li key={i}>
                <a href={episode.link} target="_blank" rel="noreferrer">
                  {episode.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Footer />
      </StyledContainer>
    </div>
  );
};

export default App;
