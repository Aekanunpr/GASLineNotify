function sendLineNotification(e)
{
  var form = FormApp.getActiveForm() 
  
  var itemResponses = e.response.getItemResponses();  

  var result="สินค้าใหม่" 
  
  // Loop แต่ละข้อคำถาม และ คำตอบ
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    
    result += '\n'+itemResponse.getItem().getTitle()+': '+itemResponse.getResponse()
  }
  
  // สร้างรูปแบบที่จะส่งไปให้ LINE -- ในที่นี้คือข้อความอย่างเดียว
  var formData = {
    'message': result,
  };
  

  var token = '6U97sGPjCZllVSe0TEiu0rRSqy2IsYBH5Iqe1RJsGIh'
  

  var options = {
    'method' : 'post',
    'headers' : {'Authorization': "Bearer "+token},
    'contentType': 'application/x-www-form-urlencoded',
    'payload' : formData
  }
  UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options)
}