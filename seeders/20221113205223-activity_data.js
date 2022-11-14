'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      band_id: 1,
      name: 'rolling moss',
      genre: 'rock',
      available_start_time: '2021-08-12T21:43:25.554Z',
      end_time: '2021-08-12T21:43:25.554Z',
    }])
    await queryInterface.bulkInsert('events', 
    [
      {
        event_id: 1,
        name: 'tulsa',
        date: '2021-08-17T18:01:20.078Z',
        start_time: '2021-08-17T18:01:20.078Z',
        end_time: '2021-08-17T18:01:20.078Z',
      },
      {
        event_id: 3,
        name: 'los angeles',
        date: '2021-08-25T20:55:31.544Z',
        start_time: '2021-08-25T20:55:31.544Z',
        end_time: '2021-08-25T20:55:31.544Z',
      },
      {
        event_id: 5,
        name: 'new york',
        date: '2021-08-27T18:19:26.092Z',
        start_time: '2021-08-27T18:19:26.092Z',
        end_time: '2021-08-27T18:19:26.092Z',
      },
    ])
    await queryInterface.bulkInsert('stages', [{
      stage_id: 1,
      stage_name: 'rock',
    }])
    await queryInterface.bulkInsert('meet_greets', [{
      meet_greet_id: 1,
      event_id: 1,
      band_id: 1,
      meet_start_time: '2021-08-24T21:28:47.516Z',
      meet_end_time: '2021-08-24T21:28:47.516Z',
    }])
    await queryInterface.bulkInsert('set_times', [{
      set_time_id: 1,
      event_id: 1,
      stage_id: 1,
      band_id: 1,
      start_time: '2021-08-24T21:57:53.747Z',
      end_time: '2021-08-24T21:57:53.747Z',
    }])
    await queryInterface.bulkInsert('stage_events', 
    [
      {
        stage_event_id: 1,
        stage_id: 1,
        event_id: 1
      },
      {
        stage_event_id: 2,
        stage_id: 1,
        event_id: 3
      },
      {
        stage_event_id: 3,
        stage_id: 1,
        event_id: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage_events', null, {})
    await queryInterface.bulkDelete('set_times', null, {})
    await queryInterface.bulkDelete('meet_greet', null, {})
    await queryInterface.bulkDelete('bands', null, {})
    await queryInterface.bulkDelete('events', null, {})
    await queryInterface.bulkDelete('stages', null, {})
  }
};