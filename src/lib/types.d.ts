export type EpisodeType = {
  id: string;
  title: string;
  description: string;
  link: string;
  published: Date;
  created: Date;
  category: any[];
  content: string;
  enclosures: any[];
  content_encoded: string;
  itunes_summary: string;
  itunes_author: string;
  itunes_explicit: 'no';
  itunes_duration: number;
  itunes_episode: number;
  itunes_episodeType: 'full' | 'bonus' | 'trailer';
  itunes_image: {
    href: string;
  };
  media: {};
  titleShort: string;
  year: number;
  decade: number;
  century: nu;
};
