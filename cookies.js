<script>
// Show popup only if not accepted
if (!localStorage.getItem("cookieAccepted")) {
    window.addEventListener("load", () => {
        document.getElementById("cookie-popup").classList.add("show");
    });
}

document.getElementById("cookie-accept").addEventListener("click", () => {
    document.getElementById("cookie-popup").classList.remove("show");
    localStorage.setItem("cookieAccepted", "true");
});
</script>
