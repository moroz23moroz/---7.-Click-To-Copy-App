const bts = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  console.log("Hello");

  coupon.select();
  coupon.setSelectionRange(0, 999);
  document.execCommand("copy");

  bts.textContent = "Copied!!!";
  setTimeout(() => {
    bts.textContent = "Copy";
  }, 3000);
};

bts.addEventListener("click", copyText);
