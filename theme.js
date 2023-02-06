console.log("them.js");

function changeToDarkTheme() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    document.getElementsByTagName("body")[0].style.color = "white"
}
function changeToLightTheme() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    document.getElementsByTagName("body")[0].style.color = "black"
}

function changeTheme(type) {
    let color;
    let bg_color;
    let dark = false;

    if (type == "dark") {
        color = "white";
        bg_color = "black"
        document.getElementsByTagName("body")[0].classList.add("dark")
        // document.getElementsByTagName("body")[0].className = "dark"
    } else {
        color = "black";
        bg_color = "white"
        document.getElementsByTagName("body")[0].classList.remove("dark")

    }

    // document.getElementsByTagName("body")[0].style.backgroundColor = bg_color
    // document.getElementsByTagName("body")[0].style.color = color
}


// document.getElementById("dark").addEventListener("click", changeToDarkTheme)

// document.getElementById("dark").addEventListener("click", () => {
//     console.log("to dark theme- arrow function");
// })


