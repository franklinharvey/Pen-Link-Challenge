(function() {
/*
  Initialize
*/

// make copy of data so emulation can rerun on refresh
var data2 = data.slice(0);
displayList(sortList(data2));

function displayList(data2) {
  displayParent = document.getElementById('dataDisplay');
  displayParent.innerHTML = "";
  var listParent = document.createElement('ul');
  for (var i in data2) {
    h3 = document.createElement('h3');
    h3.innerHTML = data2[i].title;

    span = document.createElement('span');
    span.innerHTML = formatTypeText(data2[i].type);

    removeButton = document.createElement('button');
    removeButton.className = "removeButton";
    removeButton.innerHTML = "REMOVE";

    listItem = document.createElement('li');
    listItem.className = "listItem"
    listItem.appendChild(h3);
    listItem.appendChild(span);
    listItem.appendChild(document.createElement('hr'));
    listItem.appendChild(removeButton);

    listParent.appendChild(listItem);
  }
  displayParent.appendChild(listParent);
  console.log(listParent);
}

function formatTypeText(str) {
  var str2 = stripDashUnderscore(str)
  return toTitleCase(str2)
}

function stripDashUnderscore(str) {
  var str2 = str.replace(/_/g, " ")
  return str2.replace(/-/g, " ")
}

// reference for title case: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function sortList(data) {
  return data.sort(function(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  })
}

/*
  End File
*/
})();
