import { getCentury, getDecade } from './helpers';
import { EpisodeType } from './types';
import episodeYearData from './episodeYearData.json';
import { XMLParser } from 'fast-xml-parser';

export const podigeeFeed =
  'https://geschichten-aus-der-geschichte.podigee.io/feed/mp3';

export const getEpisodesFromRSSFeed = async () => {
  const xml = await fetch(podigeeFeed).then((res) => res.text());
  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const jsonObj = parser.parse(xml);
  const episodes = jsonObj.rss.channel.item.map((item: EpisodeType) => {
    const titleSplit = item.title.split(':');

    if (titleSplit.length > 1) {
      item.id = titleSplit[0];
      item.titleShort = titleSplit[1].trim();
    } else {
      item.id = "GAG";
      item.titleShort = item.title;
    }

    const yearInDescription =
      item.description.match(/[0-9][0-9][0-9][0-9]/)?.[0];

    if (yearInDescription) {
      const year = parseInt(yearInDescription);
      item.year = year;
      item.century = getCentury(year);
      item.decade = getDecade(year);
    }

    const year = episodeYearData.find(
      (ep) => ep.id === item['itunes:episode']
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
