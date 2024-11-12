import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

const reservationNumberList = document.querySelector("#reservation-number");

const Form = document.querySelector("form");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  reservationNumberList.innerHTML = "";
  const UserName = event.target["user-name"].value;
  const UserPhone = event.target["user-phone"].value;

  const checkReservationNumber = document.createElement("li");
  checkReservationNumber.textContent = "";

  const UserObj = RESERVATION_LIST.find((obj) => obj.name === UserName);
  if (UserObj.phone === UserPhone) {
    checkReservationNumber.textContent = UserObj.number;
  } else {
    checkReservationNumber.textContent = "일치하는 항목이 없습니다";
    alert("일치하는 항목이 없습니다");
  }

  reservationNumberList.appendChild(checkReservationNumber);
});
