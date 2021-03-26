import filterMenu from './filter-menu';
import data from './data';

  document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    filterMenu(data);
  }
}
