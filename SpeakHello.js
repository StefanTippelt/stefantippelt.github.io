// function for names starting with 'j' or 'J'
(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = speakWord;
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };
window.helloSpeaker = helloSpeaker;
})(window);