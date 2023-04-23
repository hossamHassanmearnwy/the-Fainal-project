const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { promisify } = require("util");

// create new user (register)
async function createUser(req, res, next) {
  try {
    var newUser = await userModel.create(req.body);
    res.status(200).json(newUser);
    if (newUser.password) {
      var salt = await bcrypt.genSalt(10);
      var hashedPass = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPass;
    }
    // console.log(newUser)
    next();
    console.log(res);
  } catch (err) {
    res.status(422).json(err.message);
  }
}

// update user by id
async function updateUser(req, res, next) {
  try {
    var id = req.params.id;
    const newData = req.body;
    console.log(newData.password);
    if (newData.password) {
      var salt = await bcrypt.genSalt(10);
      var hashedPass = bcrypt.hashSync(newData.password, salt);
      newData.password = hashedPass;
    }
    console.log(id);
    await userModel.findByIdAndUpdate(id, { $set: newData });
    res.status(200).json({ status: "success", newData });

    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//get all users
async function getAllUsers(req, res, next) {
  try {
    const allUsers = await userModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//get by id
async function getUserById(req, res, next) {
  try {
    var id = req.params.id;
    const getUser = await userModel.findById(id);
    console.log(getUser);
    res.status(200).json(getUser);
  } catch (err) {
    res.status(422).json({ status: "failed", message: `${err.message}` });
  }
}

//delete by id
async function deleteUser(req, res) {
  try {
    var id = req.params.id;
    var deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser.isAdmin === true) {
      res.status(204).json("you can't delete admin user");
    } else {
      res.status(200).json(" email deleted successfully");
    }
  } catch (err) {
    res.status(422).json({ status: "failed", message: `${err.message}` });
  }
}

// Login

async function login(req, res) {
  var { email, password } = req.body;
  var user = await userModel.findOne({ email }); // {email:email}
  if (user) {
    var valid = bcrypt.compareSync(password, user.password);
    if (valid) {
      // generate Token
      var token = jwt.sign(
        {
          userId: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json(token);
      console.log(token);
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } else {
    res.status(401).end();
  }
}

//ADMIN LOGIN
async function adminLogin(req, res, nex) {
  try {
    const { email, password } = req.body;
    var admin = await userModel.findOne({ email }); //{ email: email }
    if (admin) {
      var valid = bcrypt.compareSync(password, admin.password);
      if (valid) {
        var token = jwt.sign(
          {
            isAdmin: admin.isAdmin == true,
            adminId: admin.id,
          },
          process.env.SECRET,
          {
            expiresIn: "24h",
          }
        );
        // res.json({ ...admin._doc, accessToken: token });
        res.json({ accessToken: token });
      } else {
        res.status(401).json("please insert correct pass");
      }
    } else {
      res.status(401).json("please insert correct email");
    }
  } catch (err) {
    res.status(422).json(err.message);
  }
}

//LOGOUT
async function Logout(req, res, next) {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, {
      $set: { isActive: false },
    });
    res.status(200).json("successfully logout");
  } catch (err) {
    res.status(422).json(err.message);
  }
}

// const protect = async () => {
//   try {
//     let token;
//     let reqHeaders = req.headers.authorization;
//     let bearerheders = req.headers.authorization.startswith("Bearer");
//     //token exist
//     if (reqHeaders && bearerheders) {
//       token = reqHeaders.split(" ")[1];
//     }
//     if (!token) {
//       return res.status(422).json(err.message);
//     }
//     //verifcation token
//     let decoded;
//     try {
//       decoded = await promisify(jwt.verify)(token, process.env.SECRET);
//     } catch (error) {
//       if (error.name === "JsonWebTokenError") {
//         return res.status(401).json("invalid token");
//       } else if (error.name === "TokenExpiredError") {
//         return res.status(401).json("your session has expired !! Login again");
//       }
//     }
//     //check if user still exists
//     const curruntUser=await userModel.findById
//   } catch (err) {}
// };

module.exports = {
  createUser,
  login,
  deleteUser,
  adminLogin,
  getUserById,
  Logout,
  getAllUsers,
  updateUser,
  //   protect,
};
