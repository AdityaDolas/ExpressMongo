import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controller/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`R equest type: ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactID")
    // get a specific contact
    .get(getContactWithID)

    // updating a specific contact
    .put(updateContact)

    // deleting a specific contact
    .delete(deleteContact);
}

export default routes;
