import parse from 'rss-to-json';
import { getCentury, getDecade } from './helpers';
import { EpisodeType } from './types';
import episodeYearData from './episodeYearData.json';

export const getEpisodesFromRSSFeed = async () => {
  const feed = await parse(
    'https://geschichten-aus-der-geschichte.podigee.io/feed/mp3'
  );

  const episodes = feed.items.map((item: EpisodeType) => {
    item.id = item.title.split(':')[0];
    item.titleShort = item.title.split(':')[1].trim();

    const yearInDescription =
      item.description.match(/[0-9][0-9][0-9][0-9]/)?.[0];

    if (yearInDescription) {
      const year = parseInt(yearInDescription);
      item.year = year;
      item.century = getCentury(year);
      item.decade = getDecade(year);
    }

    const year = episodeYearData.find(
      (ep) => ep.id === item.itunes_episode
    )?.year;

    if (year) {
      item.year = year;
      item.century = getCentury(year);
      item.decade = getDecade(year);
    }

    return item;
  });

  return episodes;
};
