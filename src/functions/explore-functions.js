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