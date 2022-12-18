import _ from 'lodash';
import { EpisodeType } from './types';

export const randomYear = (min = 0, max = 2000) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getDecade = (year: number) => {
  return Math.floor(year / 10) * 10;
};

export const getCentury = (year: number) => {
  return Math.ceil(year / 100);
};

export const groupEpisodesByYear = (episodes: EpisodeType[]) => {
  const groupByYear = _.groupBy(episodes, (episode) => episode.year);
  const episodesbyYear = _.map(groupByYear, (episodes, year) => ({
    year,
    episodes,
    episodeCount: episodes.length,
  }));

  return episodesbyYear;
};

export const groupEpisodesByCentury = (episodes: EpisodeType[]) => {
  const groupByCentury = _.groupBy(episodes, (episode) => episode.century);
  const episodesbyCentury = _.map(groupByCentury, (episodes, century) => ({
    century: parseInt(century),
    episodes: episodes.sort((a, b) => a.year - b.year),
    episodeCount: episodes.length,
  }));

  return episodesbyCentury.sort((a, b) => a.century - b.century);
};
