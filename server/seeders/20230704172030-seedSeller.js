"use strict";

const { hashPass } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = require("../data/seller.json").map((el) => {
      delete el.id;
      el.createdAt = new Date();
      el.updatedAt = new Date();
      el.password = hashPass(el.password);
      return el;
    });
    await queryInterface.bulkInsert("Sellers", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Sellers", null, {});
  },
};
