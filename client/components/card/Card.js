import Link from "next/link";

export function Card({ character }) {
    return (
        <Link href={`/${character.id}`}>
       
            <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110w-50 rounded-md">
                <figure className="w-full">
                    <img className=" object-contain rounded-md" src={character.image} alt={character.name} />
                    <figcaption className="text-white overflow-hidden">{character.name}</figcaption>
                </figure>
            </div>
            </Link>
    
    )
}