import styles from "./filter.module.css";
import PropTypes from "prop-types";
import { filterContact } from "../../redux/contacts/actions";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        onChange={(e) => dispatch(filterContact(e.currentTarget.value))}
      />
    </>
  );
};
Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
