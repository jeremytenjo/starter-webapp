import * as functions from 'firebase-functions'

import appConfig from '../../app.config'

import _helloWorld from './helloWorld/helloWorld'

// https://firebase.google.com/docs/functions/get-started

export const helloWorld = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', appConfig.domain.main)

  try {
    const payload = JSON.parse(req.body)
    const result = await _helloWorld({ payload })

    res.status(200).json(result)
  } catch (error) {
    console.error(new Error(error))
    res.status(500).json({
      error: error.toString(),
    })
  }
})
