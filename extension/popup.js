// popup.js

document.body.onload = function () {
  chrome.storage.sync.get("data", function (items) {
    if (!chrome.runtime.error) {
      document.getElementById("data").innerText = items.data;
    }
  });
}

document.getElementById("set").onclick = function () {
  var d = document.getElementById("text").value;
  chrome.storage.sync.set({ "data": d }, function () {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    } else {
      document.getElementById("info").innerText = "Saved!";
      setTimeout(() => {
        document.getElementById("info").innerText = "";
        window.close();
      }, 1000)
    }
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function (arrayOfTabs) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(arrayOfTabs[0].id, { code: code });
  });
}
