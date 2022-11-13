const stages = require('express').Router()
const db = require('../models')
const { Stage, Event } = db 
const { Op } = require('sequelize')
