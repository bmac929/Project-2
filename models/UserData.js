module.exports = function(sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    Username: DataTypes.STRING(12),
    Score: DataTypes.INTEGER,
    T1store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T2store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T3store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T4store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T5store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T6store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T7store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    T8store: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  return UserData;
};
