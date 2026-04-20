import { layout, text } from "../../styles/classNames";

const About = () => {
    return (
        <div className={`${layout.section} flex items-center`}>
            <div className={layout.container}>
                <h2 className={`${text.title} text-center mb-10`}>
                    About
                </h2>

                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg min-h-[50vh] flex flex-col justify-center">
                    <p className="text-lg lg:text-xl font-medium">
                    音のトータルサポーターとして活動中のマグノリアです。
                </p>

                    <p>
                    専門学校で作編曲とミックスを学び<br />
                    卒業後は楽曲提供や番組編集など<br />
                    ジャンルを問わず「音」の現場で経験を積んできました。
                    </p>

                    <p>
                    現在はフリーランスの作編曲家・MIX師として<br />
                    楽曲制作や「歌ってみた」のMIXなどを中心に活動しています。
                    </p>

                    <p>
                    クオリティはもちろん、初めての方にもわかりやすく<br />
                    丁寧な制作を大切にしています。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;