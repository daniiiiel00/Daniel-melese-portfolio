emailjs.init({
  publicKey: "at6x8zRhApZ5qjW1b",
});

const form = document.getElementById("contact-form");
const loading = form.querySelector(".loading");
const errorMessage = form.querySelector(".error-message");
const sentMessage = form.querySelector(".sent-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  loading.style.display = "block";
  errorMessage.style.display = "none";
  sentMessage.style.display = "none";

  emailjs.sendForm("service_psg5s49", "template_8r8pa9t", form).then(
    () => {
      loading.style.display = "none";
      sentMessage.style.display = "block";
      form.reset();
    },
    (error) => {
      loading.style.display = "none";
      errorMessage.innerText =
        "❌ Message could not be sent. Please try again.";
      errorMessage.style.display = "block";
      console.error("EmailJS Error:", error);
    }
  );
});
