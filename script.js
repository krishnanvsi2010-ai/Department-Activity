const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzjIN5IaFHUk0gtQHlm8xVkKa08gEIVvPdmzlqPOpPUy3YvvtM7_hWG7Li2OBD7fN2-/exec";

document.getElementById("absenceForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = document.querySelector(".btn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    const data = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        batch: document.getElementById("batch").value,
        regNo: document.getElementById("regNo").value,
        email: document.getElementById("email").value,
        absentDate: document.getElementById("absentDate").value,
        reason: document.getElementById("reason").value
    };

    try {

        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.status === "success") {
            alert("✅ Your absence request has been submitted successfully.");
            document.getElementById("absenceForm").reset();
        } else {
            alert("❌ " + result.message);
        }

    } catch (error) {
        alert("❌ Unable to connect to the server.");
        console.error(error);
    }

    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Request";

});
