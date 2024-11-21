import React from "react";
import "./Header.css";

import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <Typography
        variant="h2"  // テキストのスタイル
        sx = {{
            // フォントの指定(今回はドットフォント)
            fontFamily: 'DotGothic16',  // フォントの種類
            fontWeight: 'regular',  // フォントの太さ
            letterSpacing: 1,  // 文字間
            color: 'white',  // 文字色
            padding: '1.5em',  // パディング
            textAlign: 'center',  // 文字の位置
            fontSize: '8vw',  // フォントサイズ
        }}  // スタイルの指定
      >
        iiTAiの秘密基地
      </Typography>
    </div>
  );
};

export default Header;