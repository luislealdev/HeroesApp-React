export const Search = () => {
  return (
    <div className="row mt-4">
        <div className="col-5">
          <h1>Search</h1>
          <hr/>
          <form>
            <input type="text" className="form-control" placeholder="Search a hero" name="search" autocomplete="off"/>
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <div className="alert alert-primary">Search a hero first</div>
          <div className="alert alert-danger"> <b>{'bla'}</b> not found</div>
        </div>
    </div>
  )
}
