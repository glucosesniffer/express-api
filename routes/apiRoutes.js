import express from 'express'
import { queryParamsController } from '../controllers/queryParamsController.js'
import { pathParamsController } from '../controllers/pathParamsController.js'

export const apiRouter = express.Router()

apiRouter.get('/', queryParamsController)

apiRouter.get('/:field/:term', pathParamsController)
