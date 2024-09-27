function solve() {
  const td = (content) => e("td", {}, content);
  const img = (src) => e("img", { src });
  const check = () => e("input", { type: "checkbox" });

  const [input, output] = document.querySelectorAll("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const table = document.querySelector("tbody");

  generateBtn.addEventListener("click", parseInput);
  buyBtn.addEventListener("click", summary);

  let data = [];

  function parseInput() {
    const json = input.value;
    data = JSON.parse(json);

    for (let entry of data) {
      table.appendChild(createRow(entry));
    }
  }

  function createRow(entry) {
    const row = document.createElement("tr");
    row.appendChild(td(img(entry.img)));
    row.appendChild(td(document.createTextNode(entry.name)));
    row.appendChild(td(document.createTextNode(entry.price)));
    row.appendChild(td(document.createTextNode(entry.decFactor)));

    const checkbox = check();

    row.appendChild(td(checkbox));

    entry.checked = () => checkbox.checked;

    return row;
  }

  function summary() {
    const selected = data.filter((e) => e.checked());

    const result = [
      `Bought furniture: ${selected.map((e) => e.name).join(", ")}`,
      `Total price: ${selected
        .reduce((a, c) => a + Number(c.price), 0)
        .toFixed(0)}`,
      `Average decoration factor: ${selected.reduce(
        (a, c, i, { length: t }) => a + Number(c.decFactor) / t,
        0
      )}`,
    ];

    output.value = result.join("\n");
  }

  function e(type, attr, content) {
    const result = document.createElement(type);

    Object.assign(result, attr);

    if (content) {
      result.appendChild(content);
    }

    return result;
  }
}
