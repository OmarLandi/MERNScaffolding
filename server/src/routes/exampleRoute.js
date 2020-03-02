import express from 'express'
import _ from 'underscore'
import Example from '../models/exampleSchema'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Example
 *   description: All about /
 */

/**
 * @swagger
 * /example/:
 *   get:
 *     description: It will return example results
 *     tags: [Example]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Response OK
*/
router.get('/',function(req, res) {
  Example.find(function(err, result) {
    if (err) {
      return res.status(400).send('Not examples found');
    } else {
      return res.json(result);
    }
  });
});

/**
 * @swagger
 * /example/add:
 *   post:
 *     description: It will save example
 *     tags: [Example]
 *     parameters:
 *      - in: header
 *        name: content-type
 *        type: string
 *        default: application/json; charset=utf-8
 *      - in: body
 *        name: body
 *        schema:
 *          type: object
 *          required: ['description', 'responsible', 'priority', 'completed']
 *          properties:
 *            description:
 *              type: string
 *            responsible:
 *              type: string
 *            priority:
 *              type: string
 *            completed:
 *              type: boolean
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Example added successfully
 *       400:
 *         description: Adding new Example failed
 */

router.post('/add',function(req, res) {
  if (_.isEmpty(req.body)) {
    return res.status(401).send('Missing params');
  }

  let example = new Example(req.body);

  let validation = example.serverValidate(req.body)

  if (validation.error) {
    return res.status(400).send(validation.error.details);
  }

  example.save()
    .then(result => {
      return res.status(200).json({'example': 'Example added successfully'});
    })
    .catch(err => {
      return res.status(400).send('New Example failed');
    });
});

export default router
