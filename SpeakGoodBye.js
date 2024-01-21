// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {

  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})();
