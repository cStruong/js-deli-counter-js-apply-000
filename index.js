var customers = 0;

function takeANumber(katzDeliLine) {
  customer += 1;
  katzDeliLine.push(customer);
  
  return "Welcome, " + "You are number " + customer + ".";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + current + "."; 
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var finStr = "The line is currently: "
    var finalArr = [];
    
    for (var i = 0; i < katzDeliLine.length; i++) {
      var curPerson = katzDeliLine[i];
      var curPos = i + 1;
      finalArr.push(curPos + ". " + curPerson);
    }
    finStr += finalArr.join(", ");
  }
  
  return finStr;
}

