document.addEventListener("DOMContentLoaded", () => {
    const phoneBtn = document.getElementById("copyPhone");
    const copyMsg = document.getElementById("copyMsg");

    const phoneNumber = "+65 8370 7662"; // ← CHANGE THIS

    phoneBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(phoneNumber);

            // show feedback
            copyMsg.classList.add("show");

            setTimeout(() => {
                copyMsg.classList.remove("show");
            }, 1500);

        } catch (err) {
            console.error("Clipboard failed:", err);
        }
    });
});