module.exports = function (sequelize, Sequelize) {
	var User = sequelize.define('User', {
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.TEXT
		},
		about: {
			type: Sequelize.TEXT
		},
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		},
		Score: Sequelize.INTEGER,
		T1store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T2store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T3store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T4store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T5store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T6store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T7store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		T8store: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	});

	return User;
};
