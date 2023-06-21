const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll('.price');
  let totalPrice = 0;

  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = 'Total Price: ' + totalPrice + ' Rs';

  totalRow.appendChild(totalCell);
  document.querySelector('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

