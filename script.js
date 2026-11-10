let selectedCause = "Temple Construction";
let selectedAmount = 0;

document.querySelectorAll("[data-cause]").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCause = btn.dataset.cause;

    document.querySelectorAll(".choice").forEach(x => {
      x.classList.toggle(
        "active",
        x.dataset.cause === selectedCause
      );
    });

    document.getElementById("donate").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".amount").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedAmount = Number(btn.dataset.amount);

    document.getElementById("customAmount").value = "";

    document.querySelectorAll(".amount").forEach(x => {
      x.classList.toggle("active", x === btn);
    });
  });
});

document.getElementById("customAmount").addEventListener("input", e => {
  selectedAmount = Number(e.target.value || 0);

  document.querySelectorAll(".amount").forEach(x => {
    x.classList.remove("active");
  });
});

document.getElementById("donateButton").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const status = document.getElementById("status");

  if (!selectedAmount || selectedAmount < 1) {
    status.textContent =
      "Please select or enter a donation amount.";
    return;
  }

  if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
    status.textContent =
      "Please enter a valid 10-digit Indian mobile number.";
    return;
  }

  status.textContent =
    `Ready for Cashfree: ${selectedCause} • ₹${selectedAmount.toLocaleString("en-IN")} • ${name || "Anonymous donor"} • ${mobile}${email ? " • " + email : ""}`;
});
