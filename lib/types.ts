export interface Result { value: string; label: string }

export interface Project {
  key: string
  title: string
  category: string
  client: string
  year: string
  role: string
  accent: string
  tagline: string
  overview: string
  challenge: string
  services: string[]
  results: Result[]
  image: string
}
