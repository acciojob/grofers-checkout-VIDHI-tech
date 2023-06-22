const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
getSumBtn.id = "getSumButton"; // Add the id attribute
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all the price elements from the table
  const priceElements = document.querySelectorAll('.price');

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent); // Extract the price value
    if (!isNaN(price)) {
      totalPrice += price; // Add the price to the total if it's a valid number
    }
  });

  // Create a new row for the total price
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.textContent = `Total: Rs ${totalPrice}`;
  newRow.appendChild(totalCell);

  // Append the new row to the table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
