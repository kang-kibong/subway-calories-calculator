import {
  double_chocolate_chip,
  chocolate_chip,
  oatmeal_raisin,
  raspberry_cheese_cake,
  white_choco_macadamia,
} from '@assets/images/sandwiches/cookies'
import { IContent } from '../type'

const cookies: IContent[] = [
  {
    id: 1,
    name: '더블 초코칩',
    image: double_chocolate_chip,
    alt: 'double chocolate chip',
    calories: 212,
  },
  {
    id: 2,
    name: '초코칩',
    image: chocolate_chip,
    alt: 'chocolate chip',
    calories: 228,
  },
  {
    id: 3,
    name: '오트밀 레이즌',
    image: oatmeal_raisin,
    alt: 'oatmeal raisin',
    calories: 200,
  },
  {
    id: 4,
    name: '라즈베리 치즈케익',
    image: raspberry_cheese_cake,
    alt: 'raspberry cheese cake',
    calories: 204,
  },
  {
    id: 5,
    name: '화이트 초코 마카다미아',
    image: white_choco_macadamia,
    alt: 'white choco macadamia',
    calories: 245,
  },
]

export default cookies
