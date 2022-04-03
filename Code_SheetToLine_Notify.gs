function getData() {
  //get sheet
  var sheetId = "1amrbqEiybn6-zxOrtf33VDAJ7zuSBrcXy1n13RKZYhE";
  var currentSheet = SpreadsheetApp.openById(sheetId).getSheetByName("getProduct1");
  
  var lastRow = currentSheet.getLastRow();
  var lastColumn = currentSheet.getLastColumn();
  
  Logger.log("Last Row :" + lastRow);
  Logger.log("Last Column :" + lastColumn);

  var headerData = currentSheet.getRange("B1:C1").getValues()[0];
  var lastRowData = currentSheet.getRange("B" + lastRow + ":C" + lastRow).getValues()[0];

  Logger.log("Header :" + headerData);
  Logger.log("Last Row Data :" + lastRowData);

  //set message
  var message = "";
  for (i = 0; i < lastColumn - 1; i++) {
    message += "\n" + headerData[i] + " : " + lastRowData[i];
  }

  Logger.log("Data Message :" + message);

//set access token array for multigroup
  var accessToken = ["6U97sGPjCZllVSe0TEiu0rRSqy2IsYBH5Iqe1RJsGIh", "4nRzsyO5ZfdxmEiYLfVLbkL998oXGiX23H9RrahqYtg"];
  
  //set line notify for multigroup
  if (message !== 0) {
    for (var i = 0; i < accessToken.length; i++) {
      sendMessage(message, accessToken[i]);
    }
  }
}

function sendMessage(message, accessToken) {
  var lineNotifyEndPoint = "https://notify-api.line.me/api/notify";

  var formData = {
    "message": message
  };
  
  var options = {
    "headers" : {"Authorization" : "Bearer " + accessToken},
    "method" : 'post',
    "payload" : formData
  };

  try {
    var response = UrlFetchApp.fetch(lineNotifyEndPoint, options);
  }
  
  catch (error) {
    Logger.log(error.name + "：" + error.message);
    return;
  }
    
  if (response.getResponseCode() !== 200) {
    Logger.log("Sending message failed.");
  } 