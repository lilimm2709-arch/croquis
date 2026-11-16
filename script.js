// ==========================================
// NUESTRA HISTORIA EN LA CDMX (16 LUGARES)
// ==========================================
const places = [
  {
    id: 1,
    name: "Universidad Panamericana",
    icon: "🎓",
    category: "Mixcoac",
    top: "72%", 
    left: "28%",
    html: `
      <p><strong>El lugar:</strong> La UP. Un punto clave en nuestro día a día.</p>
      <p><strong>Lo que representa:</strong> Es el lugar donde comenzamos a conocernos. Recuerdo cuando vimos "The Shinning" y solo quería compartir más tiempo contigo mientras disfrutábamos de snacks de Café Diseño.</p>
    `
  },
  {
    id: 2,
    name: "Beergarden Roma",
    icon: "🍻",
    category: "Colonia Roma",
    top: "35%", 
    left: "62%",
    html: `
      <p><strong>El lugar:</strong> El lugar donde comenzó nuestra historia.</p>
      <p><strong>Lo que sentí:</strong> Sentí que mi alma ya te conocía. La conexión que tuvimos desde el momento 1 fue increíble y que también sea el lugar donde empezó la cuenta oficial de nuestro amor el 26 de julio de 2026, lo hace aún más especial.</p>
      <img src="assets/beergarden.jpeg" alt="Beergarden Roma" class="modal-img">
    `
  },
  {
    id: 3,
    name: "Casa de Vale",
    icon: "🏠",
    category: "Punto Especial",
    top: "60%", 
    left: "55%",
    html: `
      <p><strong>El lugar:</strong> Una dirección que ya es parte de nuestra historia.</p>
      <p><strong>Lo que significa:</strong> El lugar de nuestro primer beso. Tienes razón, no podía dejar de tocar tus brazos que siempre van a encantarme, te amo y recuerdo ese día con mucha emoción.</p>
      <img src="assets/motozintla.jpeg" alt="Motozintla 86B" class="modal-img">
    `
  },
  {
    id: 4,
    name: "Casa de Roy",
    icon: "📍",
    category: "Disfrazados",
    top: "52%", 
    left: "22%",
    html: `
      <p><strong>El lugar:</strong> Nuestra primera fiesta de disfraces.</p>
      <p><strong>Lo que representa:</strong> Los piratas más guapos. Me hizo mucha ilusión poder disfrazarme contigo amor y disfrutar a tu lado.</p>
      <img src="assets/cascada.jpeg" alt="Cascada 713" class="modal-img">
    `
  },
  {
    id: 5,
    name: "Teatro Metropólitan",
    icon: "🎭",
    category: "Centro Histórico",
    top: "26%", 
    left: "48%",
    spotifyId: "2FSMtTgsTxHfMb90fVFvsx", // ID de Spotify para el Metropólitan
    html: `
      <p><strong>El lugar:</strong> Las luces, la emoción y el centro de la CDMX.</p>
      <p><strong>Lo que sentí:</strong> Aunque no terminó de manera ideal, ha sido una de mis favoritas, fue mágico escuchar en vivo esas canciones que siempre me recordarán a ti. Dale play a esta canción que me recuerda a esa noche:</p>
    `
  },
  {
    id: 6,
    name: "Casa di Mahia / Verdanna",
    icon: "✨",
    category: "Nuestros primeros lugares",
    top: "42%", 
    left: "72%",
    html: `
      <p><strong>El lugar:</strong> Casa di Mahia y Verdanna.</p>
      <p><strong>Lo que significa:</strong> El mejor chai y las mejores galletas que me recuerdan a cuando empezamos a hablar.</p>
    `
  },
  {
    id: 7,
    name: "Torre Manacar",
    icon: "🏢",
    category: "Insurgentes Sur",
    top: "64%", 
    left: "38%",
    html: `
      <p><strong>El lugar:</strong> Cinemex, Manacar.</p>
      <p><strong>Lo que recuerdo:</strong> Latte alto con dos de Splenda y una película muy mala a la que nos colamos.</p>
    `
  },
  {
    id: 8,
    name: "Galerías Insurgentes",
    icon: "🛍️",
    category: "Col. Del Valle",
    top: "46%", 
    left: "42%",
    html: `
      <p><strong>El lugar:</strong> Galerías Insurgentes.</p>
      <p><strong>Lo que disfruto:</strong> Un vinito, una pizza, una pasta. Amarnos, reírnos y reencontrarnos.</p>
    `
  },
  {
    id: 9,
    name: "Gabriel Mancera 1215",
    icon: "🏡",
    category: "Col. Del Valle",
    top: "56%", 
    left: "68%",
    html: `
      <p><strong>El lugar:</strong> Gabriel Mancera.</p>
      <p><strong>Lo que significa:</strong> Mi casa, tu casa. Hemos compartido tanto aquí. Gracias por haberme dado el mejor regalo hace un año: un beso y el incio de lo que estamos construyendo juntos.</p>
    `
  },
  {
    id: 10,
    name: "Bosque de Chapultepec",
    icon: "🌳",
    category: "Poniente CDMX",
    top: "30%", 
    left: "32%",
    html: `
      <p><strong>El lugar:</strong> El pulmón de la ciudad.</p>
      <p><strong>Lo que sentí:</strong> Un paseo entre los árboles, luces y la mejor compañía. Esa noche me sentí tan feliz y plena a tu lado.</p>
      <img src="assets/chapultepec.jpeg" alt="Bosque de Chapultepec" class="modal-img">
    `
  },
  {
    id: 11,
    name: "Cineteca Nacional (Xoco)",
    icon: "🎬",
    category: "Cultura y Cine",
    top: "78%", 
    left: "45%",
    html: `
      <p><strong>El lugar:</strong> La Cineteca en Xoco.</p>
      <p><strong>Lo que representa:</strong> Nuestro primer San Valentín, gracias por haber pensado en todo. Los tulipanes, la manta y los lienzos.</p>
    `
  },
  {
    id: 12,
    name: "Centro de Coyoacán",
    icon: "⛲",
    category: "Sur de la CDMX",
    top: "80%", 
    left: "75%",
    html: `
      <p><strong>El lugar:</strong> Las calles empedradas y la vibra romántica de Coyoacán.</p>
      <p><strong>Lo que significa:</strong> Coyoacán se ha vuelto de mis lugares favoritos para compartir contigo. El museo de acuarela, donde renombramos las pinturas (mucho mejor), y hablamos sobre nosotros. Celebramos nuestro primer 15 de septiembre juntos y probamos más pan de muerto.</p>
    `
  },
  {
    id: 13,
    name: "Mítikah",
    icon: "🏙️",
    category: "Xoco / Río Churubusco",
    top: "68%", 
    left: "60%",
    html: `
      <p><strong>El lugar:</strong> Mítikah.</p>
      <p><strong>Lo que sentí:</strong> Estaba muy nerviosa cuando fuimos a ver "El Cadáver de la Novia", disfruté tanto verla contigo.</p>
    `
  },
  {
    id: 14,
    name: "Estadio GNP (Foro Sol)",
    icon: "🎤",
    category: "Oriente CDMX / Conciertos",
    top: "28%", 
    left: "82%",
    spotifyId: "7FCfMXYTIiQ9b4hDYs4Iol", // ID de Spotify para el Foro Sol
    html: `
      <p><strong>El lugar:</strong> El Estadio GNP Seguros, vibrando con música de la segunda mujer más guapa del mundo (tú ocupas el primer lugar).</p>
      <p><strong>Lo que sentí:</strong> Cantar a tu lado, sentir tu mirada mientras yo me perdía viendo a Dua, salir y conocer a tus papás. Todo hizo que me sintiera muy segura de que estaba enamorada de ti. Y ese sentimiento solo crece más y más cada día. Escucha esta:</p>
    `
  },
  {
    id: 15,
    name: "Expo Santa Fe",
    icon: "🎪",
    category: "Poniente / Santa Fe",
    top: "44%", 
    left: "15%",
    html: `
      <p><strong>El lugar:</strong> Expo Santa Fe, mi graduación.</p>
      <p><strong>Lo que sentí:</strong> Me sentí tan amada y apoyada por ti ese fin de semana, confirmé que eres el amor de mi vida y para mi vida.</p>
      <img src="assets/santafe.jpeg" alt="Expo Santa Fe" class="modal-img">
    `
  },
  {
    id: 16,
    name: "Paseo de la Reforma (El Ángel)",
    icon: "🗽",
    category: "Reforma",
    top: "18%", 
    left: "35%",
    html: `
      <p><strong>El lugar:</strong> Paseo de la Reforma en pleno mundial.</p>
      <p><strong>Lo que sentí:</strong> Nos engentamos, nos empapamos, pero cualquier momento a tu lado es maravilloso. Amo ser pegajosa y cursi contigo, aunque a Rose no le encantó jajaja. Mira este video:</p>
      <video controls class="modal-img" style="background: #000;">
        <source src="assets/reforma.mp4" type="video/mp4">
        Tu navegador no soporta videos.
      </video>
    `
  }
];

// ==========================================
// LÓGICA DEL MAPA Y MODAL (AUTOMÁTICA)
// ==========================================
const board = document.getElementById("pins-layer");
const modal = document.getElementById("modal");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

function renderMap() {
  board.innerHTML = "";
  places.forEach((place) => {
    const pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.top = place.top;
    pin.style.left = place.left;

    pin.innerHTML = `
      <span class="pin-icon">${place.icon}</span>
      <span>${place.name}</span>
    `;

    pin.addEventListener("click", () => openModal(place));
    board.appendChild(pin);
  });
}

function openModal(place) {
  modalCategory.textContent = place.category;
  modalTitle.textContent = place.name;
  
  let contentHtml = place.html;

  // Solo se genera el reproductor si el objeto incluye un spotifyId válido
  if (place.spotifyId) {
    contentHtml += `
      <iframe style="border-radius:12px; margin-top:12px;" 
        src="https://open.spotify.com/embed/track/${place.spotifyId}?utm_source=generator" 
        width="100%" height="152" frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    `;
  }

  modalBody.innerHTML = contentHtml;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

renderMap();