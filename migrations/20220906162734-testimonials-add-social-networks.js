"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    "Testimonials",
                    "facebook",
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    "Testimonials",
                    "linkedin",
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    "Testimonials",
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
                queryInterface.removeColumn("Testimonials", "Facebook", { transaction: t }),
                queryInterface.removeColumn("Testimonials", "Linkedin", { transaction: t }),
                queryInterface.removeColumn("Testimonials", "Instagram", { transaction: t }),
            ]);
        });
    },
};
