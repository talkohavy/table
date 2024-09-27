function setThemeOnHtmlElement(theme: string) {
  const [htmlElement] = document.getElementsByTagName('html');

  htmlElement.setAttribute('data-theme', theme);
}

export { setThemeOnHtmlElement };
