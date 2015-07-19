(function () {
  var COOKPAD_URL = "http://cookpad.com/recipe/";
  var Min_ID = 54;
  var Max_ID = 2100100;
  $(function (){
    var btn_dicision = $('#btn-dicision');
    btn_dicision.on('click', function(e) {
      var URL = COOKPAD_URL + Random(Min_ID, Max_ID);
      window.open(URL, '_blank');
    });
  });

  /**
   * 0 - Maxまでの乱数を返す
   */
  function Random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  }

})();
