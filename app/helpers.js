
const getErrorMessage = ({ errors }) =>
  errors
    ? errors.find(x => x.message)
    : 'Unknown server error, pal'

const handleError = (res, err) => {
  res.status(400).send({ message: getErrorMessage(err) })
}

const genericResponse = res => (err, elem) =>
  err
    ? handleError(res, err)
    : res.json(elem)

const responser = res => (err, elem) => {
  if (err) return handleError(res, err)
  else res.json(elem)
}

const passer = (req, collection, next) => (err, elem) => {
  if (err) return handleError(res, err)
  else {
    req[collection] = elem
    next
  }
}

exports.getErrorMessage = getErrorMessage
exports.handleError = handleError
exports.genericResponse = genericResponse
exports.responser = responser
exports.passer = passer
exports.parseDNI = x => parseInt(x.toString().replace(/[,.\s]+/g, "").trim())
