import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import querystring from 'query-string'
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q=''} = querystring.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="row mt-4">
      <div className="col-5">
        <h1>Search</h1>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search a hero"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button
            className="btn btn-outline-primary mt-1"
          >
            Search
          </button>
        </form>
      </div>
      <div className="col-7">
        <div className="alert alert-primary">Search a hero first</div>
        <div className="alert alert-danger">
          {" "}
          <b>{q}</b> not found
        </div>
        {heroes.map(hero => <HeroCard key={hero.id} {...hero}/>)}
      </div>
    </div>
  );
};
