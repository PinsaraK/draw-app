import React, { useState } from "react";
import Button from "../UIComponents/Button";
import Modal from "../UIComponents/Modal";

const InvitePeople = () => {
  const [showInvite, setShowInvite] = useState(false);

  const openModalHandler = () => {
    setShowInvite(true);
  };

  const closeModalHandler = () => {
    setShowInvite(false);
  };

  return (
    <React.Fragment>
      <Button className="eraser" click={openModalHandler}>
        Invite
      </Button>
      {showInvite && <Modal onClose={closeModalHandler} />}
    </React.Fragment>
  );
};

export default InvitePeople;
