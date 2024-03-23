// /*Name this external file gallery.js*/

// function upDate(previewPic){
//           var _url='url'+'('+previewPic.src+')';
//     /* In this function you should 
//        1) change the url for the background image of the div with the id = "image" to the source file of the preview image*/
//        _element.style.backgroundImage=_url;
//       /*    2) Change the text  of the div with the id = "image" to the alt text of the preview image */
//       _element.textContent=previewPic.alt;
//       //  TextTrackList
//          console.log('url'+'('+previewPic.src+')');
//     }
   
//        function unDo(){
//          document.querySelector("#image").textContent="Hover over an image below to display here";
//          document.querySelector("#image").style.backgroundImage="URL('')" ;
//        }
   
function upDate(previewPic) {
   var _url = 'url' + '(' + previewPic.src + ')';
   document.querySelector("#image").style.backgroundImage = _url;
   document.querySelector("#image").textContent = previewPic.alt;
   console.log('url' + '(' + previewPic.src + ')');
 }

 function unDo() {
   document.querySelector("#image").textContent = "Hover over an image below to display here";
   document.querySelector("#image").style.backgroundImage = "URL('')";
 }

 function addTabIndex() {
   var images = document.querySelectorAll(".preview");
   for (var i = 0; i < images.length; i++) {
     var image = images[i];
     image.setAttribute("tabindex", i + 1);
   }
   console.log("Tabindex attributes added.");
 }



 var images = document.querySelectorAll(".preview");
 var firstImage = images[0];
 var lastImage = images[images.length - 1];

 firstImage.addEventListener("keydown", function(e) {
   if (e.key === "Tab" && e.shiftKey) {
     e.preventDefault();
     lastImage.focus();
   }
 });

 lastImage.addEventListener("keydown", function(e) {
   if (e.key === "Tab" && !e.shiftKey) {
     e.preventDefault();
     firstImage.focus();
   }
 });
     
   
   