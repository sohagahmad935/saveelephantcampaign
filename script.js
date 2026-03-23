document.getElementById("reportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const type = document.getElementById("type").value;
    const datetime = document.getElementById("datetime").value;
    const description = document.getElementById("description").value;
    const photo = document.getElementById("photo").files[0];

    let imageURL = "images/default.jpg"; // fallback image

    if (photo) {
        imageURL = URL.createObjectURL(photo);
    }

    // Create card
    const card = document.createElement("div");
    card.classList.add("report-card");

    card.innerHTML = `
        <img src="${imageURL}" alt="Incident Image">
        <div class="report-info">
            <h3>${type}</h3>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date:</strong> ${datetime}</p>
            <p>${description}</p>
        </div>
    `;

    document.getElementById("reportsContainer").prepend(card);

    // Reset form
    document.getElementById("reportForm").reset();
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

// OPEN POPUP
document.querySelectorAll(".learn-more").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".solution-card");

        modalImg.src = card.dataset.img;
        modalTitle.textContent = card.dataset.title;
        modalText.textContent = card.dataset.full;

        modal.style.display = "flex";
    });
});

// CLOSE POPUP (Leave button)
document.getElementById("leave-btn").onclick = () => {
    modal.style.display = "none";
};

// CLOSE POPUP (X button)
document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};

// CLICK OUTSIDE TO CLOSE
modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
});