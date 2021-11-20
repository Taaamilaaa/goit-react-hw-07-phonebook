import styles from "./filter.module.css";
import PropTypes from "prop-types";
// import { filterContact } from "redux/contacts/actions";
// import { useState } from "react";
// import {useFetchContactsQuery} from "redux/contacts/contactsSlice"

const Filter = ({onFilterChange}) => {
  const onChange = (e) => {
    onFilterChange(e.currentTarget.value);
 };
  return (
    <>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        onChange={onChange}
      />
    </>
  );
};
Filter.propType = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
