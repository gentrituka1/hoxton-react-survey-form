import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          
          <label htmlFor="best-feature">What would you say that are the best features of your rubber duck?</label>
          <div className="form__best-feature checkbox-grid">
            <input type="checkbox" id="best-feature"></input><span>It's yellow!</span>

            <input type="checkbox" id="best-feature"></input><span>It squeaks!</span>

            <input type="checkbox" id="best-feature"></input><span>It has a logo!</span>

            <input type="checkbox" id="best-feature"></input><span>It's big!</span>
          </div>

          <label htmlFor="worst-feature">What would you say that are the best features of your rubber duck?</label>
          <div className="form__worst-feature checkbox-grid">
            <input type="checkbox" id="worst-feature"></input><span>It's yellow!</span>

            <input type="checkbox" id="worst-feature"></input><span>It squeaks!</span>

            <input type="checkbox" id="worst-feature"></input><span>It has a logo!</span>

            <input type="checkbox" id="worst-feature"></input><span>It's big!</span>
          </div>

          <label htmlFor="consistency">How do your rate your rubber duck consistency?</label>
          <div className="number-grid">
            <input type="radio" id="consistency-1" value={1}></input>
            <input type="radio" id="consistency-2"></input>
            <input type="radio" id="consistency"></input>
            <input type="radio" id="consistency"></input>
          </div>

          <label htmlFor="colour">How do you rate your rubber duck colour?</label>
          <div className="number-grid">
            <label id="colour">1</label>
            <label id="colour">2</label>
            <label id="colour">3</label>
            <label id="colour">4</label>
          </div>

          <label htmlFor="logo">How do your rate your rubber duck logo?</label>
          <div className="number-grid">
            <label id="logo">1</label>
            <label id="logo">2</label>
            <label id="logo">3</label>
            <label id="logo">4</label>
          </div>

          <label htmlFor="spent-time">What would you say that are the best features of your rubber duck?</label>
          <div className="form__spent-time checkbox-grid">
            <input type="checkbox" id="spent-time"></input><span>It's yellow!</span>

            <input type="checkbox" id="spent-time"></input><span>It squeaks!</span>

            <input type="checkbox" id="spent-time"></input><span>It has a logo!</span>

            <input type="checkbox" id="spent-time"></input><span>It's big!</span>
          </div>

          <label htmlFor="comment">What else do you got to say about your rubber duck?</label>
          <textarea id="comment" rows={10}></textarea>

          <label htmlFor="name">Put your name here (if your feel like it):</label>
          <input type="text" id="name"></input>

          <label htmlFor="name">Leave us your email pretty please??</label>
          <input type="email" id="name"></input>
        </form>
      </section>
    </main>
  );
}

export default Main;
