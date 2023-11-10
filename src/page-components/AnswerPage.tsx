import { Loader } from "@/components/loader";
import { StateType } from "@/components/reducer";
import { AnswerPageProps } from "@/models/answer";
import { useEffect, useState } from "react";

export default function AnswerPage(props: { state: StateType }) {
  const [answerProps, setProps] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProps(props.state.answers);
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="answerPage">
      {/* {answers.length > 0 && <div className="answer">{answer}</div>} */}
      {(answerProps as AnswerPageProps).answers != undefined &&
      (answerProps as AnswerPageProps).answers.length > 0
        ? (answerProps as AnswerPageProps).answers.map((e, i) => {
            return (
              <div className="answer" key={i}>
                <div className="answerTitle">{e.title}</div>
                {e.texts.map((text, ai) => {
                  return (
                    <div className="answers" key={ai}>
                      {text}
                    </div>
                  );
                })}
              </div>
            );
          })
        : "Sonuç Bulunamadı!"}
      {(answerProps as AnswerPageProps)?.notes != undefined &&
      (answerProps as AnswerPageProps).notes.length > 0 ? (
        <>
          <hr className="solid" />
          <div className="answerTitle"> Notlar</div>
          {(answerProps as AnswerPageProps).notes.map((e, i) => (
            <div key={i}>
              <div className="answers">
                {e.title} - {e.text}
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      <button className="clearBtn" onClick={() => location.reload()}>
        Baştan Başla
      </button>
    </div>
  );
}
