import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Name</h5>
        <div className="card-image">
          <img src={"https://picsum.photos/id/1006/367/267"} />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>4 likes</h6>
          <h6>{"title"}</h6>
          <p>{"body"}</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Name</h5>
        <div className="card-image">
          <img src={"https://picsum.photos/id/1006/367/267"} />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>4 likes</h6>
          <h6>{"title"}</h6>
          <p>{"body"}</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
