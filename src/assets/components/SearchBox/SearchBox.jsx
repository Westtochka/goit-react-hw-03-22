import s from "./SearchBox.module.css";
const SearchBox = ({ search, setSearch }) => {
  return (
    <div className={s.searchbox}>
      <label>
        <span>Find contacts by name</span>
        <input
          value={search}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
