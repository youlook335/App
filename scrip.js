document.getElementById("generateBtn").addEventListener("click", function() {
    let b = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous content
    
    if (d > 20) {
        b = 1; // Set b to 1 if d is greater than 20
    }
    
    for (let a = 1; a <= d; a++) {
        resultDiv.innerHTML += b + " x " + a + " = " + b*a + "<br>";
    }
    updateUrl(b, d); // Update URL without refreshing
});

function updateUrl(b, d) {
    var url = window.location.href.split('?')[0]; // Get the current URL without query string
    var newUrl = url + "?c=" + encodeURIComponent(b) + "&d=" + encodeURIComponent(d); // Create new URL with query string
    window.history.pushState({path:newUrl},'',newUrl); // Push new URL to browser history
}

 function genert() {
    var b = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var resultDiv = document.getElementById("result");
    
    resultDiv.innerHTML = ""; // Clear previous content
    for (let a = 1; a <= d; a++) {
        resultDiv.innerHTML     += "<h4 class = java>"  + b + " x " + a + " = " + b*a + "<br>" + "<h4>" ;
                // document.write( b + " x " + a + " = " + b*a + "<br>");    
    }   };

function updateUrl(b, d) {
    var url = window.location.href.split('')[0]; // Get the current URL without query string
    var newUrl = url + "?c=" + encodeURIComponent(b) + "&d=" + encodeURIComponent(d); // Create new URL with query string
    window.history.pushState({path:newUrl},'',newUrl); // Push new URL to browser history
}   