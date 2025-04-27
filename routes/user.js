
// const express = require('express');
// const createUser = require('../controllers/userDataController.js');

import express from "express";
import createUser from '../controllers/userDataController.js'


export const router = express.Router();



router.post('/',createUser)


// export {router}