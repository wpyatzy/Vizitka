document.getElementById('1').addEventListener("click", hideshowinfo);
    function hideshowinfo() {
        let x = document.getElementById('info');
        var current = document.getElementById('1');
        if (x.style.display == "none"){
        x.style.display = "block";
        current.className = current.className.replace("btn", "btn active")
        } else {
        x.style.display = "none"
        current.className = current.className.replace(" active", "")}
    };

document.getElementById('2').addEventListener("click", hideshowportf);
    function hideshowportf() {
        let list = document.getElementById('portfolio');
        var current = document.getElementById('2');
        if (list.style.display == "none"){
        list.style.display = "block";
        current.className = current.className.replace("btn", "btn active")
        } else {
        list.style.display = "none"
        current.className = current.className.replace(" active", "")}
    };
