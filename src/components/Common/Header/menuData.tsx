import { Menu } from "@/types/menu";
import { useTransition } from "react";

const menuData = (t: (key: string) => string): Menu[] => [
  {
    id: 1,
    title: t("home"),
    path: "/",
    newTab: false,
  },

  {
    id: 2,
    title: t("products"),
    path: "/products",
    newTab: false,
  },

  {
    id: 3,
    title: t("packages"),
    path: "/packages",
    newTab: false,
  },

  {
    id: 4,
    title: t("services"),
    path: "/services",
    newTab: false,
  },

  {
    id: 5,
    title: t("B2B"),
    path: "/b2b",
    newTab: false,
  },

  {
    id: 6,
    title: t("about"),
    path: "/about",
    newTab: false,
  },
];

export default menuData;
