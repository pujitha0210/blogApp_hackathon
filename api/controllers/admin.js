import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const q = "SELECT * FROM admin WHERE name = ?";
  
    db.query(q, [req.body.name], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("You are not admin");
  
      //Check password

      if(req.body.password != data[0].password){
        return res.status(400).json("Wrong username or password!");
      }

      const token = jwt.sign({ id: data[0].id }, "jwtkeyy");
      const { password, ...other } = data[0];
  
      res
        .cookie("admin_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };