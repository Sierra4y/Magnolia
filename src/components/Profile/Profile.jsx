import { layout, text } from "../../styles/classNames";
import profileImage from "../../assets/magnolia.png";

const profileData = [
  { label: "活動名", value: "マグノリア" },
  { label: "誕生日", value: "10月31日" },
  { label: "イメージカラー", value: "白" },
  { label: "愛用ツール", value: "Studio One / Waves / FabFilter" },
  { label: "好きなもの", value: "作曲 / 写真 / ラーメン / にじさんじ" },
];

const Profile = () => {
  return (
    <div className={`${layout.section} flex items-center`}>
      <div className={layout.container}>
        <h2 className={`${text.title} text-center mb-10`}>
          Profile
        </h2>

        <div className="flex justify-center mb-10">
          <img
            src={profileImage}
            alt="マグノリア"
            className="w-48 md:w-64 rounded-2xl shadow-md object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {profileData.map((item, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl p-6 shadow-md text-center
                ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              `}
            >
              {/* 項目名 */}
              <p className="text-base font-semibold text-gray-700 mb-2">
                {item.label}
              </p>

              {/* 区切り線 */}
              <div className="w-full px-4 mb-3">
                <div className="h-[2px] bg-gray-100 w-full"></div>
              </div>

              {/* 値 */}
              <p className="text-lg font-medium text-gray-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;