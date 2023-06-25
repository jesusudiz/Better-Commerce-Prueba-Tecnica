// import {useSelector,useDispatch} from "react-redux";
// import {} from "@redux/charactersSlice"

const fetchData=async()=> {
fetch("https://rickandmortyapi.com/api/character?page=1")
.then(response=>response.json())
.then(data=>data)
}


export default async function Home() {
  const data = await fetchData();
  return (
    <main className="flex ">
      {data.results.map(item=>(<p>{item.name}</p>))}
    </main>
  )
}
