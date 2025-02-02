interface NavLink {
  title: string;
  link: string;
  items?: NavLink[];
  disabled?: boolean;
}

export default NavLink;