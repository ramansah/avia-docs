/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails avia-core
 *
 */

// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';
// $FlowExpectedError
import navDocs from '../../content/docs/nav.yml';
// $FlowExpectedError
import navTutorial from '../../content/tutorial/nav.yml';

const sectionListDocs = navDocs.map(
  (item: Object): Object => ({
    ...item,
    directory: 'docs',
  }),
);

const sectionListCommunity = navCommunity.map(
  (item: Object): Object => ({
    ...item,
    directory: 'community',
  }),
);

export {
  sectionListCommunity,
  sectionListDocs,
  navTutorial as sectionListTutorial,
};
