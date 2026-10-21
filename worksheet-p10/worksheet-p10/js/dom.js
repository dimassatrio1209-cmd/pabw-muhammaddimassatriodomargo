import { daftarProyek } from "./app.js";

// A.2: elemen halaman yang akan diisi atau ditangani.
const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const emptyMessage = document.querySelector("#empty-message");

const form = document.querySelector("#contact-form");
const namaInput = document.querySelector("#nama");
const emailInput = document.querySelector("#email");
const pesanInput = document.querySelector("#pesan");

const namaError = document.querySelector("#nama-error");
const emailError = document.querySelector("#email-error");
const pesanError = document.querySelector("#pesan-error");
const submitButton = document.querySelector("#submit-button");
const formStatus = document.querySelector("#form-status");

// Fail early with a useful message if HTML selectors do not match.
const requiredElements = [
  container, filterRow, emptyMessage, form,
  namaInput, emailInput, pesanInput,
  namaError, emailError, pesanError, submitButton, formStatus,
];

if (requiredElements.some((element) => element === null)) {
  throw new Error(
    "Elemen DOM tidak ditemukan. Periksa selector pada profil.html dan js/dom.js."
  );
}

// B.1: build one project card from one data object.
function buildCard(project) {
  const li = document.createElement("li");
  li.className = "project-card card";

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.judul;

  const year = document.createElement("p");
  year.className = "project-year";
  year.textContent = `Tahun: ${project.tahun}`;

  const status = document.createElement("span");
  status.className = project.selesai
    ? "project-status status-done"
    : "project-status status-pending";
  status.textContent = project.selesai ? "Selesai" : "Belum selesai";

  li.append(title, year, status);
  return li;
}

// D.1: clear, handle empty state, then render data.
function render(list) {
  container.textContent = "";

  if (list.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;
  const fragment = document.createDocumentFragment();

  list.forEach((project) => {
    fragment.append(buildCard(project));
  });

  container.append(fragment);
}

// C.2: keep the active filter button visually and semantically marked.
function markActiveButton(activeButton) {
  filterRow.querySelectorAll("button").forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

// C.1: one listener on the parent handles every filter button.
filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !filterRow.contains(button)) {
    return;
  }

  const category = button.dataset.category;
  const selected = daftarProyek.filter((project) => {
    if (category === "all") return true;
    if (category === "selesai") return project.selesai === true;
    if (category === "belum") return project.selesai === false;
    return false;
  });

  render(selected);
  markActiveButton(button);
});

// D.2-D.3: validate each field separately.
function validateNama() {
  const valid = namaInput.value.trim().length > 0;
  namaError.textContent = valid ? "" : "Nama wajib diisi.";
  namaInput.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  emailError.textContent = valid
    ? ""
    : "Masukkan alamat email yang valid.";
  emailInput.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function validatePesan() {
  const valid = pesanInput.value.trim().length > 0;
  pesanError.textContent = valid ? "" : "Pesan wajib diisi.";
  pesanInput.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function validateForm() {
  const namaValid = validateNama();
  const emailValid = validateEmail();
  const pesanValid = validatePesan();

  return namaValid && emailValid && pesanValid;
}

function updateSubmitButton() {
  const namaValid = namaInput.value.trim().length > 0;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  const pesanValid = pesanInput.value.trim().length > 0;

  submitButton.disabled = !(namaValid && emailValid && pesanValid);
  formStatus.textContent = "";
}

// Validate the edited field as the user types or leaves that field.
namaInput.addEventListener("input", () => {
  validateNama();
  updateSubmitButton();
});
emailInput.addEventListener("input", () => {
  validateEmail();
  updateSubmitButton();
});
pesanInput.addEventListener("input", () => {
  validatePesan();
  updateSubmitButton();
});

namaInput.addEventListener("blur", validateNama);
emailInput.addEventListener("blur", validateEmail);
pesanInput.addEventListener("blur", validatePesan);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    submitButton.disabled = true;
    formStatus.textContent = "Periksa kembali kolom yang ditandai.";
    return;
  }

  // This exercise validates client-side input; it does not send data to a server.
  formStatus.textContent = "Validasi berhasil. Formulir siap diproses.";
});

// Initial page state: all projects are shown and the "Semua" button is active.
render(daftarProyek);
const allButton = filterRow.querySelector('[data-category="all"]');
if (allButton) {
  markActiveButton(allButton);
}
submitButton.disabled = true;
