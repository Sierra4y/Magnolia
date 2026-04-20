import { useState } from "react";
import { layout, text } from "../../styles/classNames";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    plan: "",
    option: "",
    usage: "",
    message: "",
    title: "",
    originalMusic: "",
    musicURL: "",
    image: "",
    harmony: "",
    sample: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("entry.2025187071", form.name);
    formData.append("entry.257749657", form.email);
    formData.append("entry.804664577", form.title);
    formData.append("entry.384351530", form.originalMusic);
    formData.append("entry.1683629387", form.musicURL);
    formData.append("entry.427444028", form.image);
    formData.append("entry.1246450930", form.plan);
    formData.append("entry.1732004594", form.harmony);
    formData.append("entry.1975993192", form.sample);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdow_Zc8aP8C93H-VgjYG74zRXxx2RrlDO-WQ7SHIzKAURwyA/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    alert("送信完了！");
  };

  return (
    <div className={`${layout.section} flex items-center`}>
      <div className={layout.container}>
        <h2 className={`${text.title} text-center mb-10`}>
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-5"
        >
          {/* input共通 */}
          <input
            type="text"
            name="name"
            placeholder="活動名 / ハンドルネーム"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9e4d4]"
            required
          />

          <input
            type="text"
            name="email"
            placeholder="ご連絡先（Xまたはメール）"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9e4d4]"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="楽曲タイトル"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="originalMusic"
            placeholder="原曲URL"
            value={form.originalMusic}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          />

          <select
            name="plan"
            value={form.plan}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          >
            <option value="" disabled>プランを選択</option>
            <option value="ショート">ショート</option>
            <option value="ワンコーラス">ワンコーラス</option>
            <option value="フルコーラス">フルコーラス</option>
          </select>

          <input
            type="text"
            name="musicURL"
            placeholder="音源URL"
            value={form.musicURL}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          />

          <select
            name="harmony"
            value={form.harmony}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
          >
            <option value="" disabled>ハモリ</option>
            <option value="録音したハモリを使用してほしい">録音したハモリを使用</option>
            <option value="ハモリを生成してほしい">生成してほしい</option>
            <option value="不要">不要</option>
          </select>

          <input
            type="text"
            name="image"
            placeholder="仕上がりのイメージ"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          />

          <select
            name="sample"
            value={form.sample}
            onChange={handleChange}
            disabled
            className="w-full border border-gray-200 p-3 rounded-lg"
            required
          >
            <option value="" disabled>サンプル使用</option>
            <option value="サンプルとしての使用可能">使用可能</option>
            <option value="使用不可">使用不可</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#e9e4d4] text-gray-800 py-3 rounded-lg hover:opacity-80 transition"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}