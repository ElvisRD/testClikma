export interface Pokemons {
    count: number
    next: string
    previous: any
    results: Result[]
}

export interface Result {
    name: string
    url: string
}

export interface Pokemon {
    abilities: any[]
    base_experience: number
    forms: any[]
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: any
    sprites: Sprites
    stats: any[]
    types: Types[]
    weight: number
}

export interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: any
    versions: any
}

export interface Types {
    slot: number
    type: Type
}
  
export interface Type {
    name: string
    color: string
    url: string
}


  