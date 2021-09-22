const clickBtn = document.querySelector("#click-btn");
const textInput = document.querySelector("#text-content");
const outputDiv = document.querySelector("#output-content")

// const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


const serverUrl = "https://api.funtranslations.com/translate/minion.json"



const newURL = function (text) {
    return `${serverUrl}?text="${text}"`;

}


const doFetch = function () {
    let inputText = textInput.value;

    if (inputText == "") {
        console.log("no text entered by user")
        alert("Please Enter Text");
    } else {
        console.log(inputText);
        fetch(newURL(inputText)).then(response => response.json()).then(json => outputDiv.innerText = json.contents.translated).catch(error => {
            console.log("There is an error", error)
            alert("Sorry ! The server is down 😢 Please try after some time !")
        })


    }
}

clickBtn.addEventListener("click", doFetch);