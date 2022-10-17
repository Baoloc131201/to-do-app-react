import React from "react";
import BaoLoc from "../img/149264761_1873162592839223_5188686004286087758_n.jpg";
function AboutMe() {
  return (
    <div>
      <div className="container-about">
        <div>
          <div className="title-heading">Sinh Viên Thực Hiện</div>
          <img
            className="image-about"
            src={BaoLoc}
            alt="Huỳnh Bảo Lộc avatar"
          />
        </div>

        <div className="container-desc__wrapper">
          <div className="container-desc">
            <p className="context">Họ và tên: Huỳnh Bảo Lộc</p>
            <p className="context">MSSV: 45.01.104.134</p>
            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
            <p className="context">Lớp Học phần: 2211COMP1031-Công nghệ Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
