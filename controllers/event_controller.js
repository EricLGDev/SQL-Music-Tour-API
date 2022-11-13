// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event, MeetGreet, SetTime, Stage, Band } = db
const { Op } = require('sequelize')

// FIND ALL EVENTS