module.exports = function (error, status) {
  if (status == null) status = 1
  if (error) console.error(error)
  process.exit(status)
}

