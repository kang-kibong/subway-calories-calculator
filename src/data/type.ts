export interface ICategory {
  id: number
  name: string
  alt: string
  color: string
  image: string
}

export interface IContent {
  id: number
  image: string
  name: string
  alt: string
  calories: number
}

export interface IPage {
  id: number
  title: string
  description: string
  contents: IContent[]
}
