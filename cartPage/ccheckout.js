console.log("bol bhai");

let cartdata = JSON.parse(localStorage.getItem("cartData"));
console.log("cartdata: ", cartdata);

updatePrice(cartdata);

function updatePrice(data) {
  let totalPrice = data[0].totalPrice;
  let totalPriceEle = document.querySelector("#right > div.desc > div.price");
  totalPriceEle.innerHTML = ` Rs. ${totalPrice}.00`;
  let plan = data[0].plan;
  let planEle = document.querySelector(
    "#right > div.desc > div:nth-child(2) > p:nth-child(2)"
  );
  planEle.innerHTML = `${plan} Month`;
  let subtotalEle = document.querySelector(
    "#finalPrice > div.subtotal > p:nth-child(2)"
  );
  subtotalEle.innerHTML = `Rs. ${totalPrice}.00`;
  let totalPriceEleStrong = document.querySelector(
    "#finalPrice > div:nth-child(4) > p:nth-child(2) > strong"
  );
  totalPriceEleStrong.innerHTML = `Rs. ${totalPrice}.00`;

  //   Promo Code

  let promoEle = document.querySelector("#right > div.promo > button");
  let promoInput = document.querySelector(
    "#right > div.promo > input[type=text]"
  );
  let promoActive30 = false;
  promoEle.addEventListener("click", promoFun);
  function promoFun() {
    event.target.innerText = "Checking...";
    if (promoInput.value == "masai30" && promoActive30 === false) {
      setTimeout(() => {
        promoActive30 = true;
        totalPrice = totalPrice - (totalPrice * 30) / 100;
        totalPriceEle.innerHTML = ` Rs. ${totalPrice}`;
        subtotalEle.innerHTML = `Rs. ${totalPrice}`;
        totalPriceEleStrong.innerHTML = `Rs. ${totalPrice}`;
        alert("Promo Code Applied");
      }, 2000);
      event.target.innerText = "Applied";
    } else {
      setTimeout(() => {
        alert("Invalid Promo Code");
      }, 2000);
      event.target.innerText = "RETRY";
    }
    // else if (promoInput.value == "masai50" && promoActive === false) {
    //   promoActive = true;
    //   totalPrice = totalPrice - (totalPrice * 50) / 100;
    //   totalPriceEle.innerHTML = ` Rs. ${totalPrice}`;
    //   subtotalEle.innerHTML = `Rs. ${totalPrice}.00`;
    //   totalPriceEleStrong.innerHTML = `Rs. ${totalPrice}.00`;
    // } else if (promoInput.value == "masai70" && promoActive === false) {
    //   promoActive = true;
    //   totalPrice = totalPrice - (totalPrice * 70) / 100;
    //   totalPriceEle.innerHTML = ` Rs. ${totalPrice}`;
    //   subtotalEle.innerHTML = `Rs. ${totalPrice}.00`;
    //   totalPriceEleStrong.innerHTML = `Rs. ${totalPrice}.00`;
    // }
  }
}
