var animation1 = lottie.loadAnimation({
    container: document.getElementById("back1"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "scripts/back2.json"
});
var xhr = new XMLHttpRequest();
xhr.responseType = "json"; // Set the responseType to 'json'
var xhr = new XMLHttpRequest();
xhr.responseType = "text"; // Set the responseType to 'text'
xhr.open("GET", "your_api_endpoint_here", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) console.log(xhr.responseText); // Now you can access the responseText property
    }
};
xhr.send();

//# sourceMappingURL=index.70957ac4.js.map
