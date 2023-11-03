
const post_model = require('../models/post.model.js');


// Function to find an object by ID
async function post_findById(id) {
  // Validate the ID
  if (!id || typeof id !== 'number') {
    throw new Error('Invalid ID');
  }

  // Find the object by ID
  const object = await post_model.findById(id);

  // Return the object, or null if not found
  return object || null;
}






export default post_findById;

