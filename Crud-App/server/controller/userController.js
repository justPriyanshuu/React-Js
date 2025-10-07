import User from '../model/userModel.js';

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'User already Exists!' });
    }
    const savedData = await newUser.save();
  } catch (error) {
    res.status(500).json({ errormessage: error.message });
  }
};
