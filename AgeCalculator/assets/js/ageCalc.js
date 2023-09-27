document.addEventListener("DOMContentLoaded", function () {
    const birthdateInput = document.getElementById("birthdate");
    const calculateAgeButton = document.getElementById("calculateAge");
    const ageResult = document.getElementById("age");

    calculateAgeButton.addEventListener("click", function () {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();

        if (birthdate > today) {
            ageResult.textContent = "Invalid birthdate";
        } else {
            const age = today.getFullYear() - birthdate.getFullYear();
            ageResult.textContent = `Your age is: ${age} years`;
        }
    });
});
