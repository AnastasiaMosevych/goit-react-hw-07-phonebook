import { Title } from "components/Common/Title";
import ContactList from "components/ContactList/ContactList";
import { PhonebookForm } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Container } from "./ContactList/ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError); 
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Container>
        <Title title="Phonebook" />
        <PhonebookForm />
        <Title title="Contacts" />
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error - {error}</p>}
        <ContactList/>
      </Container>
  );
}

export default App
