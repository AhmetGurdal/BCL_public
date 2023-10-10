import { Loader } from "@/components/loader";
import { StateType } from "@/components/reducer";
import { Answer } from "@/models/answer";
import { useEffect, useState } from "react";

export default function AnswerPage(props: { state: StateType }) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    switch ((props.state.currentItem as Answer).answerType) {
      case "global":
        setAnswers(Object(props.state.answers)?.answers as string[]);
        break;
      case "static":
        setAnswer((props.state.currentItem as Answer).text);
        break;
      default:
        setAnswers([]);
    }
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="answerPage">
      <div className="answerTitle">Daha Sıkı İlişkili Hukuk:</div>
      <div className="answers">
        {answer.length > 0 && <div className="answer">{answer}</div>}
        {answers?.length > 0
          ? answers.map((e, i) => {
              return (
                <div className="answer" key={i}>
                  {i + 1} - {e}
                </div>
              );
            })
          : "Sonuç Bulunamadı!"}
      </div>

      <button className="clearBtn" onClick={() => location.reload()}>
        Baştan Başla
      </button>
    </div>
  );
}
