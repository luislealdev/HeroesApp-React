import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {id, ...others} = useParams();
  const hero = getHeroById(id);

  if (hero === undefined) {
    return <Navigate to="marvel"/>
  };

  return (
    <>
        <h1>{hero.superhero}</h1>
    </>
  )
}
