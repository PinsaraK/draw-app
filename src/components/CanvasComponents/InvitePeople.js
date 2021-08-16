import React, { useState, useRef } from "react";
import Button from "../UIComponents/Button";
import Modal from "../UIComponents/Modal";
import { joinRoom, roomId } from "../Canvas";

const InvitePeople = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [showId, setShowId] = useState(false);
  const roomIdRef = useRef();

  const openModalHandler = () => {
    setShowInvite(true);
  };

  const closeModalHandler = () => {
    setShowInvite(false);
  };
  const hostBoardHandler = () => {
    setShowId(true);
    joinRoom(roomId);
  };

  return (
    <React.Fragment>
      <Button className="eraser" click={openModalHandler}>
        Invite
      </Button>
      {showInvite && (
        <Modal onClose={closeModalHandler}>
          <div>
            Host a board?{" "}
            {!showId && <button onClick={hostBoardHandler}>Host</button>}
            {showId && <p>Send your friends the following code: {roomId}</p>}
          </div>
          <div>
            or Join a board?
            <input id="room" type="text" ref={roomIdRef}></input>
            <button
              onClick={() => {
                joinRoom(roomIdRef.current.value);
                closeModalHandler();
              }}
            >
              Join Room
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default InvitePeople;
