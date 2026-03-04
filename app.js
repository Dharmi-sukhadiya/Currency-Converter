const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

// for (currcode in countryList){
//     console.log(currcode,countryList[currcode]);
// }

for(let select of dropdowns){ //2
    for (let currcode in countryList){
    // console.log(code,countryList[code]);
      let newoption=document.createElement("option")
      newoption.innerText=currcode;
      newoption.value=currcode;
      if(select.name==="from" && currcode==="USD")
      {
        newoption.selected="selected";
      }else if(select.name==="to" && currcode==="INR")
      {
        newoption.selected="selected";
      }
      select.append(newoption);
}

select.addEventListener("change",(evt)=>{
  updateflag(evt.target);//target will take value that changes 
})
   
}

const updateflag=(element)=>{
    // console.log(element); //will get changed element
    let currcode=element.value;
    // console.log(currcode); //will get contrycode
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();//stop al refresh
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    console.log(amtval);
    if(amtval===""||amtval<1){
      amtval=1;
      amount.value="1";
    }
    // console.log(fromcurr.value, tocurr.value);
    const url=`${base_url}/${fromcurr.value.toLowerCase()}.json`;
    let response=await fetch(url);
    // console.log(response);
    let data=await response.json();
    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    // console.log(rate);
    let finalamount=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`
})
