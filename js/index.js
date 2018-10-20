/*
  Initialize Functions
*/

// make copy of data so emulation can rerun on refresh
var data2 = data.slice(0);
displayList(sortList(data2));

document.getElementById("dataDisplay").addEventListener("click", function(e) {
  // event delegation
	if(e.target && e.target.nodeName == "BUTTON") {
    var removeIndex = data2.map(function(item) { return item.id; })
                           .indexOf(e.target.id);
    console.log(removeIndex);
    for( var i = 0; i < data2.length; i++){
       if ( i === removeIndex) {
         data2.splice(i, 1);
       }
    }
    displayList(data2);
    console.log(data2);
		console.log("Button ", e.target.id, " pressed");
	}
});

function displayList(data2) {
  displayParent = document.getElementById('dataDisplay');
  displayParent.innerHTML = "";
  var listParent = document.createElement('ul');
  listParent.className = "list-group"
  for (var i in data2) {
    h3 = document.createElement('h3');
    h3.innerHTML = data2[i].title;

    span = document.createElement('span');
    span.innerHTML = formatTypeText(data2[i].type);

    removeButton = document.createElement('button');
    removeButton.className = "btn btn-danger";
		removeButton.type = "button";
    removeButton.innerHTML = "REMOVE";
    removeButton.id = data2[i].id

    listItem = document.createElement('li');
    listItem.className = "list-group-item listItem"
    listItem.appendChild(h3);
    listItem.appendChild(span);
    listItem.appendChild(document.createElement('hr'));
    listItem.appendChild(removeButton);

    listParent.appendChild(listItem);
  }
  displayParent.appendChild(listParent);
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

function removeButton(id){
  data2 = data2.some(function(item, index) {
  	if(data2[index][id] === delID){
  		// found it!
  		data2.splice(index, 1);
  		return true; // stops the loop
  	}
  	return false;
  });
  displayList(data2);
}

function removeByKey(array, delID){
  data2.some(function(item, index) {
  	if(data2[index][id] === delID){
  		// found it!
  		data2.splice(index, 1);
  		return true; // stops the loop
  	}
  	return false;
  });
  return array;
}

/*
  End File
*/
