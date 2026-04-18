import { layout, text, card } from "../../styles/classNames";

const plans = [
  {
    title: "Basic",
    price: "¥3,000",
    description: "簡単なMIX",
    features: ["ピッチ補正なし", "簡易マスタリング"],
  },
  {
    title: "Standard",
    price: "¥5,000",
    description: "一般的な歌ってみたMIX",
    features: ["ピッチ補正", "タイミング補正", "マスタリング"],
  },
  {
    title: "Premium",
    price: "¥8,000",
    description: "高品質仕上げ",
    features: ["フル補正", "ハモリ作成", "細かい調整"],
  },
];

const Price = () => {
  return (
    <div id="price" className={layout.section}>
      <div className={layout.container}>
        <h2 className={text.title}>Price</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`${card.base} text-center`}>
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>

              <p className="text-2xl font-bold mb-4">{plan.price}</p>

              <p className="text-gray-600 mb-4">
                {plan.description}
              </p>

              <ul className="text-sm text-gray-700 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>・{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;