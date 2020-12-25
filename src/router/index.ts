module.exports = (app: any) => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });

  const nameDisposeMiddleWare = require("../middleware/nameDispose");

  router
    .get("/", async (req: any, res: any) => {
      const queryOptions: object = {};
      const items = await req.Model.find().setOptions(queryOptions).limit(10);
      res.send(items);
    })
    .get("/:id", async (req: any, res: any) => {
      const model = await req.Model.findById(req.params.id);
      res.send(model);
    })

    .post("/", async (req: any, res: any) => {
      const model = await req.Model.create(req.body);
      res.send(model);
    })
    .put("/:id", async (req: any, res: any) => {
      const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
      res.send(model);
    })
    .delete("/:id", async (req: any, res: any) => {
      const model = await req.Model.findByIdAndDelete(req.params.id, req.body);
      res.send(model);
    });

  app.use("/admin/api/rest/:resource", nameDisposeMiddleWare(), router);
};
