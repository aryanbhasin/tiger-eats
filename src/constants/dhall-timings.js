/*
Arranged as:
  DHallTimings[]
    index 0: sunday
    ...
    index 6: saturday
      --> {
            wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
            cjl: ...
            ...
          }
*/
var currDate = new Date();
var currMonth = currDate.getMonth();

// cjl on fridays: dinner is 7:30-9pm for sept, oct, april, may and
// 6:30 - 8pm for nov-march
if (currMonth < 3 || currMonth > 9) {
  cjlFriday = {b: [8, 9], l: [11.5, 13.5], d: [18.5, 20]}
} else {
  cjlFriday = {b: [8, 9], l: [11.5, 13.5], d: [19.5, 21]}
}

// cjl on saturdays: dinner is 7:30-8:30pm for sept, oct, april, may and
// 5:30 - 6:30pm for nov-march

if (currMonth < 3 || currMonth > 9) {
  cjlSaturday = {b: [8, 9], l: [11.5, 13.5], d: [17.5, 18.5]}
} else {
  cjlSaturday = {br: [11.5, 13.5], d: [19.5, 20.5]}
}


export const DHallTimings = [
  // Sunday
  {
    wucox: {b: [7.5, 9.5], br: [10, 14], d: [17, 20]},
    cjl: {br: [11.5, 13.5], d: [17.5, 19]},
    forbes: {br: [10, 14], d: [17, 20]},
    roma: {br: [10, 14], d: [17, 20]},
    whitman: {br: [10, 14], d: [17, 20]},
    grad: {br: [11, 14]}
  },
  // Monday
  {
    wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    cjl: {b: [8, 9], l: [11.5, 13.5], d: [17.5, 19.5]},
    forbes: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    roma: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    whitman: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    grad: {b: [7.5, 9.5], d: [17, 20]}
  },
  // Tuesday
  {
    wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    cjl: {b: [8, 9], l: [11.5, 13.5], d: [17.5, 19.5]},
    forbes: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    roma: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    whitman: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    grad: {b: [7.5, 9.5], d: [17, 20]}
  },
  // Wednesday
  {
    wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    cjl: {b: [8, 9], l: [11.5, 13.5], d: [17.5, 19.5]},
    forbes: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    roma: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    whitman: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    grad: {b: [7.5, 9.5], d: [17, 20]}
  },
  // Thursday
  {
    wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    cjl: {b: [8, 9], l: [11.5, 13.5], d: [17.5, 19.5]},
    forbes: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    roma: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    whitman: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    grad: {b: [7.5, 9.5], d: [17, 20]}
  },
  // Friday
  {
    wucox: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    cjl: cjlFriday,
    forbes: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    roma: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    whitman: {b: [7.5, 11], l: [11.5, 14], d: [17, 20]},
    grad: {b: [7.5, 9.5], d: [17, 20]}
  },
  // Saturday
  {
    wucox: {b: [7.5, 9.5], br: [10, 14], d: [17, 20]},
    cjl: cjlSaturday,
    forbes: {br: [10, 14], d: [17, 20]},
    roma: {br: [10, 14], d: [17, 20]},
    whitman: {br: [10, 14], d: [17, 20]},
    grad: 'closed'
  }
]
