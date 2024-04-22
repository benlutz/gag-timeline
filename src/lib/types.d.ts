export type EpisodeType = {
  title: string;
  'itunes:title': string;
  description: string;
  pubDate: string;
  link: string;
  guid: string;
  'content:encoded': string;
  'itunes:image': {
    '@_href': string;
  };
  'itunes:episode': number;
  'itunes:episodeType': string;
  'itunes:subtitle': string;
  'itunes:summary': string;
  'itunes:explicit': string;
  'itunes:keywords': string;
  'itunes:author': string;
  enclosure: string;
  'itunes:duration': number;
  'podcast:episode': number;
  id: string;
  titleShort: string;
  year: number;
  century: number;
  decade: number;
};
