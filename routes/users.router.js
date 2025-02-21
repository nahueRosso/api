const express = require('express');
const UsersService = require('./../services/user.service')
const router = express.Router();

const service = new UsersService;

router.get('/',async  (req, res) => {
  // const { limit, offset } = req.query;
  const users = await service.find();
  res.json(users)
});

router.get('/:idUser', async (req,res)=>{
 const id = req.params.idUser;
 const user = await service.findUser(id);
 res.json(user);
})

module.exports = router;
