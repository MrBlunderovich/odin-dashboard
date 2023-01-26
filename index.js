const menu = document.querySelector(".sidebar__menu");
const userNameBig = document.querySelector(".hi-there__bottom");
const userNameSmall = document.querySelector(".username-small");
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
