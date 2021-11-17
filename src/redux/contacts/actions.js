import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction("contact/add");
export const deleteContact = createAction("contact/delete");
export const filterContact = createAction("contactList/filter");


// export const addContact = (contact) => {
//     return {
//         type: "contact/add",
//         payload: contact,
//     }
// };
// export const deleteContact = (id) => {
//     return {
//         type: "contact/delete",
//         payload: { id },
//     }
// };

// export const filterContact = (value) => {
//     return {
//         type: "contactList/filter",
//         payload: value,
//     }
// };

