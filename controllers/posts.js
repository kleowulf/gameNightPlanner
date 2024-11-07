const Game = require("../models/Games");

module.exports = {
    getProfile: async (req, res) => {
      try {
        const games = await Game.find({ user: req.user.id });
        res.render("profile.ejs", { games: games, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },

    createPost: async (req, res) => {
        try {
          // Upload image to cloudinary
        //   const result = await cloudinary.uploader.upload(req.file.path);
    
          await Game.create({
            title: req.body.title,
            image: res.secure_url,
            // cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/profile");
        } catch (err) {
          console.log(err);
        }
      },
}