require("dotenv").config();
const { DELETE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const { deleteLink: deletetedLink } = await sendQuery(DELETE_LINK);
    console.log(deletetedLink);
    return formattedResponse(204, deletetedLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: `${err}` });
  }
};
