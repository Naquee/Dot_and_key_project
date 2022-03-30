var total = JSON.parse(localStorage.getItem('total')) || 0;

document.querySelector(
  'totalValueofcart'
).textContent = ` Payment Confirm Of  $ ${total}`;