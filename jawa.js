// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


// ==========================
// CURSOR GLOW
// ==========================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ==========================
// 3D PHOTO EFFECT
// ==========================

const imageCard = document.querySelector(".image-card");
const imageArea = document.querySelector(".hero-image-area");

imageArea.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 950) return;

    const rect = imageArea.getBoundingClientRect();

    const x =
        (e.clientX - rect.left) /
        rect.width -
        0.5;

    const y =
        (e.clientY - rect.top) /
        rect.height -
        0.5;

    imageCard.style.transform = `
        perspective(1000px)
        rotateY(${x * 8}deg)
        rotateX(${y * -6}deg)
        scale(1.02)
    `;

});


imageArea.addEventListener("mouseleave", () => {

    imageCard.style.transform = "";

});


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================
// REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");


// Open Chat
function openChat() {

    chatBox.classList.add("active");

    // Hide hello button
    document.querySelector(".hello-btn").style.display = "none";

    setTimeout(() => {
        messageInput.focus();
    }, 300);
}


// Close Chat
function closeChat() {

    chatBox.classList.remove("active");

    // Show hello button again
    document.querySelector(".hello-btn").style.display = "block";
}


// Send Message
function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }


    // User message
    const userMessage = document.createElement("div");

    userMessage.classList.add("message", "user");

    userMessage.innerText = message;

    chatMessages.appendChild(userMessage);


    // Clear input
    messageInput.value = "";


    // Auto bot reply
    setTimeout(() => {

        const botMessage = document.createElement("div");

        botMessage.classList.add("message", "bot");

        botMessage.innerText =
            "Thanks for your message! 😊 I'll get back to you soon.";

        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 700);


    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Enter Key
function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}
// OPEN CHAT

function openChat() {

    document.getElementById("chatBox")
        .classList.add("active");

}


// CLOSE CHAT

function closeChat() {

    document.getElementById("chatBox")
        .classList.remove("active");

}


// SEND MESSAGE

function sendMessage() {

    const input =
        document.getElementById("messageInput");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }


    const chatBody =
        document.querySelector(".chat-body");


    // USER MESSAGE

    const userMessage =
        document.createElement("div");

    userMessage.innerText = message;

    userMessage.style.cssText = `
        display: block;
        width: fit-content;
        max-width: 80%;
        margin: 10px 0 10px auto;
        padding: 12px 16px;
        background: #00d9ff;
        color: #061116;
        border-radius: 18px 18px 4px 18px;
        font-size: 14px;
    `;

    chatBody.appendChild(userMessage);


    // CLEAR INPUT

    input.value = "";


    // AUTO REPLY

    setTimeout(() => {

        const reply =
            document.createElement("div");

        reply.className = "bot-message";

        reply.innerText =
            "Thanks for your message! 👋 I'll get back to you soon.";

        chatBody.appendChild(reply);

        chatBody.scrollTop =
            chatBody.scrollHeight;

    }, 700);


    chatBody.scrollTop =
        chatBody.scrollHeight;
}