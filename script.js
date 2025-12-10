function trackCargo() {
  const input = document.getElementById("trackingInput");
  const value = input ? input.value.trim() : "";

  if (!value) {
    alert("Enter a BL or container number to track.");
    return;
  }

  // TODO: plug in real tracking logic / API or WhatsApp flow
  alert(
    `We’d normally lookup "${value}" and send a WhatsApp-style update.\n\nFor now this is just a demo.`
  );
}

function scrollToPricing() {
  const el = document.getElementById("pricing");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function startOnWhatsApp() {
  // TODO: replace with your real WhatsApp business number
  const number = "254700000000"; // example format without +
  const msg = encodeURIComponent(
    "Hi CorridorTrack – I’d like to track a container."
  );
  const url = `https://wa.me/${number}?text=${msg}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("whatsappTop");
  const bottomBtn = document.getElementById("whatsappBottom");

  if (topBtn) topBtn.addEventListener("click", (e) => { e.preventDefault(); startOnWhatsApp(); });
  if (bottomBtn) bottomBtn.addEventListener("click", (e) => { e.preventDefault(); startOnWhatsApp(); });
});
