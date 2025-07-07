document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name-field").value;
    const email = document.getElementById("email-field").value;
    const subject = document.getElementById("subject-field").value;
    const message = document.getElementById("message-field").value;
    const loading = document.querySelector(".loading");
    const error = document.querySelector(".error-message");
    const success = document.querySelector(".sent-message");
    loading.style.display = "block";
    error.style.display = "none";
    success.style.display = "none";

    try {
      const response = await fetch("https://hitham-portfoilo.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      success.style.display = "block";
      document.getElementById("contact-form").reset();
    } catch (err) {
      error.textContent = err.message;
      error.style.display = "block";
    } finally {
      loading.style.display = "none";
    }
  });

