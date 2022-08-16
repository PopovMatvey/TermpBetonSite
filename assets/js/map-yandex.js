YaMapsShown = false;
$(document).ready(function () {

   $(window).scroll(function () {
      if (!YaMapsShown) {
         if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
            showYaMaps();
            YaMapsShown = true;
         }
      }
   });

});

function showYaMaps() {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae74e575e30f4efd1e0e69dd54d50c7b4b5230d630a4ef8f4cf021cbb54e718bc&amp;width=100%25&amp;height=365&amp;lang=ru_RU&amp;scroll=false";
   document.getElementById("map_container").appendChild(script);
}