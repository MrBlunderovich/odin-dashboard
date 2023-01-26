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
    text: "Ffdjkghi sduioyfaoidsuygfoiadsuf iuysdfgoiasduhgf iusdfhgaoidsuh oiaudfygoiaudsyh oiuasdyhiuay oiusdyiouygauyrgp9a 8eryp98 p9er8yp 98p98 up98y p98y p98y p8 ep98rpe8 p98 dfgdsf",
  },
  {
    heading: "Card heading",
    text: "Ffdjkghi sduioyfaoidsuygfoiadsuf iuysdfgoiasduhyh oiuasdyhiuay oiusdyiouygauyrgp9a 8eryp98 p9er8yp 98p98 up98y p98y p98y p8 ep98rpe8 p98 dfgdsf",
  },
  {
    heading: "Card heading",
    text: "Ffdjkghi sduioyfaoidsuygfoiadsuf iuysdfgoiasduhgf iusdfhgaoidsuh oiaudfygoiaudsyh oiuasdyhiuay oiusdyiouygauyrgp9a 8eryp98 p9er8yp 98p98 up98y p98y p98y p8 ep98rpe8 p98 dfgdsf",
  },
  {
    heading: "Card heading",
    text: "Ffdjkghi sduioyfaoidsuyg",
  },
  {
    heading: "Card heading",
    text: "Ffdjkghi sduioyfaoidsuygfoiadsuf iuysdfgoiasduhgf iusdfhgaoidsuh oiaudfygoiaudsyh oiuasdyhiuay oiusdyiouygauyrgp9a 8eryp98 p9er8yp 98p98 up98y p98y p98y p8 ep98rpe8 p98 dfgdsf",
  },
  {
    heading: "Card heading",
    text: "Ffdjkghi sduioyfaoidsuygfoiay oiusdyiouygauyrgp9a 8eryp98 p9er8yp 98p98 up98y p98y p98y p8 ep98rpe8 p98 dfgdsf",
  },
];
const announcementsBlock = document.querySelector(
  ".announcements > .right-card"
);
const announcements = [
  {
    heading: "Upcoming Event 1",
    text: "dfuighwieurh ieruahsdiu isudhaisdu sdiuhfsda",
  },
  {
    heading: "Upcoming Event 2",
    text: "dfuighwieurh ieruahsdiu isudhaisdu sdiuhfsda",
  },
  {
    heading: "Upcoming Event 3",
    text: "dfuighwieurh ieruahsdiu isudhaisdu sdiuhfsda",
  },
];
const cardIcons = `<i class="material-icons-outlined">
star_outline
</i><i class="material-icons-outlined">visibility
</i><i class="material-icons-outlined">
share
</i>`;
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
