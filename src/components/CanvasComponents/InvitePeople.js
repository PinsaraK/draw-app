import React, { useState, useRef } from "react";
import Button from "../UIComponents/Button";
import Modal from "../UIComponents/Modal";
import { joinRoom, roomId } from "../Canvas";
import styles from "./InvitePeople.module.css";

const InvitePeople = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [showId, setShowId] = useState(false);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const roomIdRef = useRef();

  const openModalHandler = () => {
    setShowInvite(true);
  };

  const closeModalHandler = () => {
    setShowInvite(false);
    setShowId(false);
  };
  const hostBoardHandler = () => {
    setShowId(true);
    setJoinedRoom(true);
    joinRoom(roomId);
  };

  return (
    <React.Fragment>
      <Button className="eraser" click={openModalHandler}>
        Invite
      </Button>
      {showInvite && (
        <Modal onClose={closeModalHandler}>
          {!joinedRoom ? (
            <div className={styles["host-container"]}>
              Host a board?{" "}
              {!showId && (
                <button
                  className={styles["modal-buttons"]}
                  onClick={hostBoardHandler}
                >
                  Host
                </button>
              )}
            </div>
          ) : (
            <div className={styles["host-container"]}>
              Invite others with the following code: {roomId}
            </div>
          )}
          <div className={styles["join-container"]}>
            or Join a board?
            <input
              className={styles["input-code"]}
              id="room"
              type="text"
              ref={roomIdRef}
              placeholder="Enter your code here"
            ></input>
            <button
              className={styles["modal-buttons"]}
              onClick={() => {
                if (roomIdRef.current.value !== "") {
                  joinRoom(roomIdRef.current.value);
                  setJoinedRoom(true);
                }
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
