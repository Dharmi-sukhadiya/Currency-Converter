const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"

const dropdowns = document.querySelectorAll(".dropdown select");

// for (currcode in countryList){
//     console.log(code,countryList[code]);
// }

for(let select of dropdowns){
    for (currcode in countryList){
    // console.log(code,countryList[code]);
      let newoption=document.createElement("option")
      newoption.innerText=currcode;
      newoption.value=currcode;
      select.append(newoption);
}
}