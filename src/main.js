import filterMenu from './filter-menu';

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    filterMenu();
  }
}
