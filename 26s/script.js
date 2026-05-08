function setup() {
  document.getElementsByClassName("p5Canvas")[0].style.display = "none";
  // loadStrings(filename, generateProjectLinks);
  loadTable(filename, 'csv', generateProjectLinks);
}

function draw() {
  noLoop();
}

function generateProjectLinks(results) {
  let rows = results.rows;
  rows = rows.sort((a, b) => 0.5 - Math.random());
  for (const row of rows) {
    let info = row.arr;
    const name = info[0];
    const title = info[1];
    const url = info[2];
    const description = info[3];

    createProjectBox(title, name, url, description);
  }
}

function createProjectBox(title, name, url, description) {
  // project box
  const container = document.getElementById("project-box-container");
  const div = document.createElement("div");
  container.appendChild(div);
  div.className = "project-box";

  const aTitle = document.createElement("a");
  div.appendChild(aTitle);
  aTitle.className = "project-title";
  aTitle.innerHTML = title.toLowerCase(); //.toUpperCase();
  aTitle.href = url;
  aTitle.target = "Project";

  const aName = document.createElement("a");
  div.appendChild(aName);
  aName.className = "project-student-name";
  aName.innerHTML = name.toLowerCase();

  const divPreview = document.getElementById("preview-container");
  const divPreviewTitle = document.getElementById("preview-title");
  const divPreviewStudentName = document.getElementById("preview-student-name");
  const divPreviewDescription = document.getElementById("preview-description");
  div.addEventListener("mouseover", () => {
    divPreviewTitle.innerHTML = title;
    divPreviewStudentName.innerHTML = name;
    divPreviewDescription.innerHTML = description;
    divPreview.classList.add('show');
  });
  div.addEventListener("mouseout", () => {
    divPreview.classList.remove('show');
  });
}