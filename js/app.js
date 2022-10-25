const input = document.querySelector("input");
const preview = document.querySelector(".preview");
const image = document.querySelector(".preview img");

const tag = document.createElement("div");
tag.setAttribute("class", "error");

const detectFile = (file) => {
  file = input.files[0];
  if (file) {
    if (file.type !== "image/png") {
      tag.textContent = "فرمت مجاز عکس برای بارگزاری فقط png میباشد.";
      if (file.size >= 5000000)
        tag.textContent = "حداکثر حجم مجاز برای بارگزاری 5 مگابایت است.";
      document.querySelector(".container").appendChild(tag);
    } else {
      if (tag) {
        tag.remove();
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          preview.style.display = "flex";
          image.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(file);
      } else return;
    }
  } else return;
};

input.addEventListener("change", (e) => {
  detectFile(e.target);
});
