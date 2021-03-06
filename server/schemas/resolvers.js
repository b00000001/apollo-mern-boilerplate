const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, SocialUser } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    socialUser: async (_, args) => {
      return SocialUser.findOne({ email: args.email });
    },
    socialUsers: async () => {
    return SocialUser.find();
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addSocialUser: async (_, { username, email }) => {
      const socialUser = await SocialUser.create({ username, email });
      const token = signToken(socialUser);
      console.log("user created");
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
