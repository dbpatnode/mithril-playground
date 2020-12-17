m.render(
  document.body,
  m("main", [
    m(
      "h1",
      { class: "title" },
      "Check out this button, link (with a break in between) and unordered list!"
    ),
    m("button", "button"),
    m("br"),
    m("br"),
    m("a", { href: "url" }, "link"),
    m("ul", [m("li", "Item1"), m("li", "Item2"), m("li", "Item3")]),
  ])
);
