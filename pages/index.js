import Post from "../components/home/post";

export default function Home() {
  return (
    <>
      <main className=" overflow-auto h-[calc(100vh-105px)]">
        <div className="flex flex-column p-3">
          <Post
            title="集合小問題"
            content="集合 大致可分為兩類 第一類集合A 就是包含自身的集合 第二類集合B 就是不包含自身的集合 這兩個AB集合把集合分成了兩類 那AB集合要怎麼分類 如果B集合屬於自己 那就代表B集合包含B集合 挖靠那B集合不就屬於A集合 且 屬於A集合的都包含自己但B集合不包含自己所以應該被歸在B集合 但B集合不屬於自己 ...... (無限循環"
            solved={false}
          />
        </div>
        <div className="flex flex-column p-3">
          <Post
            title="集合小問題"
            content="集合 大致可分為兩類 第一類集合A 就是包含自身的集合 第二類集合B 就是不包含自身的集合 這兩個AB集合把集合分成了兩類 那AB集合要怎麼分類 如果B集合屬於自己 那就代表B集合包含B集合 挖靠那B集合不就屬於A集合 且 屬於A集合的都包含自己但B集合不包含自己所以應該被歸在B集合 但B集合不屬於自己 ...... (無限循環"
            solved={true}
          />
        </div>
        <div className="flex flex-column p-3">
          <Post
            title="集合小問題"
            content="集合 大致可分為兩類 第一類集合A 就是包含自身的集合 第二類集合B 就是不包含自身的集合 這兩個AB集合把集合分成了兩類 那AB集合要怎麼分類 如果B集合屬於自己 那就代表B集合包含B集合 挖靠那B集合不就屬於A集合 且 屬於A集合的都包含自己但B集合不包含自己所以應該被歸在B集合 但B集合不屬於自己 ...... (無限循環"
            solved={false}
          />
        </div>
        <div className="flex flex-column p-3">
          <Post
            title="集合小問題"
            content="集合 大致可分為兩類 第一類集合A 就是包含自身的集合 第二類集合B 就是不包含自身的集合 這兩個AB集合把集合分成了兩類 那AB集合要怎麼分類 如果B集合屬於自己 那就代表B集合包含B集合 挖靠那B集合不就屬於A集合 且 屬於A集合的都包含自己但B集合不包含自己所以應該被歸在B集合 但B集合不屬於自己 ...... (無限循環"
            solved={true}
          />
        </div>
        <br />
      </main>
    </>
  );
}
