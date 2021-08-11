chrome.runtime.onMessage.addListener(function(request, _sender, sendResponse){
  let selection;
  console.log(request.message); 

  if(window.getSelection){
    selection = window.getSelection().toString();
  }else{
    selection = '';
  }
  sendResponse(selection);
});