var express = require("express");

const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpress = require("@admin-bro/express");
var app = express();
const mongoose = require("mongoose"); //Routes
const connectDB = require("./config/db");
const DemoQuizData = require("./model/DemoQuizData");
app.get("/", function (req, res) {
  res.send("Hello World!");
});
//Database
connectDB();
//Admin Bro
AdminBro.registerAdapter(AdminBroMongoose);

const adminBroOptions = {
  resources: [
    {
      resource: DemoQuizData,
      options: {
        properties: {
          question: { type: "richtext" },
        },
      },
    },
  ],
};

const adminBro = new AdminBro(adminBroOptions);
const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);
app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
