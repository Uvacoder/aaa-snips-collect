/*
	Takes in two string arguments: a string to search from and a query to search.
	Returns all the indexes the query occurs within the string as an array.
	It's case insensitive by default.
*/

const stringSearch = (str, query, caseInsensitive = true) => {
  caseInsensitive = typeof caseInsensitive !== 'undefined' ? caseInsensitive : true;

  if (str.length === 0 || query.length === 0) {
    return [];
  }

  let indexes = [], i = 0, findIndex = -1,
    localStr = caseInsensitive ? str.toLowerCase() : str,
    localQuery = caseInsensitive ? query.toLowerCase() : query;

  while (localStr.indexOf(localQuery, i) !== -1) {
    findIndex = localStr.indexOf(localQuery, i);
    indexes.push([findIndex, findIndex + query.length]);
    i = findIndex + 1;
  }

  return indexes;
}
