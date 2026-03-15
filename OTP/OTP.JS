// function generateOtp() {
//   let otp = ""
//   for (let i = 0; i < 4; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   console.log(otp);
// }
// generateOtp();

// function generateOtp() {
//   let otp = "";
//   for (let i = 0; i < 4; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   return otp;
// }

// const otp = generateOtp();
// console.log(otp);


function generateOtp(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

document.getElementById("btn").addEventListener("click", function () {
  const otp = generateOtp();
  document.getElementById("otp-display").textContent = otp;
});