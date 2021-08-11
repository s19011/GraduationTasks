$('#copy').on('click', function(){
    chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {message: '選択範囲ちょうだい'}, function(item){
        if(!item){
          alert('選択範囲が見つかりませんでした');
          return;
        }
        $('#memo').val($('#memo').val() + item);
      });
    });
  });