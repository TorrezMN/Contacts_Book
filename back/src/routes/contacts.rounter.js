const express = require("express");
const contactRouter = express.Router();
const Contact = require("../models/contact.model.js");

// Import CRUD helpres.

contactRouter.get("/", (req, res) => {
  Contact.find({}, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});

contactRouter.post("/", async (req, res) => {
  let newContact = {
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    role: req.body.role,
  };
  const contact_to_create = new Contact(newContact);
  try {
    const NEWCONTACT = await contact_to_create.save();
    res.status(201).json(NEWCONTACT);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* Delete Single Post */
contactRouter.delete("/:contact_id", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const contactId = req.params.contact_id;

  // Find the contact by ID
  const contact = await Contact.findById(contactId);

  // If the contact does not exist, return a 404 error
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  // Delete the contact
  await contact.delete();
  // Return a success response
  res.status(200).json({ message: "Contact deleted successfully" });
});

contactRouter.post("/filter_by_name/:name", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const contact_name = req.params.name;
  Contact.find({ name: { $regex: contact_name } }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});

contactRouter.post("/filter_by_last_name/:name", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const contact_name = req.params.name;
  Contact.find({ lastName: { $regex: contact_name } }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});

contactRouter.post("/filter_by_address/:l_address", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const location_address = req.params.l_address;
  Contact.find({ address: { $regex: location_address } }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});


contactRouter.post("/filter_by_role/:contact_role", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const c_role = req.params.contact_role;
  Contact.find({ role: { $regex: c_role } }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});


contactRouter.post("/filter_by_dob/:dob1/:dob2", async (req, res, next) => {
  // Get the contact ID from the request parameters
  const startDate = req.params.dob1;
  const endDate = req.params.dob2;

  Contact.find({ dateOfBirth: { $gte: startDate, $lt: endDate } }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});



module.exports = contactRouter;
