

document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) { 
    console.log("input value is : " + input.value);
    alert("The entered data is : " + input.value);

    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() { var a=document.getElementById('name_textbox'); var ti= document.getElementById('title'); var text=ti.value+"\n----------------\n"+a.value;downloadTextFile(text);
  });

  function downloadTextFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
        url: url,
        filename: 'text_content.txt',
        saveAs: true
    });
}
  // you can add listeners for other objects ( like other buttons ) here 
}