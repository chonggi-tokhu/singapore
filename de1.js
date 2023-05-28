var abc000 = "";
function jinsu112(string12) {
  var abcerer = [];
  var string1 = string12.split("");
  for (var i = 0; i < string1.length; i++) {
    abcerer[i] = string1[i].charCodeAt(0);
  }
  return abcerer;
}
var njnjnj;
function jinsu1132(string1, numbsystem1) {
  var abcerer2 = [];
  var abcerer = jinsu112(string1);
  for (var i1 = 0; i1 < abcerer.length; i1++) {
    abcerer2[i1] = abcerer[i1].toString(numbsystem1);
    return abcerer2;
  }
}
function jinsu111(string1, numbersystem1) {
  var ddddsssd = jinsu1132(string1, numbersystem1);
  jinsu1132(string1, numbersystem1);

  if (ddddsssd == undefined) {
    ddddsssd = jinsu1132(string1, numbersystem1);
    return "";
  } else {
    ddddsssd.forEach(jinsu989);
    return abc000;
  }
}
function jinsu989(item, index) {
  abc000 += item + " ";
  return abc000;
}
