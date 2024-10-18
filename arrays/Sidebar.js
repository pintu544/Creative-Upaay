import Home from "@/assets/homeIcon.svg";
import Message from "@/assets/messageIcon.svg";
import Task from "@/assets/taskIcon.svg";
import Member from "@/assets/usersIcon.svg";
import Setting from "@/assets/settingIcon.svg";

export const MenuList = [
  {
    name: "Home",
    url: "/",
    icon: <Home className="mdIcon" />,
  },
  {
    name: "messages",
    url: "/",
    icon: <Message className="mdIcon" />,
  },
  {
    name: "tasks",
    url: "/",
    icon: <Task className="mdIcon" />,
  },
  {
    name: "members",
    url: "/",
    icon: <Member className="mdIcon" />,
  },
  {
    name: "settings",
    url: "/",
    icon: <Setting className="mdIcon" />,
  },
];

export const subMenuList = [
  {
    name: "mobile app",
    color: "#7AC555",
  },
  {
    name: "website redesign",
    color: "#FFA500",
  },
  {
    name: "design system",
    color: "#E4CCFD",
  },
  {
    name: "wireframes",
    color: "#76A5EA",
  },
];
