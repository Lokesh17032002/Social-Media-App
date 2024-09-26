import User from "../models/user.model.js";
// import Nortification from "../models/nortification.model.js";

export const getUserProfile = async(req, res) => {
    //In Express.js, req.params is an object that contains route parameters from the URL. These parameters are placeholders defined in the route that can be dynamic, like :username, which can change based on the request.
    const {username} = req.parms ;

    try {
        const user = await User.findOne({username}).select("-password") ;
        if(!user){
            return res.status(400).json({message: "User not found"}) ;
        }
        res.status(200).json(user) ;
    } catch (error) {
        console.log("Error in getUserProfile :", error.message) ;
        res.status(500).json({error: error.message}) ;
    }
}

export const followUnfollowUser = async(req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if (id === req.user._id.toString()) {
            return res.status(400).json({ error: "You can't follow or unfollow yourself" });
        }

        if (!userToModify || !currentUser) {
            return res.status(404).json({ error: "User not found!" });
        }

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // Unfollow the user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

            //TODO: return the id of the user as a response
            return res.status(200).json({ message: "User unfollowed successfully" });
        } else {
            // Follow the user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

            // Send notification (placeholder for actual implementation)
            // const newNortification = newNortification({
            //     type: "follow",
            //     from: req.user._id,
            //     to: userToModify._id,
            // })

            // await newNortification.save();

            //TODO: return the id of the user as a response
            return res.status(200).json({ message: "User followed successfully" });
        }

    } catch (error) {
        console.log("Error in followUnfollowUser:", error.message);
        return res.status(500).json({ error: error.message });
    }
};
