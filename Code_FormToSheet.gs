function onFormSubmit() {
  //get form
  var answer = []
  var form = FormApp.openById('198VC-IdzySPlTgJh90PJ2dO7aMhdVd9_IgKgIhCkm3c')
  var fRes = form.getResponses()
  var response = fRes[fRes.length - 1]
  var itemRes = response.getItemResponses()

  for (var i = 0; i < itemRes.length; i++) {

    var item = itemRes[i].getResponse()
    answer.push(item)
  }
  addRecord(answer[0], answer[1], answer[2])
}
//add to sheet
function addRecord(ans1, ans2, ans3) {
  var ss = SpreadsheetApp.openById('1amrbqEiybn6-zxOrtf33VDAJ7zuSBrcXy1n13RKZYhE')
  var sheet = ss.getSheetByName('ซีต1')
  sheet.appendRow([new Date(), ans1, ans2, ans3])
}
