import sandwichesMenu from "@assets/images/sandwiches";
import { useMemo } from "react";

export interface Page {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export const sandwichPage: Page[] = [
  {
    id: 1,
    title: "메뉴",
    description: "메뉴를 선택하세요.",
    images: sandwichesMenu,
  },
  {
    id: 2,
    title: "빵",
    description: "빵을 선택하세요.",
    images: [],
  },
  {
    id: 3,
    title: "치즈",
    description: "치즈를 선택하세요.",
    images: [],
  },
  {
    id: 4,
    title: "야채",
    description: "야채를 선택하세요.",
    images: [],
  },
  {
    id: 5,
    title: "소스",
    description: "소스를 선택하세요.",
    images: [],
  },
  {
    id: 6,
    title: "쿠키",
    description: "쿠키를 선택하세요.",
    images: [],
  },
  {
    id: 7,
    title: "음료",
    description: "음료를 선택하세요.",
    images: [],
  },
];
