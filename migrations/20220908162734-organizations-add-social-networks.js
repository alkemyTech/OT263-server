"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    "Organizations",
                    "facebook",
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    "Organizations",
                    "linkedin",
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    "Organizations",
                    "instagram",
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
            ]);
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("Organizations", "facebook", { transaction: t }),
                queryInterface.removeColumn("Organizations", "linkedin", { transaction: t }),
                queryInterface.removeColumn("Organizations", "instagram", { transaction: t }),
            ]);
        });
    },
};
