import React from "react";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { contactsSelector } from "../../redux/contacts/";

const Filter = () => {
  const filter = useSelector(contactsSelector.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(actions.changeFilters(e.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
