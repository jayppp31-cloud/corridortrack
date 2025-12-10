// Simple front-end wiring for CorridorTrack hero

const FORM = document.getElementById('trackForm');
const INPUT = document.getElementById('trackingInput');
const WHATSAPP_BTN = document.getElementById('whatsappButton');
const WHERE_BTN = document.getElementById('whereBtn');

// Put your WhatsApp number here, international format without +
const WHATSAPP_NUMBER = '254700000000'; // TODO: replace with your real number

function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

if (FORM && INPUT) {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = INPUT.value.trim();
    if (!value) return;

    const msg = `Hi CorridorTrack 👋%0A%0AI want to track this shipment:%0A%0A${value}%0A%0APlease send me the latest status, ETA and delay risk.`;
    const link = buildWhatsAppLink(
      `Hi CorridorTrack 👋\n\nI want to track this shipment:\n${value}\n\nPlease send me the latest status, ETA and delay risk.`
    );
    window.open(link, '_blank');
  });
}

if (WHATSAPP_BTN) {
  WHATSAPP_BTN.addEventListener('click', () => {
    const link = buildWhatsAppLink(
      'Hi CorridorTrack 👋\n\nWe move cargo on the Jebel Ali → Mombasa → Nairobi corridor. Can you show me how the delay prediction and WhatsApp tracking works?'
    );
    WHATSAPP_BTN.setAttribute('href', link);
    window.open(link, '_blank');
  });
}

if (WHERE_BTN && INPUT) {
  WHERE_BTN.addEventListener('click', () => {
    if (!INPUT.value.trim()) {
      INPUT.focus();
      return;
    }
    const link = buildWhatsAppLink(
      `Hi CorridorTrack 👋\n\nWhere is my container right now?\n\n${INPUT.value.trim()}`
    );
    window.open(link, '_blank');
  });
}