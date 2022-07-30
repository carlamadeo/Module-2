var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  if(matchFunc(startEl))
    resultSet.push(startEl);

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  for(let i = 0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...elements, ...resultSet];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#')
    return 'id';
  
  if(selector[0] === '.')
    return 'class';

  if(!selector.includes('.'))
    return 'tag';
  
  return 'tag.class';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") { 

    matchFunction = function(htmlElement){

      let selectorName = selector.slice(1);
      return htmlElement.id && (htmlElement.id === selectorName);
    };

  } else if (selectorType === "class") {

    matchFunction = function(htmlElement){

      let selectorName = selector.slice(1);
      let classesArray = htmlElement.classList;

      for(let i = 0; i < classesArray.length; i++){
        if(classesArray[i] === selectorName)
          return true;
      }

      return false;
    };

  } else if (selectorType === "tag.class") {
    matchFunction = function(htmlElement){

      let [tag, className] = selector.split('.');

      return matchFunctionMaker(tag)(htmlElement) && matchFunctionMaker('.' + className)(htmlElement)
    };

  } else if (selectorType === "tag") {

    matchFunction = function(htmlElement){
      return htmlElement.tagName && (htmlElement.tagName.toLowerCase() === selector.toLowerCase());
    };

  }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
