import { Mail } from '../App'
import DATA from '../data.json'

interface RawData {
  subject: string
  body: string
  from: { name: string; email: string }
}

function transformData(data: RawData[]): Mail[] {
  return data.map(data => ({ ...data, checked: false }))
}

export const initialState = transformData(DATA)