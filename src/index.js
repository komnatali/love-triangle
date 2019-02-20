/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var convenientPreferences = preferences.map(function(love) {
    return love-1;
  });

  convenientPreferences.forEach(function(love, i, convenientPreferences) {
    if (convenientPreferences[love] != i && convenientPreferences[convenientPreferences[love]] == i)
      count++;
  });

  return count/3;
};
