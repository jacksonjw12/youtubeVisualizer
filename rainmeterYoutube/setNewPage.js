
// function getCurrentTabUrl(callback) {
//   // Query filter to be passed to chrome.tabs.query - see
//   // https://developer.chrome.com/extensions/tabs#method-query
//   var queryInfo = {
//     audible: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     var url = "no current music playing"
//     var title = "none"
//     for(var t = 0; t<tabs.length; t++){
//        var tab = tabs[0];

      
//        url = tabs[t].url;
//        title = tabs[t].title

//       // tab.url is only available if the "activeTab" permission is declared.
//       // If you want to see the URL of other tabs (e.g. after removing active:true
//       // from |queryInfo|), then the "tabs" permission is required to see their
//       // "url" properties.
     
//     }
//     console.log(title)
//     console.log(url)

//     callback(url, title);
//   });

// }
// getCurrentTabUrl(function(url, title) {
//  var x = new XMLHttpRequest();
//  x.open('POST', "http://localhost:8080/");
//   x.onload = function() {
//     console.log("loaded")
//   };

//   var string = title
//   x.send(string);

 
// });
