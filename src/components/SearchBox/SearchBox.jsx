import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { getFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={filter}
      onChange={handleChange}
      style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
    />
  );
};

export default SearchBox;
