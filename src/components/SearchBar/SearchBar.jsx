import s from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmitLocal = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    onSubmit(searchQuery.toLowerCase());
  };

  return (
    <>
      <header className={s.SearchBar}>
        <form className={s.SearchForm} onSubmit={onSubmitLocal}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </header>
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
