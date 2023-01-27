const menu = document.querySelector(".sidebar__menu");
const userNameBig = document.querySelector(".hi-there__bottom");
const userNameSmall = document.querySelector(".username-small");
const cardContainer = document.querySelector(".card-grid-container");
const menuItems = [
  { icon: "home", text: "Home" },
  { icon: "account_box", text: "Profile" },
  { icon: "chat_bubble", text: "Messages" },
  { icon: "history", text: "History" },
  { icon: "done_all", text: "Tasks" },
  { icon: "groups_2", text: "Communities" },
  { icon: "", text: "" },
  { icon: "settings", text: "Settings" },
  { icon: "help_center", text: "Support" },
  { icon: "verified_user", text: "Privacy" },
];
const cards = [
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor sit amet, consectetur blanditiis labore magni. Culpa sit necessitatibus blanditiis voluptates explicabo!",
  },
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor  adipisicing elit. Atque nam nihil recusandae magni. Culpa sit necessitatibus blanditiis voluptates explicabo!",
  },
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor sit tatis sunt blanditiis labore magni. Culpa sit necessitatibus blanditiis voluptates explicabo!",
  },
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nam nihil recusandae veritatis sunt blanditiis labore magni. Culpa sit necessitatibus blanditiis voluptates explicabo!",
  },
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nam nihil recusandae veritatis sunt blanditiis labore magni.",
  },
  {
    heading: "Card heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nam  labore magni. Culpa sit necessitatibus blanditiis voluptates explicabo!",
  },
];
const announcementsBlock = document.querySelector(
  ".announcements > .right-card"
);
const announcements = [
  {
    heading: "Upcoming Event 1",
    text: "Lorem ipsum dolor sit tatis blanditiis voluptates explicabo!",
  },
  {
    heading: "Upcoming Event 2",
    text: "Lorem ipsum dolor sit voluptates explicabo!",
  },
  {
    heading: "Upcoming Event 3",
    text: "Lorem ipsum dolor sit tatis blanditiis voluptates !",
  },
];
const cardIcons = `<i class="material-icons-outlined">
star_outline
</i><i class="material-icons-outlined">visibility
</i><i class="material-icons-outlined">
share
</i>`;
const trendingBlock = document.querySelector(".trending > .right-card");
const trending = [
  { username: "userone", text: "Lorem, ipsum dolor." },
  { username: "usertwo", text: "Lorem, ipsum dolor." },
  { username: "userthree", text: "Lorem, ipsum dolor." },
  { username: "userfour", text: "Lorem, ipsum dolor." },
];
trendingBlock.innerHTML = trending
  .map(
    (item, index) =>
      `<div class="trending__item">
  <img
    src="https://unsplash.it/100/100?random=${index + 1}"
    alt="userpic"
    class="userpic"
  />
  <h4>@${item.username}</h4>
  <p>${item.text}</p>
</div>`
  )
  .join("");
const userName = "Biggus Dickus";
userNameSmall.textContent = userName;
userNameBig.textContent = `${userName} (@${userName
  .split(" ")[0]
  .toLowerCase()})`;
menu.innerHTML = menuItems
  .map(
    (item) =>
      `<li><i class="material-icons">${item.icon}</i>  ${item.text}</li>`
  )
  .join("");
cardContainer.innerHTML = cards
  .map(
    (card) =>
      `<div class="card">
    <h4>${card.heading}</h4>
    <p class="card-paragraph">
      ${card.text}
    </p>
    <div class="card-icon-container">${cardIcons}</div>
  </div>`
  )
  .join("");
announcementsBlock.innerHTML = announcements
  .map(
    (item) =>
      `<div class="announcements__item">
    <h4>${item.heading}</h4>
    <p>${item.text}</p>
  </div>`
  )
  .join("");
