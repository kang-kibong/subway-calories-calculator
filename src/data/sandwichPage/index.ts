import { Menu, Bread, Cookies, Sauce, Cheese } from '../sandwich'
import { IPage } from '../type'

export const sandwichPage: IPage[] = [
  {
    id: 1,
    title: '메뉴',
    description: '메뉴를 선택하세요.',
    contents: Menu,
  },
  {
    id: 2,
    title: '빵',
    description: '빵을 선택하세요.',
    contents: Bread,
  },
  {
    id: 3,
    title: '치즈',
    description: '치즈를 선택하세요.',
    contents: Cheese,
  },
  {
    id: 4,
    title: '야채',
    description: '야채를 선택하세요.',
    contents: [],
  },
  {
    id: 5,
    title: '소스',
    description: '소스를 선택하세요.',
    contents: Sauce,
  },
  {
    id: 6,
    title: '쿠키',
    description: '쿠키를 선택하세요.',
    contents: Cookies,
  },
  {
    id: 7,
    title: '음료',
    description: '음료를 선택하세요.',
    contents: [],
  },
]
