const promptForm = document.getElementById("promptForm");
const promptInput = document.getElementById("prompt");
const displayPrompt = document.getElementById("displayPrompt");

promptForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userPrompt = promptInput.value.trim();

    if (userPrompt !== "") {
        displayPrompt.textContent = "Your Prompt: " + userPrompt;
        promptInput.value = "";
    }
});