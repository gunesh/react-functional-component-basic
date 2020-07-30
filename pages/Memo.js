import React, { useState, useMemo } from "react";

function Memo() {
  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);
  const [cnt3, setCnt3] = useState(0);
  const count1 = () => {
    setCnt1(cnt1 + 1);
  };
  const count2 = () => {
    setCnt2(cnt2 + 1);
  };
  const count3 = () => {
    setCnt3(cnt3 + 1);
  };

  const myMemoComponent = useMemo(() => {
    return <AnotherComp />;
  }, [cnt2, cnt3]);
  return (
    <div className="App">
      <div>
        Count 1: {cnt1} &nbsp;&nbsp; <button onClick={count1}>Count1</button>{" "}
        &nbsp;&nbsp;
      </div>
      <div>
        Count 2: {cnt2}&nbsp;&nbsp; <button onClick={count2}>Count2</button>{" "}
        &nbsp;&nbsp;
      </div>
      <div>
        Count 3: {cnt3}&nbsp;&nbsp; <button onClick={count3}>Count3</button>{" "}
        &nbsp;&nbsp;
      </div>
       This is Normal Component : <AnotherComp />
       This is memorize Component : {myMemoComponent}
    </div>
  );
}
const AnotherComp = () => {
  return <p>{Math.random()}</p>;
};
export default Memo;
