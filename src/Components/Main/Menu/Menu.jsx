import React from "react";
import pictMessage from "./img/message.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_profile">
        {/* 1 */}
        <div className="menu_profile_header">
          <div className="profile_header_nick">
            <h3>cheg.andrey</h3>
            <div>down</div>
          </div>
          <div className="profile_header_option">
            <span>change</span>
          </div>
        </div>
        {/*  2 */}
        <div className="menu_section">
          <div className="menu_card">
            <div>
              <img></img>
            </div>
            <div className="menu_card_name">
              <div>Nick Name</div>
              <div>data time</div>
            </div>
          </div>
          <div className="menu_card">
            <div>
              <img></img>
            </div>
            <div className="menu_card_name">
              <div>Nick Name</div>
              <div>data time</div>
            </div>
          </div>
          <div className="menu_card">
            <div>
              <img></img>
            </div>
            <div className="menu_card_name">
              <div>Nick Name</div>
              <div>data time</div>
            </div>
          </div>
          <div className="menu_card">
            <div>
              <img></img>
            </div>
            <div className="menu_card_name">
              <div>Nick Name</div>
              <div>data time</div>
            </div>
          </div>
          <div className="menu_card">
            <div>
              <img></img>
            </div>
            <div className="menu_card_name">
              <div>Nick Name</div>
              <div>data time</div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="menu_message">
        <div className="menu_message_card">
          <img src={pictMessage} />
          <div>
            <h2>Ваші повідомлення</h2>
            <span>
              Надсилайте особисті фото та повідомлення другу або групі.
            </span>
          </div>
          <button id="sendMesBtn">Надіслати повідомлення</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
