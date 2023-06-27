"use client"

import { addPersonajes } from "@redux/charactersSlice";
import { getCharacters } from "@request/getDataApi";
import { CharacterList } from "../components/viewcards/CharacterList";


export default async function Home() {
  const Characters = getCharacters;
  const sendAction = addPersonajes;

  return (
    <CharacterList filter={Characters} actions={sendAction} />
  )
}
