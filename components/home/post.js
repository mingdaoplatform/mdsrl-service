import { BsChatLeft } from "react-icons/bs";

export default function Post() {
  return (
    <div className="p-5 shadow-lg rounded-lg w-full">
      <h1 className="text-dark-purple text-2xl font-bold">集合小問題</h1>
      <p className="mt-3">
        集合 大致可分為兩類 第一類集合A 就是包含自身的集合 第二類集合B
        就是不包含自身的集合 這兩個AB集合把集合分成了兩類 那AB集合要怎麼分類
        如果B集合屬於自己 那就代表B集合包含B集合 挖靠那B集合不就屬於A集合 且
        屬於A集合的都包含自己但B集合不包含自己所以應該被歸在B集合
        但B集合不屬於自己 ...... (無限循環
      </p>
      <div className="flex items-center justify-between">
        <BsChatLeft></BsChatLeft>
      </div>
    </div>
  );
}