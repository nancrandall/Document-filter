//import {getPlans} from './plan-list';

export default function filterMenu(JsonArry) { 
  var parentSelector, parentSelectorEl, domScope, patternClass, patternClassInitialized, elsPrevious, elsNew;
  parentSelector = parentSelector || null;
  parentSelectorEl = document.querySelector(parentSelector);
  domScope = parentSelector ? (parentSelectorEl ? parentSelectorEl : null) : document;
  if (domScope) {
    patternClass = "filter-menu__dropdown", // set your custom pattern class name
      patternClassInitialized = patternClass + "--initialized";
    elsPrevious = document.querySelectorAll("." + patternClassInitialized);
    elsNew = [].slice.call(domScope.querySelectorAll("." + patternClass + ":not(." + patternClassInitialized + ")"));
    var init = function(el, index) {
      var dropdownFilterBtn = document.querySelector(".filter-menu__button"),
      dropdownFilter = el.querySelector(".select-filter"),
      filterMenuArticlesError= el.querySelector(".filter-menu__notification"),
      i,
  
        elIndex = index + elsPrevious.length,
        filterOptions = {
          filterOne: "",
          filterTwo: "",
          filterThree: ""
        };
      filterOne.value = filterOptions.filterOne;
      filterTwo.value = filterOptions.filterTwo;
      filterThree.value = filterOptions.filterThree;
      el.classList.add(patternClassInitialized);
      el.setAttribute('id', patternClass + '--' + elIndex);
          var setEventListeners = function() {
          // check input is not null before adding event listener
          if (dropdownFilterBtn) {
            dropdownFilterBtn.addEventListener("click", function() {
              filterAllValues();
              updateArticleList();
            });
          } else{
            dropdownFilter.addEventListener("input", function() {
              filterAllValues();
              updateArticleList();
            });
          }
        },
        filterAllValues = function( ) {
          filterOptions.filterOne = filterOne.value;
          filterOptions.filterTwo = filterTwo.value;
          filterOptions.filterThree = filterThree.value;
        },
        filterAllFilterItems = function(outputArticles) {
          for (i in filterOptions) {
            //console.log(value);
            return !filterOptions.i.length || outputArticles.i == filterOptions.value;

          }
          },
        filterfilterOne = function(outputArticles) {
          return !filterOptions.filterOne.length || outputArticles.filterOne == filterOptions.filterOne;
        },
        filterfilterTwo = function(outputArticles) {
          return !filterOptions.filterTwo.length || outputArticles.filterTwo == filterOptions.filterTwo;
        },
        filterfilterThree = function(outputArticles) {
          return !filterOptions.filterThree.length || outputArticles.filterThree == filterOptions.filterThree;
        },
        jsonValueExist = function (json, value) {
          let contains = false;
          Object.keys(json).some(key => {
              contains = typeof json[key] === 'object' ? jsonValueExist(json[key], value) : json[key] === value;
               return contains;
          });
          return contains;
       },
        mapJsonList = JsonArry.listItems.map(function(item) {
          return item; 
        }),
        updateArticleList = function(outputArticles) {
         let filteredCards = mapJsonList.filter(filterfilterThree).filter(filterfilterTwo).filter(filterfilterOne);
        // let filteredCards = mapJsonList.filter(filterAllFilterItems());
          //Conditional to see if array value matches selected input value      
          if (jsonValueExist(JsonArry, filterOne.value)) {
            if (filterMenuArticlesError) {
              filterMenuArticlesError.style.display = 'none';
            }
            filterMenuArticles.innerHTML = filteredCards.map(outputArticles => `
            <div class="filter-menu__articles-heading-group">
            <h2 class="filter-menu__articles-heading--large">${outputArticles.filterTwo} forms</h2>
            <p class="filter-menu__articles-sub-heading">${outputArticles.filterTwoDescription}</p>
          </div>
          <div class="filter-menu__articles-heading-group">
          <h3 class="filter-menu__articles-heading--medium">${outputArticles.filterThree} forms</h3>
          <p>Nam porttitor porttitor dolor sit amet porttitor. Aenean pretium feugiat metus.</p>
          </div>
          <div class="filter-menu__articles-list">
          <div class="filter-menu__articles-list-item">
            <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[0]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
              <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
            </div>
            <div class="filter-menu__articles-list-item">
            <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[1]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
            <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
            </div>
            <div class="filter-menu__articles-list-item">
            <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[2]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
            <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
            </div>
          </div>`)
            .join("");
          } 
         else {
          if (filterMenuArticlesError) {
            filterMenuArticlesError.style.display = 'block';
          }
          filterMenuArticles.innerHTML = filteredCards.map(outputArticles => `
            <div class="filter-menu__articles-heading-group">
              <h2 class="filter-menu__articles-heading--large">${outputArticles.filterTwo} forms</h2>
              <p class="filter-menu__articles-sub-heading">${outputArticles.filterTwoDescription}</p>
            </div>
            <div class="filter-menu__articles-heading-group">
            <h3 class="filter-menu__articles-heading--medium">${outputArticles.filterThree} forms</h3>
            <p>Nam porttitor porttitor dolor sit amet porttitor. Aenean pretium feugiat metus.</p>
            </div>
            <div class="filter-menu__articles-list">
            <div class="filter-menu__articles-list-item">
              <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[0]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
                <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
              </div>
              <div class="filter-menu__articles-list-item">
              <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[1]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
              <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
              </div>
              <div class="filter-menu__articles-list-item">
              <h5 class="filter-menu__articles-title--inline">${outputArticles.articleTitles[2]} </h5> <span class="filter-menu__articles-date">${outputArticles.pdfDates[0]} </span> 
              <a class="filter-menu__articles-link" href="${outputArticles.description}">${outputArticles.linkTitle}</a>
              </div>
            </div>`)
            .join("");
        }
        };
      setEventListeners();
      updateArticleList();
    };
    if (elsNew.length) {
      elsNew.forEach(function(el, index) {
        init(el, index);
      });
    }
  }
}