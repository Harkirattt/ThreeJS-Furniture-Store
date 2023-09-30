
let ImgArr = document.getElementsByClassName("imagesContainer")
let phonesImgArr = ImgArr[0];
let laptopsImgArr = ImgArr[1];
let itemCard = document.getElementsByClassName("itemCard")
let count = 0;
let alertSuccess = document.getElementById('alertSuccess')
let popupp = document.getElementById('popupp')
    
function addSuccessAlert(){
  alertSuccess.style.display="block";
  setTimeout(alertRemover,5000);
}

function alertRemover()
{
  alertSuccess.style.display="none";
}

let productNames = {"Bed 1": [" Bed 1"," 34,900"," Modern Bed with Marble Finish","beds","bed1.jpeg"],"Bed 2": [" Bed 2"," 36,999"," Bed with Wooden Finish","beds","bed2.jpeg"],"Bed 3": [" Bed 3"," 8,499"," Bed with Velvety Finish","beds","bed3.jpeg"],"Bed 4": [" Bed 4"," 29,900"," Modern Bed with Marble Finish","beds","bed4.jpeg"],"Bed 5": [" Bed 5"," 36,999"," Bed with Cushions","beds","bed5.jpeg"],"Bed 6": [" Bed 6"," 7,769"," Classic White Bed","beds","bed6.jpeg"],"Bed 7": [" Bed 7"," 27,490"," Bed with Wooden Finish","beds","bed7.jpeg"],"Bed 8": [" Bed 8"," 60,490"," Bed with Wooden Finish","beds","bed8.jpeg"],"Chair 1": [" Chair 1"," 26,999", " Comfortable Red Chair","chairs","chair1.jpeg"],"Chair 2": [" Chair 2"," 54,990","Comfortable Wooden Chair","chairs","chair2.jpeg"],"Chair 3": [" Chair 3"," 54,999","Comfortable Brown Wooden Chair","chairs","chair3.jpg"],"Chair 4": [" Chair 4"," 45,490"," Comfortable Chair with Table","chairs","chair4.jpeg"],"Chair 5": [" Chair 5"," 45,490"," Gaming Chair","chairs","chair5.jpeg"],"Chair 6": [" Chair 4"," 45,490","White Luxurious Chair","chairs","chair6.jpeg"],"Chair 7": [" Chair 7"," 45,490","Sofa Chair","chairs","chair7.jpeg"],"Chair 8": [" Chair 8"," 45,490","Sofa Chair","chairs","chair8.jpeg"],"Table 1": [" Table 1"," 26,999", " Wooden Table","tables","table1.jpg"],"Table 2": [" Table 2"," 54,990"," Wooden Table","tables","table2.jpg"],"Table 3": [" Table 3"," 54,999"," Wooden Table","tables","table3.jpeg"],"Table 4": [" Table 4"," 45,490"," Wooden Table","tables","table4.jpg"],"Table 5": [" Table 5"," 45,490"," Wooden Table","tables","table5.jpg"],"Table 6": [" Table 6"," 45,490","Wooden Table","tables","table6.jpg"],"Table 7": [" Table 7"," 45,490"," Wooden Table","tables","table7.jpg"],"Table 8": [" Chair 8"," 45,490"," Wooden Table","tables","table8.jpeg"]};


Array.from(itemCard).forEach((element)=>{
    element.addEventListener('click',()=>{
    let itemCardText = element.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText
    popupp.innerHTML+=`
          <div class="popup">
          <center>
          <div class="popupContainer">
              <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;"><u>${itemCardText} </u><p style="cursor: pointer;"><b id="close1">X</b></p></p>
              <hr style="color: rgb(233, 233, 233);">
              <div class="infoContainer">
                  <img src="/models/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
                  <div class="infoTextContainer" style="text-align: left;">
                      <p><b>Name: </b>${productNames[itemCardText][0]}</p>
                      <br>
                      <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
                      <br>
                      <p><b>Description: </b>${productNames[itemCardText][2]}</p>
                      <center>
                      <button class="buyNowBtn">Buy Now!</button>
                      </center>
                  </div>
              </div>
          </div>
          </center>
      </div>
    `
    if(popupp.innerHTML!="")
    {
      let close1 = document.getElementById('close1')
      close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
      })
    }
    let buyNowBtn = document.getElementsByClassName('buyNowBtn')
    Array.from(buyNowBtn).forEach((element)=>{
      element.addEventListener('click',()=>{
        popupp.innerHTML=`<div class="popup">
        <center>
            <div class="popupContainer">
                <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;">Enter Your Card Details<p style="cursor: pointer;"><b id="close1">X</b></p></p>
                <hr style="color: rgb(233, 233, 233);">
                <div class="cardDetails">
                    <div><p>Enter Account Holder Name</p></div>
                    <div><input type="text" id="accountName"></div>
                    <div><p>Enter Card Number</p></div>
                    <div><input type="text" id="accountNumber"></div>
                    <div><p>Enter CVV</p></div>
                    <div><input type="text" id="accountCVV"></div>
                    <div><p>Enter Expiry Date</p></div>
                    <div><input type="text" id="accountExpiry"></div>
                </div>
  
                <div class="cardImgs">
                    <div><img src="./images/cards/visa.png" alt=""></div>
                    <div><img src="./images/cards/mastercard.jpg" alt=""></div>
                    <div><img src="./images/cards/amex.png" alt=""></div>
                </div>
                <button class="payNowBtn" id="payment">
                    Pay Now
                </button>
            </div>
  
        </center>
    </div>`
    let payNowBtn = document.getElementsByClassName('payNowBtn')
    close1=document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    payNowBtn[0].addEventListener('click',function payBtnCheck(){

      // let accountName = document.getElementById('accountName').value
      // let accountNumber = document.getElementById('accountNumber').value
      // let accountExpiry = document.getElementById('accountExpiry').value
      // let accountCVV = document.getElementById('accountCVV').value

      // if(accountName=="")
      // {
      //   alert('Please enter your name!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountNumber=="" || accountNumber.length!=16)
      // {
      //   alert('Please a valid card number!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountExpiry=="" || accountExpiry.indexOf("/",0)<0)
      // {
      //   alert('Please enter a valid expiry date!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false;
      // }
      // else if(accountCVV=="" || accountCVV.length!=3)
      // {
      //   alert('Please a valid CVV!')
      //   popupp.remove(popupp.firstElementChild)
      //   return false
      // }

      popupp.removeChild(popupp.firstElementChild)
      addSuccessAlert();
      return true;
    })
      })
    })
  })
})


let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',()=>{
  let count1 = 0;
  let searchText= document.getElementById('search').value;
  Array.from(itemCard).forEach((element)=>{
    let itemCardText = element.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText;

    if(itemCardText.includes(searchText) && count1==0)
    {
      popupp.innerHTML+=`
        <div class="popup">
          <center>
          <div class="popupContainer">
              <p style="cursor: pointer;width:90%;text-align:right;"><b id="close1">X</b></p>
              <div class="infoContainer">
                  <img src="/models/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
                  <div class="infoTextContainer" style="text-align: left;">
                      <p><b>Model Name: </b>${productNames[itemCardText][0]}</p>
                      <br>
                      <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
                      <br>
                      <p><b>Specifications: </b>${productNames[itemCardText][2]}</p>
                      <center>
                      <button class="buyNowBtn">Buy Now!</button>
                      </center>
                  </div>
              </div>
          </div>
          </center>
        </div>
        `
      count1=count1+1;
      if(popupp.innerHTML!='')
      {
        let close1 = document.getElementById('close1')
        close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
        })
      }

    }
    else if(itemCardText.includes(searchText) && count1!=0){
      let popupContainer = document.getElementsByClassName('popupContainer')[0]
      popupContainer.innerHTML+=`<div class="infoContainer">
      <img src="/models/${productNames[itemCardText][3]}/${productNames[itemCardText][4]}" alt="" style="width: 250px;">
      <div class="infoTextContainer" style="text-align: left;">
          <p><b>Model Name: </b>${productNames[itemCardText][0]}</p>
          <br>
          <p><b>Price: </b>Rs. ${productNames[itemCardText][1]}</p>
          <br>
          <p><b>Specifications: </b>${productNames[itemCardText][2]}</p>
          <center>
          <button class="buyNowBtn">Buy Now!</button>
          </center>
      </div>
  </div>`
  // let buyNowBtn = document.getElementsByClassName('buyNowBtn')
  // Array.from(buyNowBtn).forEach((element)=>{
  //   element.addEventListener('click',()=>{
  //     console.log(element)
  //     popupp.removeChild(popupp.firstElementChild)
  //     addSuccessAlert();
  //   })
  // })
    count1=count1+1;
    if(popupp.innerHTML!='')
    {

      let close1 = document.getElementById('close1')
      close1.addEventListener('click',()=>{
        popupp.removeChild(popupp.firstElementChild)
      })
    }

    }
  })
  if(count1==0)
  {
    let popupp=document.getElementById('popupp')
    popupp.innerHTML=`
    <div class="popup">
    <center>
    <div class="popupContainer">
        <p style="cursor: pointer;width:90%;text-align:right;"><b id="close1">X</b></p>
        <p style="font-weight:bolder;margin-bottom:20px;">0 results found!</p>
    </div>
    </center>
    </div>
    `
    let close1 = document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
  }
  else{
    let popupContainer = document.getElementsByClassName('popupContainer')[0]
    popupContainer.innerHTML+=`<p style="font-weight:bolder;margin-top:20px;">${count1} result(s) found!</p>`
    let close1 = document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    let buyNowBtn = document.getElementsByClassName('buyNowBtn')
    Array.from(buyNowBtn).forEach((element)=>{
      element.addEventListener('click',()=>{
        popupp.innerHTML=`<div class="popup">
        <center>
            <div class="popupContainer">
                <p style="font-weight: bolder;margin-bottom: 10px;width: 92%; font-size: larger;">Enter Your Card Details<p style="cursor: pointer;"><b id="close1">X</b></p></p>
                <hr style="color: rgb(233, 233, 233);">
                <div class="cardDetails">
                    <div><p>Enter Account Holder Name</p></div>
                    <div><input type="text" id="accountName"></div>
                    <div><p>Enter Card Number</p></div>
                    <div><input type="text" id="accountNumber"></div>
                    <div><p>Enter CVV</p></div>
                    <div><input type="text" id="accountCVV"></div>
                    <div><p>Enter Expiry Date</p></div>
                    <div><input type="text" id="accountExpiry"></div>
                </div>
  
                <div class="cardImgs">
                    <div><img src="./images/cards/visa.png" alt=""></div>
                    <div><img src="./images/cards/mastercard.jpg" alt=""></div>
                    <div><img src="./images/cards/amex.png" alt=""></div>
                </div>
                <button class="payNowBtn" id="payment">
                    Pay Now
                </button>
            </div>
  
        </center>
    </div>`
    let payNowBtn = document.getElementsByClassName('payNowBtn')
    close1=document.getElementById('close1')
    close1.addEventListener('click',()=>{
      popupp.removeChild(popupp.firstElementChild)
    })
    Array.from(payNowBtn).forEach((ele)=>{
      ele.addEventListener('click',function payNowBtn(){
          popupp.removeChild(popupp.firstElementChild)
          addSuccessAlert();
          return true;

      })
    })
  })
})
  }
})

// console.log(itemCard)
Array.from(itemCard).every((ele)=>{
  let itemCardText=ele.getElementsByClassName('lines')[0].getElementsByTagName("p")[0].innerText
  // console.log(itemCardText)
  function checkICT(){
    if(itemCardText=="Vivo Y01")
    {
      return false
    }
    else return true;
  }
  return checkICT();
})