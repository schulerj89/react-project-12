const {log, http} = require('./index');
const port = process.env.PORT || 5000;

http.listen(port, () => {
  log.info(`running on ${port}`);
});