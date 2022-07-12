import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id, ...others } = useParams();

  const hero = useMemo(()=>getHeroById(id), [id]) ;

  if (hero === undefined) {
    return <Navigate to="marvel" />;
  }

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  }

  return (
      <div className="img-info-card">
        <div className="animate__animated animate__fadeInLeft">
          <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
        </div>

        <div>
          <h1>{hero.superhero}</h1>
          <h4>{hero.publisher}</h4>
          <hr />
          <h4><b>Alter ego: </b> {hero.alter_ego}</h4>
          <h4><b>Characters: </b>{hero.characters}</h4>
          <h4><b>First appearance: </b>{hero.first_appearance}</h4>
          <br/>
          <button onClick={onBack} className="btn btn-outline-primary">
            Back
          </button>
        </div>
      </div>
  );
};
