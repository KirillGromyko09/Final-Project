import React from "react";
import BaseTemplate from "../../templates/BaseTemplate";
import ProfileMenu from "../../components/userProfile/ProfileMenu";

const ProfilePage = () => {
  return (
    <BaseTemplate
      className="profile-page"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <ProfileMenu />
    </BaseTemplate>
  );
};

export default ProfilePage;
