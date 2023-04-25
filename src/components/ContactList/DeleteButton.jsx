import { DeleteBtn } from './DeleteButton.styled';
import { deleteContact } from "redux/operations";
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import PropTypes from 'prop-types';

export const DeleteButton = ({ contactId }) => {
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    }

    return <>
        <DeleteBtn onClick={() => handleDeleteContact(contactId)}
            type="button"
            value={contactId}
            disabled={isLoading}>
            Delete
        </DeleteBtn>
    </>
}

DeleteButton.propTypes = {
    contactId: PropTypes.string.isRequired,
}