import React from 'react';

function TweetForm(){
  const placeholderText = "What are you humming about?";
  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
  <section className="newtweet">
    <form onSubmit={handleClick} method="post" action="/tweets" className="newtweet__form">
      <textarea class="form__textarea" name="text" placeholder={placeholderText}></textarea>
      <input onClick={handleClick} type="submit" value="Tweet" className="form__input"></input>
      <span className="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;