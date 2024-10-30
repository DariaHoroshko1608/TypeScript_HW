"use strict";
var textArea = document.createElement('textarea');
var container = document.createElement('p');
var textAreaForbidden = document.createElement('textarea');
var appContainer = document.querySelector('#app');
var badWords = [];
var forbiddenWords = function (text, words) {
    words.forEach(function (word) {
        var regex = new RegExp("\\b".concat(word, "\\b"), 'gi');
        text = text.replace(regex, function (matched) { return "<del>".concat(matched, "</del>"); });
    });
    return text;
};
var generateArray = function (e) {
    var inputWords = e.target.value
        .replace(/[^\w\s]|_/g, '')
        .split(' ')
        .filter(function (word) { return word.length > 0; });
    badWords.push.apply(badWords, inputWords);
};
textArea.addEventListener('input', function () {
    container.innerHTML = forbiddenWords(textArea.value, badWords);
});
textAreaForbidden.addEventListener('input', generateArray);
appContainer === null || appContainer === void 0 ? void 0 : appContainer.append(textArea);
appContainer === null || appContainer === void 0 ? void 0 : appContainer.append(textAreaForbidden);
appContainer === null || appContainer === void 0 ? void 0 : appContainer.append(container);
