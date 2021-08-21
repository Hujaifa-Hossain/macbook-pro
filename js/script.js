// global variable
const memory8gb = document.getElementById('memory-8gb-button');
const memory16gb = document.getElementById('memory-16gb-button');

const smallStorage = document.getElementById('256gb-storage-button');
const mediumStorage = document.getElementById('512gb-storage-button');
const largeStorage = document.getElementById('1tb-storage-button');

const extraMemoryCost = document.getElementById('extra-memory-cost');
const bastPrice = document.getElementById('bast-price');
const totalPrice = document.getElementById('total-price');
const extraStorageCost = document.getElementById('extra-storage-cost');
const total = document.getElementById('total-cost');

// handle the memory 
memory8gb.addEventListener('click', function () {
  extraMemoryCost.innerText = '0';
  // Updating the total value
  getUpdateValue();

})
memory16gb.addEventListener('click', function () {
  extraMemoryCost.innerText = '180';
  // Updating the total value
  getUpdateValue();
})

// handle the storage
smallStorage.addEventListener('click', function () {
  extraStorageCost.innerText = '0';
  // Updating the total value
  getUpdateValue();
})
mediumStorage.addEventListener('click', function () {
  extraStorageCost.innerText = '100';
  // Updating the total value
  getUpdateValue();
})
largeStorage.addEventListener('click', function () {
  extraStorageCost.innerText = '180';
  // Updating the total value
  getUpdateValue();
})

// handle the delivery charge
const freeDalivery = document.getElementById('free-dalivery');
const chargeDalivery = document.getElementById('charge-dalivery');

const totalDaliveryCost = document.getElementById('total-dalivery-charge');

freeDalivery.addEventListener('click', function () {
  totalDaliveryCost.innerText = '0';
  // Updating the total value
  getUpdateValue()
})
chargeDalivery.addEventListener('click', function () {
  totalDaliveryCost.innerText = '20';
  // Updating the total value
  getUpdateValue()
})

// Updating the total value
function getUpdateValue() {
  const extraCharge = parseInt(extraMemoryCost.innerText);
  const extraStorage = parseInt(extraStorageCost.innerText);
  const productPrice = parseInt(bastPrice.innerText);
  const granDaliveryCost = parseInt(totalDaliveryCost.innerText);
  const totalCost = extraCharge + productPrice + granDaliveryCost + extraStorage;
  totalPrice.innerText = totalCost;
  total.innerText = totalCost;
}

// Updating the total value
function promoCode(myEvent) {
  if (myEvent.value == 'stevekaku') {
    const discountPrice = parseInt(totalPrice.innerText) * 20;
    console.log(discountPrice)
    const newPrice = discountPrice / 100;
    total.innerText = totalPrice.innerText - newPrice;
  }
  else {
    inputField.value = 'your promo code is worng';
  }
}

// Updating the total value
totalPrice.addEventListener('click', function () {
  getUpdateValue();
})
total.addEventListener('click', function () {
  getUpdateValue();
})

// Applying promo code
const inputField = document.getElementById('promo-input-field');
document.getElementById('cupon-button').addEventListener('click', function () {
  promoCode(inputField);
})
