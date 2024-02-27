export interface MovieDetail {
    id: string
    title: string
    maturity: number
    description: string
    backdrop_path: string
    poster_path: string
    genres: string[]
}

export interface MovieSection {
    title: string
    data: MovieDetail[]
}

export interface MovieSections {
    [name: string]: MovieSection[]
}
