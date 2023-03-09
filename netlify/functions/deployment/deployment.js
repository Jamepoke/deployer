const axios = require('axios')
const { schedule } = require('@netlify/functions')

const handler = async (event, context) => {
  const res = await axios(`https://api.render.com/v1/services/${process.env.RENDER_SERVICE_ID}/deploys`, {
    method: 'post',
    headers: {
      'Accept': ' application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.RENDER_SERVICE_TOKEN
    },
    data: {}
  })
  const src = res.data
  console.log(src);

  return {
    statusCode: 200,
    body: JSON.stringify(src)
  }

}

exports.handler = schedule("@daily", handler)