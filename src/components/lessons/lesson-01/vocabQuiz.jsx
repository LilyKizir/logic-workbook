import React, { useState } from "react";
const VocabQuiz = () => {
    const [answers, setAnswers] = useState({})
    const [score, setScore] = useState(0)

    const vocabulary = [
        { term: '北京', pinyin: 'bei3 jing1' },
        { term: '飞机', pinyin: 'fei1 ji1' },
        { term: '降落', pinyin: 'jiang4 luo4' },
        { term: '首都', pinyin: 'shou3 du1' },
        { term: '国际', pinyin: 'guo2 ji4' },
        { term: '机场', pinyin: 'ji1 chang3' },
        { term: '通过', pinyin: 'tong1 guo4' },
        { term: '海关', pinyin: 'hai3 guan1' },
        { term: '顺利', pinyin: 'shun4 li4' },
        { term: '找', pinyin: 'zhao3' },
        { term: '外事处', pinyin: 'wai4 shi4 chu4' },
        { term: '派', pinyin: 'pai4' },
        { term: '接', pinyin: 'jie1' },
        { term: '先生', pinyin: 'xian1 sheng1' },
        { term: '晚点', pinyin: 'wan3 dian3' },
        { term: '等', pinyin: 'deng3' },
        { term: '让', pinyin: 'rang4' },
        { term: '辆', pinyin: 'liang4' },
        { term: '出租汽车', pinyin: 'chu1 zu1 qi4 che1' },
        { term: '开车', pinyin: 'kai1 che1' },
        { term: '从来', pinyin: 'cong2 lai2' },
        { term: '见', pinyin: 'jian4' },
        { term: '骑', pinyin: 'qi2' },
        { term: '自行车', pinyin: 'zi4 xing2 che1' },
        { term: '对我来说', pinyin: 'dui4 wo3 lai2 shuo1' },
        { term: '新鲜', pinyin: 'xin1 xian1' },
        { term: '兴奋', pinyin: 'xing1 fen4' },

    ]

    const handleSubmit = e => {
        e.preventDefault();

        let count = 0;
        // do something
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {vocabulary.map(vocab => (
                    <div className="mb-2 d-flex justify-content-left" key={vocab.pinyin}>
                        <div className="bg bg-light border py-1 px-2 col-4 col-md-2 text-center">
                            <label >
                                {vocab.term}
                            </label>
                        </div>
                        <div className="bg bg-light border py-1 px-2 mx-2 ">
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default VocabQuiz