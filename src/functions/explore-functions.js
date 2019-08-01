export function indexIntoOpeningHrs(placeInformation) {
  var d = new Date();
  let day = d.getDay()
  var hours_obj = placeInformation['opening_hours'][day];
  var closingHr = hours_obj['close']['time']
  var openingHr = hours_obj['open']['time']
  closingHr = parseInt(closingHr.substring(0,2))
  openingHr = parseInt(openingHr.substring(0,2))
  return [openingHr, closingHr]
}

// code by uriklar from https://github.com/react-native-community/react-native-maps/issues/505#issuecomment-243423775
export function getRegionForCoordinates(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX, maxX, minY, maxY;

  // init first point
  ((point) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  // calculate rect
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX);
  const deltaY = (maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY + 0.02,
  };
}