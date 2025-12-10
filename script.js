// CorridorTrack WhatsApp Integration

const FORM = document.getElementById('trackForm');
const INPUT = document.getElementById('trackingInput');
const WHATSAPP_BTN = document.getElementById('whatsappButton');
const WHATSAPP_BTN_FOOTER = document.getElementById('whatsappButtonFooter');
const WHATSAPP_FOOTER_LINK = document.getElementById('whatsappFooterLink');
const WHERE_BTN = document.getElementById('whereBtn');

// CorridorTrack WhatsApp Business number
const WHATSAPP_NUMBER = '18303471604';

function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Track form submission
if (FORM && INPUT) {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = INPUT.value.trim();
    if (!value) return;

    const link = buildWhatsAppLink(
      `Hi CorridorTrack 👋\n\nI want to track this shipment:\n\n${value}\n\nPlease send me the latest status, ETA and delay risk.`
    );
    window.open(link, '_blank');
  });
}

// "Where is my container?" button
if (WHERE_BTN && INPUT) {
  WHERE_BTN.addEventListener('click', () => {
    const value = INPUT.value.trim();
    if (!value) {
      INPUT.focus();
      INPUT.placeholder = 'Enter a container number first...';
      return;
    }
    const link = buildWhatsAppLink(
      `Hi CorridorTrack 👋\n\nWhere is my container right now?\n\n${value}`
    );
    window.open(link, '_blank');
  });
}

// Header WhatsApp button
if (WHATSAPP_BTN) {
  WHATSAPP_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink(
      'Hi CorridorTrack 👋\n\nWe move cargo on the Jebel Ali → Mombasa → Nairobi corridor. Can you show me how the delay prediction and WhatsApp tracking works?'
    );
    window.open(link, '_blank');
  });
}

// Footer CTA WhatsApp button
if (WHATSAPP_BTN_FOOTER) {
  WHATSAPP_BTN_FOOTER.addEventListener('click', (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink(
      'Hi CorridorTrack 👋\n\nI want to start tracking my containers. Can you help me get set up?'
    );
    window.open(link, '_blank');
  });
}

// Footer WhatsApp link
if (WHATSAPP_FOOTER_LINK) {
  WHATSAPP_FOOTER_LINK.addEventListener('click', (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink(
      'Hi CorridorTrack 👋\n\nI have a question about your service.'
    );
    window.open(link, '_blank');
  });
}

// Pricing buttons - wire to WhatsApp
document.querySelectorAll('.price-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const tierName = btn.closest('.price-card').querySelector('.price-name').textContent;
    const link = buildWhatsAppLink(
      `Hi CorridorTrack 👋\n\nI'm interested in the ${tierName} plan. Can you tell me more about how to get started?`
    );
    window.open(link, '_blank');
  });
});
