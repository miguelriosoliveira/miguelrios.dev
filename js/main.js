$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    $('.activities-list div').each((i, element) => {
        let words = element.innerText.split(' ');
        element.innerText = words[0].toUpperCase() + ' ' + words.slice(1);
    });
});