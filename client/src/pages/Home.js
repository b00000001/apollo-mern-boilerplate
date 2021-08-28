// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS, QUERY_SOCIAL_USER } from "../utils/queries";
// Components
import UserList from "../components/UserList";

const Home = () => {
  const queryUser = useQuery(QUERY_USERS);
  const users = queryUser.data?.users || [];
  const querySocial = useQuery(QUERY_SOCIAL_USER);
  const socialUsers = querySocial.data?.socialUsers || [];
  if (socialUsers) {
    console.log("SocialUser Data", socialUsers);
  }
  const renderUserList = () => {
    if (queryUser.loading) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <UserList
          users={users}
          socialUsers={socialUsers}
          title="List of Users"
        />
      );
    }
  };

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          {renderUsername()}
        </div>
        <div className="col-12 col-md-8 mb-3">{renderUserList()}</div>
      </div>
    </main>
  );
};

export default Home;
