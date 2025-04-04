
let modalWindow,alertTime;
let alertCertification = document.querySelector("#alertCertification");
let certificateRequestEmail = document.querySelector("#certificateRequestEmail");

document.querySelector("a#buttonCertificate").addEventListener("click",() => {

  modalWindow = new bootstrap.Modal(document.querySelector('#requestCertificate'));
  modalWindow.show();
});

function closeModal(){
  clearTimeout(alertTime);
  alertCertification.classList.remove("visually-hidden");
  alertTime = setTimeout(() => {
    alertCertification.classList.add("visually-hidden");
    certificateRequestEmail.value = "";
  }, 2500);
  modalWindow.hide();
  this.submit();
}