import blockContent from './components/blockContent';
import eventAttendant from './components/eventAttendant';
import localeBlockContent from './components/localeBlockContent';
import localeSlug from './components/localeSlug';
import localeString from './components/localeString';
import localeText from './components/localeText';
import navigationItem from './components/navigationItem';
import navigationLink from './components/navigationLink';
// documents
import author from './author';
import contactForm from './contactForm';
import event from './event';
import eventType from './eventType';
import languages from './languages';
import navigation from './navigation';
import page from './webpage';
import post from './post';
import postCategory from './postCategory';
import customSettings from './customSettings';

export const schemaTypes = [
  blockContent,
  eventAttendant,
  localeBlockContent,
  localeSlug,
  localeString,
  localeText,
  navigationItem,
  navigationLink,
  // documents
  page,
  post,
  postCategory,
  author,
  contactForm,
  event,
  eventType,
  navigation,
  languages,
  customSettings
];
