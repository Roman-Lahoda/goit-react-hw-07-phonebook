import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations } from "../../redux/contacts";
import { contactsSelector } from "../../redux/contacts";

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactsList = () => {
  const filter = useSelector(contactsSelector.getFilter);
  const contacts = useSelector((state) =>
    getFilteredContacts(state.contacts.items, filter)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);

  return (
    <ul className={s.contactList}>
      {contacts.map((item) => {
        return (
          <li key={item.id} className={s.contact}>
            <span>{item.name}:</span>
            <span>{item.number}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() =>
                dispatch(contactsOperations.deleteContact(item.id))
              }
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
