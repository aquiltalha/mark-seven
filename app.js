var txtInput=document.querySelector("#text-input");
var btnTranslate=document.querySelector("#btn-translate")
var OutputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/pirate.json";

function urlconverter(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("error occured",error);
}

function clickHandler(){
    //input
    var inputText=txtInput.value;
    //processing
    fetch(urlconverter(inputText))
      .then(response=>response.json())
      .then(json=>{
        var translatedText=json.contents.translated;
        //output
        OutputDiv.innerText=translatedText;
      })
};
btnTranslate.addEventListener("click",clickHandler);