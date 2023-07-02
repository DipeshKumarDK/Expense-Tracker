const router = require("express").Router();
const Transaction = require("../models/Transaction");

//REGISTER
router.post("/create", async (req, res) => {
  try {
    const newCom = new Transaction({
      title: req.body.title,
      id: req.body.id,
      amount: req.body.amount,
      type: req.body.type,
      date: req.body.date,
      description: req.body.description,
    });

    const com = newCom.save();
    res.status(200).json(com);
  } catch (err) {
    res.status(500).json("error");
  }
});

router.get("/all/:id", async (req, res) => {
  try {
    const com = await Transaction.find({id: req.params.id });
    res.status(200).json(com);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:type/:id", async (req, res) => {
  try {
    const com = await Transaction.find({id: req.params.id , type: req.params.type});
    res.status(200).json(com);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const offer = await Transaction.findByIdAndDelete(req.params._id);
    res.status(200).json("Deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
