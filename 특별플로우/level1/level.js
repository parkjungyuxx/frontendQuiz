import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const accountData = document.querySelector("#account-list");
const AccountSendForm = document.querySelector("#account-send-form");
const BankSelector = document.querySelector("#bank-selector");

let selectedAccount = 0;

for (const bank in BANK_LIST) {
  const AccountOption = document.createElement("option");

  AccountOption.textContent = BANK_LIST[bank];
  AccountOption.value = bank;
  BankSelector.appendChild(AccountOption);
}

const parsingAccount = (event) => {
  let formattedAccount = "";
  let accountIndex = 0;

  const inputValue = event.querySelector("#account-input").value;

  const selectedAccountFormat = ACCOUNT_FORM[selectedAccount];

  for (let i = 0; i < selectedAccountFormat.length; i++) {
    if (selectedAccountFormat[i] == "0") {
      formattedAccount += inputValue[accountIndex];
      accountIndex++;
    } else {
      formattedAccount += "-";
    }
  }
  const encryptedAccount = formattedAccount.split("").fill("*", 3, -2).join("");

  const AccountList = document.createElement("li");
  AccountList.textContent = `${BANK_LIST[selectedAccount]} : ${encryptedAccount}`;
  accountData.appendChild(AccountList);
};

BankSelector.addEventListener("change", (event) => {
  selectedAccount = event.target.value;
});

AccountSendForm.addEventListener("submit", (event) => {
  event.preventDefault();
  parsingAccount(event.target);
});
