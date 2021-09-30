import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  // document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  var container = document.createElement("div");
  container.classList = "container";
  var breed = [
    "Hound",
    "Finnish Lapphund",
    "Dachshund",
    "Corgi",
    "Australian shepherd"
  ];
  breed.forEach(function (element) {
    var item = document.createElement("div");
    item.classList = "wiki-item";
    var header = document.createElement("h1");
    header.classList = "wiki-header";
    header.innerHTML = element;
    var content = document.createElement("div");
    content.classList = "wiki-content";
    var text = document.createElement("p");
    text.classList = "wiki-text";
    fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        element.replace(" ", "_")
    )
      .then((response) => response.json())
      .then((data) => (text.innerHTML = data.extract));

    text.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus placerat neque, a laoreet mauris fermentum vel. Integer lectus magna, interdum at orci eget, posuere scelerisque leo. Cras enim massa, egestas non quam eget, pharetra pellentesque nulla. Ut quis auctor enim, vel sodales leo. Mauris id ex justo. Proin in euismod ex. Vestibulum egestas id eros quis faucibus. Praesent ipsum sem, mattis ultricies venenatis sed, venenatis nec augue. Ut vehicula.";

    var img_container = document.createElement("div");
    img_container.classList = "img-container";

    var img = document.createElement("img");
    img.classList = "wiki-img";
    fetch(
      "https://dog.ceo/api/breed/" +
        element.toLowerCase().split(" ")[0] +
        "/images/random"
    )
      .then((response) => response.json())
      .then((data) => (img.src = data.message));
    item.appendChild(header);
    item.appendChild(content);
    img_container.appendChild(img);
    content.appendChild(img_container);
    content.appendChild(text);
    container.appendChild(item);
  });
  document.body.appendChild(container);
}
