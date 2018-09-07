const hasha = require('hasha');

exports.handler = async (event, context) => {
  const { CLOUDINARY_USERNAME: username, CLOUDINARY_API_SECRET: secret } = process.env
  const timestamp = Date.now()
  const str = `cloud_name=erquhart&timestamp=${timestamp}&username=${username}${secret}`
  const hash = hasha(str, { algorithm: 'sha256' });
  return {
    statusCode: 200,
    body: hash,
  }
}