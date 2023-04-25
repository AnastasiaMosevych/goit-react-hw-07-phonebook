import { Container, ContactsList } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import ContactListItem from "./ListItem";

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);
    return (contacts.length !== 0 && (
        <Container>
            <ContactsList>
                {contacts.map((contact => (
                   <ContactListItem key={ contact.id } contact={contact} />
                )))}
            </ContactsList>
        </Container>))
}

export default ContactList;
