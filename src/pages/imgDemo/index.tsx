import React from "react";

import style from "./index.less";
// 这里的 @ 是因为在webpack中设置了路径别名
import flower from "@/assets/flower.jpeg";

const Index: React.FC = () => {
  return (
    <div className={style.container}>
      <img src={flower} alt="flower.jpeg无法显示" />

      <div className={style.bgStyle}>
        <h1>科技感</h1>
      </div>
    </div>
  );
};

export default Index;
