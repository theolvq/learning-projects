require("dotenv").config();
const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);
    console.log(res);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: `${err}` });
  }
};
