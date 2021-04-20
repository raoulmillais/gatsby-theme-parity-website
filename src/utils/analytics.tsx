import * as ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-145158313-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = ({ category = '', action = '', label = '' }) => {
  if (category && action && label) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
