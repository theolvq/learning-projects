module.exports = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify(body),
    "Content-Type": "application/json",
  };
};
