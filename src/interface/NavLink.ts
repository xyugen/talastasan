interface NavLink {
  title: string;
  link: string;
  items?: NavLink[];
}

export default NavLink;