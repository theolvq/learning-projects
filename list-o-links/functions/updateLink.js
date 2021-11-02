require("dotenv").config();
const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description, archived, _id: id } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id };

  try {
    const { updateLink: upadtedLink } = await sendQuery(UPDATE_LINK, variables);
    console.log(upadtedLink);
    return formattedResponse(200, upadtedLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: `${err}` });
  }
};
