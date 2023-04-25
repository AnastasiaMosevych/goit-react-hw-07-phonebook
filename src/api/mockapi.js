import axios from "axios";

axios.defaults.baseURL = 'https://643ecf176c30feced833e3eb.mockapi.io';

export const fetchContactsApi = async () => {
  try {
    const result = await axios.get('/contacts')
    return result
  } catch (e) {
    return Promise.reject(e.message)
  }
}  

export const addContactApi = async (newData) => {
  try {
    const result = await axios.post('/contacts', newData)
    return result.data;
  } catch (e) {
    return Promise.reject(e.message)
  }
  
}

export const deleteContactApi = async (contactId) => {
  try {
    const result = await axios.delete(`/contacts/${contactId}`)
    return result.data
  } catch (e) {
    return Promise.reject(e.message)
  }
}
