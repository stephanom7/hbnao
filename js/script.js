// Extensiones a probar en orden, para cada foto (soluciona el problema de .JPG / .jpeg mezclados)
const POSSIBLE_EXTENSIONS = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"];

function createSmartImage(num, altText, extraClass) {
  const img = document.createElement("img");
  img.alt = altText;
  if (extraClass) img.classList.add(extraClass);

  let extIndex = 0;

  function tryNextExtension() {
    if (extIndex >= POSSIBLE_EXTENSIONS.length) {
      img.alt = `Foto ${num} no encontrada`;
      return;
    }
    img.src = `images/${num}.${POSSIBLE_EXTENSIONS[extIndex]}`;
    extIndex++;
  }

  img.onerror = tryNextExtension;
  tryNextExtension();

  return img;
}

// ---- Portada ----
const coverPhotoOld = document.querySelector(".cover-photo");
const coverPhotoNew = createSmartImage(coverData.image, "Ella", "cover-photo");
coverPhotoOld.replaceWith(coverPhotoNew);

if (coverData.title) document.getElementById("cover-title").textContent = coverData.title;
if (coverData.subtitle) document.getElementById("cover-subtitle").textContent = coverData.subtitle;

// ---- Timeline ----
const timelineEl = document.getElementById("timeline");

timelineData.forEach(entry => {
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("entry");

  const card = document.createElement("div");
  card.classList.add("entry-card");

  const dateEl = document.createElement("div");
  dateEl.classList.add("entry-date");
  dateEl.textContent = entry.date;
  card.appendChild(dateEl);

  const photosDiv = document.createElement("div");
  photosDiv.classList.add("entry-photos", `size-${entry.size || "sm"}`);

  entry.images.forEach(num => {
    const img = createSmartImage(num, `Recuerdo ${num}`);

    if (entry.framed) {
      const frame = document.createElement("div");
      frame.classList.add("framed-small");
      frame.appendChild(img);
      photosDiv.appendChild(frame);
    } else {
      photosDiv.appendChild(img);
    }
  });

  card.appendChild(photosDiv);

  const captionEl = document.createElement("p");
  captionEl.classList.add("entry-caption");
  captionEl.textContent = entry.caption;
  card.appendChild(captionEl);

  entryDiv.appendChild(card);
  timelineEl.appendChild(entryDiv);
});