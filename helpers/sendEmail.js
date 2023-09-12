const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  return new Promise(function (resolve, reject) {
    const email = { ...data, from: "vale.forstudy@gmail.com" };

    sgMail
      .send(email)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

module.exports = sendEmail;
