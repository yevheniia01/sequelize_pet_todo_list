// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
module.exports = function(sequelize, DataTypes){
  var PetTodo = sequelize.define("PetTodo", {
      todo: DataTypes.STRING
  })
  return PetTodo
  }
  
  // This creates our model from the above schema, using mongoose's model method
  