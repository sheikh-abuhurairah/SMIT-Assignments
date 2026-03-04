const addForm   = document.querySelector(".add");
const search    = document.querySelector(".search input");
const list      = document.querySelector(".todos");
const noResults = document.querySelector(".no-results");
const html      = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) {
    html.setAttribute("data-theme", "dark");
    toggleBtn.querySelector(".theme-icon").textContent = "☀️ Light";
  }
}

toggleBtn.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.querySelector(".theme-icon").textContent = "🌙 Dark";
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.querySelector(".theme-icon").textContent = "☀️ Light";
  }
});

initTheme();

function saveEdit(li, newText) {
  const span = li.querySelector(".todo-text");
  if (span) {
    span.textContent = newText.trim() || span.textContent;
    span.style.display = "";
  }
  li.classList.remove("editing");
}

function cancelEdit(li) {
  const input = li.querySelector(".edit-input");
  const span  = li.querySelector(".todo-text");
  if (input && span) {
    span.textContent = input.dataset.original || span.textContent;
    span.style.display = "";
  }
  li.classList.remove("editing");
  input?.remove();
}

function generateTemplate(todo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = todo;

  const icon = document.createElement("idx");
  icon.className = "far fa-trash-alt delete";

  li.append(span, icon);
  list.appendChild(li);

  list.classList.remove("empty-list");

  span.addEventListener("dblclick", () => {
    if (li.classList.contains("editing")) return;

    li.classList.add("editing");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "edit-input";
    input.value = span.textContent;
    input.dataset.original = span.textContent;

    span.style.display = "none";
    li.insertBefore(input, span.nextSibling);
    input.focus();
    input.select();

    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        saveEdit(li, input.value);
        input.remove();
      } else if (e.key === "Escape") {
        cancelEdit(li);
        input.remove();
      }
    });

    input.addEventListener("blur", () => {
      saveEdit(li, input.value);
      input.remove();
    });
  });
}

function filterTodos(term) {
  const items = Array.from(list.children);
  let visible = 0;

  items.forEach(item => {
    const textElement = item.querySelector(".todo-text");
    if (!textElement) return;

    const text = textElement.textContent.toLowerCase().trim();

    if (text.includes(term)) {
      item.classList.remove("filtered");
      visible++;
    } else {
      item.classList.add("filtered");
    }
  });

  noResults.style.display = visible === 0 && items.length > 0 ? "block" : "none";
}

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
    addForm.add.focus();
  }
});

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    if (list.children.length === 0) {
      list.classList.add("empty-list");
      noResults.style.display = "none";
    }
  }
});

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

addForm.add.focus();