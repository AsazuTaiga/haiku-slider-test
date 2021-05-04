import { NextPage } from "next";
import CenteringLayout from "../components/layout/CenteringLayout";
import "modern-css-reset";
import HaikuSwiper from "../components/haiku/HaikuSwiper";
import Title from "../components/title/Title";

const IndexPage: NextPage = () => (
  <>
    <Title />
    <CenteringLayout>
      <HaikuSwiper
        haiku={`「文字に靠れる」
# 渇き
自己遺骨拾ひ講座を聞いてゐる
夏浅し浄財なんどあるものか
神の手を待つ五月雨を飢ゑてゐる
# 平日
ひらおよぎ手のひら足のうらみせて
ショッピングカートキャベツの匂いして
ソーダ水はじけつゞけて息をとめて
# いっそ、いっそね、
蛸かんで赤い味する花疲
春夕焼死出の旅には長すぎる
白いケーキを腑分けして純粋とは
【終】
っていう句集みたいなのを作れるサービス
あったら使いますか？`}
      />
    </CenteringLayout>
  </>
);

export default IndexPage;
