import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "850px", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{ width: "170px", height: "160px", borderRadius: "80px" }}
              src={"https://picsum.photos/id/0/367/267"}
            />
          </div>
          <div>
            <h4>{"Name"}</h4>
            <h5>{"Email"}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>{2} posts</h6>
              <h6>{10} followers</h6>
              <h6>{20} following</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img className="item" src={"https://picsum.photos/id/0/367/267"} />
        <img className="item" src={"https://picsum.photos/id/0/367/267"} />
        <img className="item" src={"https://picsum.photos/id/100/367/267"} />
        <img className="item" src={"https://picsum.photos/id/100/367/267"} />
        <img className="item" src={"https://picsum.photos/id/100/367/267"} />
        <img className="item" src={"https://picsum.photos/id/100/367/267"} />
      </div>
    </div>
  );
};

export default Profile;
