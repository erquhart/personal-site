exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: `
      ${JSON.stringify(event, null, 2)}
      ${JSON.stringify(context, null, 2)}
    `,
  }
}