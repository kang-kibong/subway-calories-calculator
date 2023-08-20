import {
  flat_bread,
  hearty_italian,
  honey_oat,
  parmesan_oregano,
  wheat,
  white,
} from '@assets/images/sandwiches/bread'
import { IContent } from '../type'

export const bread: IContent[] = [
  {
    id: 1,
    name: '허니 오트',
    image: honey_oat,
    alt: 'honey oat',
    calories: 235,
  },
  {
    id: 2,
    name: '하티',
    image: hearty_italian,
    alt: 'hearty italian',
    calories: 210,
  },
  {
    id: 3,
    name: '위트',
    image: wheat,
    alt: 'wheat',
    calories: 192,
  },
  {
    id: 4,
    name: '파마산 오레가노',
    image: parmesan_oregano,
    alt: 'parmesan oregano',
    calories: 213,
  },
  {
    id: 5,
    name: '화이트',
    image: white,
    alt: 'white',
    calories: 202,
  },
  {
    id: 6,
    name: '플랫브레드',
    image: flat_bread,
    alt: 'flat bread',
    calories: 467,
  },
]
