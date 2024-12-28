const example = document.querySelector(".example-modal");
  const navigationDrawer = example.querySelector("mdui-navigation-drawer");
  const openButton = example.querySelector(".open");
  const closeButton = example.querySelector(".close");

  openButton.addEventListener("click", () => navigationDrawer.open = true);
  closeButton.addEventListener("click", () => navigationDrawer.open = false);