import { layout, text } from "../../styles/classNames";

const priceData = [
  {
    title: "ショート",
    price: "¥1500〜",
    delivery: "数日〜1週間",
  },
  {
    title: "ワンコーラス",
    price: "¥3000〜",
    delivery: "約2週間",
  },
  {
    title: "フルコーラス",
    price: "¥5000〜",
    delivery: "約2週間",
  },
  {
    title: "コラボ",
    price: "基本料金＋1人追加ごとに\n基本料金の半額",
    delivery: "内容により変動",
  },
];

const Price = () => {
  return (
    <div className={`${layout.section} flex items-center`}>
      <div className={layout.container}>
        <h2 className={`${text.title} text-center mb-10`}>
          Price
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {priceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </p>

              <div className="w-full px-4 mb-3">
                <div className="h-[2px] bg-gray-200 w-full"></div>
              </div>

              <p className="whitespace-pre-line text-xl font-bold text-gray-900 mb-2">
                {item.price}
              </p>

              <p className="text-sm text-gray-500">
                納期：{item.delivery}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          ※内容により料金・納期は変動します。お気軽にご相談ください。
        </p>
      </div>
    </div>
  );
};
 
export default Price;