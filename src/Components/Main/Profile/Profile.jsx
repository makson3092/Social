// import React, { Profiler } from "react";
import React from "react";
import prof from "./img/profile.jpg";
import gallery from "./img/gallery.png";
import "./Profile.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="profile_header">
      <div className="profile_img">
        <img src={prof} alt="prof"></img>
      </div>
      <div className="profile_title">
        <div>
          <h2>cheg.andrey</h2>
          <a href="#">Редактувати профіль</a>
          <button id="pict">pict</button>
        </div>

        <div>
          <div>
            0 <span>публікації </span>
          </div>
          <div>
            0 <span>підписників</span>
          </div>
          <div>
            0 <span>підписок</span>
          </div>
        </div>

        <div>
          <h3>Andrey Chegonov</h3>
        </div>
      </div>
    </div>
  );
};

const PublicationItem = () => {
  return (
    <div className="publicationItem">
      <div>
        <nav>
          <NavLink to="/profile">Публікації</NavLink>
          <NavLink to="#">Збереження</NavLink>
          <NavLink to="#">Відмітки</NavLink>
        </nav>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery">
      <Publication />
    </div>
  );
};
const Publication = () => {
  return (
    <div className="gallery">
      <img src={gallery} alt="gallery"></img>
      <div>Поділитись Фото</div>
      <div>Фото, якими ви ділитеся, показуватимуться у вашому профілі.</div>
      <button id="gallery_btn">Поділіться своїм першим фото</button>
    </div>
  );
};

const Profile = () => {
  return (
    <ProfileUser>
      <Header />
      <PublicationItem />
      <Gallery />
    </ProfileUser>
  );
};

const ProfileUser = (props) => {
  return <main className="profile">{props.children}</main>;
};

export default Profile;
