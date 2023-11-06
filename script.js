const url = "https://api.msigma.in/btech/v2/branches";

const request = fetch("https://api.msigma.in/btech/v2/branches/");

const main = document.querySelector(".container");

request
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i < 10; i++) {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("CourseCard");

      const cardCourseName = document.createElement("h2");
      cardCourseName.classList.add("courseName");
      const h2Tag = document.createElement("h3");
      const cardApplyNow = document.createElement("button");
      cardApplyNow.classList.add("applyNow");
      const CardDescription = document.createElement("p1");
      CardDescription.classList.add("CardDescription");

      cardApplyNow.textContent = "Apply Now";
      CardDescription.textContent = "Fee starting at ₹799 per subject";
      h2Tag.textContent = data.branches[i].short;
      cardCourseName.textContent = data.branches[i].name;

      console.log(data.branches[i].short);
      console.log(data.branches[i].name);
      let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      h2Tag.style.color = randomcolor;
      cardDiv.appendChild(h2Tag);
      cardDiv.appendChild(cardCourseName);
      //   cardTopHead.appendChild(cardCourseHeader);
      //   cardTop.appendChild(cardTopHead);
      //   cardDiv.appendChild(cardTop);

      cardDiv.appendChild(cardApplyNow);
      cardDiv.appendChild(CardDescription);

      main.appendChild(cardDiv);
    }
  })
  .catch((error) => console.log(error));
