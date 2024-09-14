import { THEME } from './constants';

function extractThemeFromHtmlElement() {
  const [htmlElement] = document.getElementsByTagName('html');

  const isDarkModeOnOnload = htmlElement.getAttribute('data-theme') === THEME.Dark;

  return isDarkModeOnOnload;
}

export { extractThemeFromHtmlElement };
