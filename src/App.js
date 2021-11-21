import s from "./App.module.css";
import ContactsForm from "./component/ContactsForm";
import Filter from "./component/Filter";
import ContactsList from "./component/ContactsList";
import { connect, useSelector } from "react-redux";
import {
  getStatusLoading,
  getContacts,
} from "./redux/contacts/contacts-selectors";
function App() {
  const contacts = useSelector(getContacts);
  const statusLoading = useSelector(getStatusLoading);
  return (
    <div className={s.phonebook}>
      <h1 className={s.pageTitle}>Phonebook</h1>
      <ContactsForm />
      {contacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {statusLoading && <p className={s.loading}>Loading...</p>}
      {contacts.length > 1 && <Filter />}
      <ContactsList />
    </div>
  );
}

export default connect()(App);
