import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.send(users);
  }

  async store(req, res) {
    const user = await User.create(req.body);

    return res.send(user);
  }
}

export default new UserController();
