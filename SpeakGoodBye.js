// function for names not starting with 'j' or 'J'
(function (window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = speakWord;
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);