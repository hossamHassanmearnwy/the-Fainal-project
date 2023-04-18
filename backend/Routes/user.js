const express = require('express')
// const router = require("express").Router();
var router = express.Router();
const userController = require("../Controllers/userControl")
const { isAdmin,isUser,auth} = require("../Middleware/auth");


//create new user (register)
router.post("/register", userController.createUser);

//put
router.patch("/update/:id", userController.updateUser);

//login
router.post("/login", userController.login);

//get all users
router.get("/",isAdmin, userController.getAllUsers);

//get user by id
router.get("/:id",auth, userController.getUserById);

//delete by id
router.delete("/:id", isAdmin, userController.deleteUser);

//Admin Login
router.post("/admin/login", userController.adminLogin);
//Admin logout
router.get("/logout/:id", userController.Logout);



module.exports=router