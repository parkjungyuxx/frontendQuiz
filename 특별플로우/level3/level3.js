const Table = document.querySelector("table");
const ingridientForm = document.querySelector("#ingredient-form");

ingridientForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredient = event.currentTarget.querySelector(
    "input[name='ingredient']"
  ).value;
  const weight = event.currentTarget.querySelector(
    "input[name='weight']"
  ).value;

  const existingIngredient = Array.from(
    Table.querySelectorAll("tr td:first-child")
  ).map((td) => td.textContent);

  if (existingIngredient.includes(ingredient)) return alert("이미 있는 재료임");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";

  deleteBtn.addEventListener("click", (event) => {
    TableBody.remove(event.target.closest("tr"));
  });

  const TableBody = document.createElement("tr");
  TableBody.innerHTML = `<td>${ingredient}</td>
    <td>${weight}</td>
    `;

  const deleteCell = document.createElement("td");
  deleteCell.appendChild(deleteBtn);
  TableBody.appendChild(deleteCell);

  Table.appendChild(TableBody);
  const ingredientList = document.querySelector("#ingredient-list");
  const submitBtn = document.querySelector("#submit_button");

  submitBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = `${ingredient}: ${weight}`;
    ingredientList.appendChild(li);
  });

});
