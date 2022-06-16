import React from "react";

import RadioInlineInput from "./RadioInlineInput";

const Search = ({search, filter, handlerChangeInput, handlerClickSearch}) => {
    return (
        <>
            <div className="input-group mb-2">
                <input type="text"
                       name="search"
                       className="form-control"
                       placeholder="Type request here..."
                       onChange={handlerChangeInput}
                       value={search} />
                <div className="input-group-append">
                    <button className="btn btn-green"
                            type="button"
                            onClick={handlerClickSearch}>Search</button>
                </div>
            </div>
            <RadioInlineInput handlerChange={handlerChangeInput}
                              id="filterAll"
                              name="filter"
                              label="All"
                              value=""
                              stateValue={filter}/>
            <RadioInlineInput handlerChange={handlerChangeInput}
                              id="filterMovies"
                              name="filter"
                              label="Movies Only"
                              value="movies"
                              stateValue={filter}/>
            <RadioInlineInput handlerChange={handlerChangeInput}
                              id="filterSeries"
                              name="filter"
                              label="Series Only"
                              value="series"
                              stateValue={filter}/>
        </>
    )
}

export default Search