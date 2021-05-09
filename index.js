function inviteRedirect() {
  window.location.href =
    "https://avyansh0001.github.io/avyanshralph/#0";
}

function supportRedirect() {
  window.location.href = "https://discord.gg/2qMZReUxFH";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const x = document.getElementById("darkmode");
  if (x.innerHTML === "Dark mode.") {
    x.innerHTML = "Light mode.";
  } else {
    x.innerHTML = "Dark mode.";
  }
}
