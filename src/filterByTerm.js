function filterByTerm(inputArr, searchTerm) {
    if (inputArr.length == 0) {
        // do some nonsense here
        const bla = 'fasel';
    };
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
}

module.exports = filterByTerm;
