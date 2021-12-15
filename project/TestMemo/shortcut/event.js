{
    chrome.contextMenus.create({
        "id"   : 'parent',
        "title"  : 'clipy'
      });
    chrome.contextMenus.create({
      "parentId" : 'parent',
      "type"  : 'normal',
      "title" : 'このサイトのURLとタイトルをクリップ',
      "contexts" : ['all'],
      "onclick" : copy()
    });
  
    /**
     *
     * @param Object info 
     * @param Object tab 
     * @returns
     */
    function copy(info, tab) {
      return function(info, tab) {
        let url = tab.url;
        let title = tab.title;
        let str = `▼${title}\n${url}`;
        copyToclipboard(str);
      }
    }
  
    /**
     *
     * @param string str
     */
    function copyToclipboard(str) {
      let textArea = document.createElement('textarea');
      document.body.appendChild(textArea);
      textArea.value = str;
      textArea.select();
      document.execCommand('copy');
    }
  }