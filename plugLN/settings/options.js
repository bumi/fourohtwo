function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    cert: document.querySelector("#cert").value
    macca: document.querySelector("#macca").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#cert").value = result.cert || "blue";
    document.querySelector("#macca").value = result.macca || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("cert", "macca");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
