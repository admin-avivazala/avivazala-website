import {
  LocaleSlug,
  LocaleString,
  LocaleText,
  Navigation,
  NavigationItem,
  Page,
  Post,
  SanityImageDimensions
} from './sanity.types';

export type FullNavigation = Partial<Navigation> & {
  pages: Partial<Page | Post>[];
  subpages: Partial<Page | Post>[];
};

export type NavigationItemWithKey = {
  _key: string;
} & NavigationItem;

export type WebsiteMenuItem = {
  id: string;
  label: string;
  linkTo: string;
  submenu?: WebsiteMenuItem[];
};

export type WebsiteMenu = {
  items: WebsiteMenuItem[];
};

export type LocalizedField = LocaleString | LocaleText | LocaleSlug;

export type WebPage = Partial<Page> & {
  pageImage: {
    url: string;
    dimensione: SanityImageDimensions;
  };
};
