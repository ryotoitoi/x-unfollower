document.getElementById('startUnfollowing').addEventListener('click', function() {
  // content scriptを実行します
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (chrome.scripting) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: function() {
          // ここでcontent scriptの関数を呼び出します
          if (typeof clickFollowingAndUnfollow === 'function') {
            clickFollowingAndUnfollow();
          }
        }
      });
    } else {
      console.error('chrome.scripting API is not available');
    }
  });
});
