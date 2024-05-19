document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const stickmanContainer = document.getElementById("stickmanContainer");
    const bubble = document.getElementById("bubble");
    const stickman = document.getElementById("stickman");
    const head = document.getElementById("head");
    const leftArm = document.getElementById("leftArm");
    const rightArm = document.getElementById("rightArm");

    // Show the start button on load
    startButton.style.display = "block";

    // Click event for the start button
    startButton.addEventListener("click", function () {
        startButton.style.display = "none";
        document.body.style.animation = "backgroundChange 2s forwards";
        setTimeout(() => {
            stickmanContainer.style.display = "block";
            showMessage("ΣΟΦΙΑ", () => {
                moveArmsUp();
                showMessage("ΧΡΟΝΙΑ ΠΟΛΛΑ!", () => {
                    moveArmsDown();
                    showMessage("ΣΑΓΑΠΩ ΠΟΛΥ", () => {
                        moveArmsUp();
                        setTimeout(() => {
                            dab();
                            setTimeout(() => {
                                confetti();
                                setTimeout(() => {
                                    document.body.style.backgroundColor = "black";
                                }, 3000);
                            }, 1000);
                        }, 2000);
                    });
                });
            });
        }, 2000);
    });

    function showMessage(message, callback) {
        bubble.style.display = "block";
        bubble.textContent = message;
        setTimeout(() => {
            bubble.style.display = "none";
            callback();
        }, 2000);
    }

    function moveArmsUp() {
        leftArm.style.transform = "rotate(-45deg) translateX(-100%)";
        rightArm.style.transform = "rotate(45deg) translateX(100%)";
    }

    function moveArmsDown() {
        leftArm.style.transform = "translateX(-100%)";
        rightArm.style.transform = "translateX(100%)";
    }

    function dab() {
        leftArm.style.transform = "rotate(-135deg) translateX(-100%)";
        rightArm.style.transform = "rotate(135deg) translateX(100%)";
        head.style.transform = "rotate(-45deg) translateX(-50%)";
    }

    function confetti() {
        for (let i = 0; i < 100; i++) {
            const confetto = document.createElement("div");
            confetto.className = "confetti";
            confetto.style.backgroundColor = getRandomColor();
            confetto.style.left = Math.random() * 100 + "vw";
            document.body.appendChild(confetto);
        }
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
