import App_Routes from "../App_Routes";
class MenuItem {
  constructor(itemName, displayIndex, iconClass, route) {
    this.itemName = itemName;
    this.displayIndex = displayIndex;
    this.iconClass = iconClass;
    this.route = route;
  }
}
let menuItems = new Set();
//About section
menuItems.add(new MenuItem("About", 1, "fa-user", App_Routes.ABOUT));
//About Skills
menuItems.add(new MenuItem("Skills", 2, "fa-laptop-code", App_Routes.SKILLS));
//About Experience
menuItems.add(
  new MenuItem("Experience", 3, "fa-id-card-clip", App_Routes.EXPERIENCE.ROOT)
);
//About Education
menuItems.add(
  new MenuItem("Education", 4, "fa-user-graduate", App_Routes.EDUCATION)
);
//About Contact
menuItems.add(new MenuItem("Contact", 5, "fa-headset", App_Routes.CONTACT));

//Converting items to array
menuItems = Array.from(menuItems);

export default menuItems;
