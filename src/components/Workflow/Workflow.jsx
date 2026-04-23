import { layout, text } from "../../styles/classNames";

const steps = [
  "ご依頼",
  "音源・内容の確認",
  "お見積り",
  "制作",
  "初稿提出",
  "ご確認・修正",
  "納品",
  "入金",
];

const Workflow = () => {
  return (
    <div className={`${layout.section} flex items-center`}>
      <div className={layout.container}>
        
        <h2 className={`${text.title} text-center mb-10`}>
          Workflow
        </h2>

        <div className="max-w-5xl mx-auto">

            <div className="sm:hidden max-w-md mx-auto">
            <div className="grid grid-cols-[1fr_40px_1fr] gap-0.5">

                <Card step="STEP 1" text={steps[0]} />
                <Arrow>→</Arrow>
                <Card step="STEP 2" text={steps[1]} />

                <Empty />
                <Empty />
                <Arrow>↓</Arrow>

                <Card step="STEP 4" text={steps[3]} />
                <Arrow>←</Arrow>
                <Card step="STEP 3" text={steps[2]} />

                <Arrow>↓</Arrow>
                <Empty />
                <Empty />

                <Card step="STEP 5" text={steps[4]} />
                <Arrow>→</Arrow>
                <Card step="STEP 6" text={steps[5]} />

                <Empty />
                <Empty />
                <Arrow>↓</Arrow>

                <Card step="STEP 8" text={steps[7]} />
                <Arrow>←</Arrow>
                <Card step="STEP 7" text={steps[6]} />

            </div>
            </div>

          <div className="hidden sm:flex flex-wrap justify-center items-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md text-center min-w-[140px]">
                  <p className="text-sm text-gray-400 mb-2">
                    STEP {index + 1}
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    {step}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <span className="text-gray-400 text-xl">→</span>
                )}
              </div>
            ))}
          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          🌸初めての方でも丁寧にサポートいたします🌸
        </p>

      </div>
    </div>
  );
};

const Card = ({ step, text }) => (
  <div className="bg-white p-3 rounded-xl shadow text-center flex flex-col justify-center">
    <p className="text-[10px] text-gray-400">{step}</p>
    <p className="text-xs">{text}</p>
  </div>
);

const Arrow = ({ children }) => (
  <div className="flex items-center justify-center text-gray-400 text-xl">
    {children}
  </div>
);

const Empty = () => <div />;

export default Workflow;