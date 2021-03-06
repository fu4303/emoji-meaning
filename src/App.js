import React, { useState } from "react";
import "./index.css";

// dark mode 

var currentTheme = 'dark';

function changeTheme() {
  document.body.classList.toggle('dark-mode');

  if (currentTheme === 'dark') {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
    currentTheme = 'sun';
  } else {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';
    currentTheme = 'dark';
  }
}


// application code

var emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": " Grinning Face with Smiling Eyes",
  "๐": " Beaming Face with Smiling Eyes",
  "๐": " Grinning Squinting Face",
  "๐": " Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",
  "๐": " Face with Tears of Joy",
  "๐": " Slightly Smiling Face",
  "๐": " Upside-Down Face",
  "๐": " Winking Face",
  "๐": " Smiling Face with Smiling Eyes",
  "๐": " Smiling Face with Halo",
  "๐ฅฐ": " Smiling Face with Hearts",
  "๐": " Smiling Face with Heart-Eyes",
  "๐คฉ": " Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "โบ": "Smiling Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐ฅฒ": "Smiling Face with Tear",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": " Money-Mouth Face",
  "๐ค": " Hugging Face",
  "๐คญ": " Face with Hand Over Mouth",
  "๐คซ": " Shushing Face",
  "๐ค": " Thinking Face",
  "๐ค": " Zipper-Mouth Face",
  "๐คจ": " Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": " Expressionless Face",
  "๐ถ": " Face Without Mouth",
  "๐": " Smirking Face",
  "๐": " Unamused Face",
  "๐": " Face with Rolling Eyes",
  "๐ฌ": " Grimacing Face",
  "๐คฅ": " Lying Face",
  "๐": " Relieved Face",
  "๐": " Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": " Drooling Face",
  "๐ด": " Sleeping Face",
  "๐ท": " Face with Medical Mask",
  "๐ค": " Face with Thermometer",
  "๐ค": " Face with Head-Bandage",
  "๐คข": " Nauseated Face",
  "๐คฎ": " Face Vomiting",
  "๐คง": " Sneezing Face",
  "๐ฅต": " Hot Face",
  "๐ฅถ": " Cold Face",
  "๐ฅด": " Woozy Face",
  "๐ต": " Dizzy Face",
  "๐คฏ": " Exploding Head",
  "๐ค?": " Cowboy Hat Face",
  "๐ฅณ": " Partying Face",
  "๐ฅธ": " Disguised Face",
  "๐": " Smiling Face with Sunglasses",
  "๐ค": " Nerd Face",
  "๐ง": " Face with Monocle",
  "๐": " Confused Face",
  "๐": " Worried Face",
  "๐": " Slightly Frowning Face",
  "โน": " Frowning Face",
  "๐ฎ": " Face with Open Mouth",
  "๐ฏ": " Hushed Face",
  "๐ฒ": " Astonished Face",
  "๐ณ": " Flushed Face",
  "๐ฅบ": " Pleading Face",
  "๐ฆ": " Frowning Face with Open Mouth",
  "๐ง": " Anguished Face",
  "๐จ": " Fearful Face",
  "๐ฐ": " Anxious Face with Sweat",
  "๐ฅ": " Sad but Relieved Face",
  "๐ข": " Crying Face",
  "๐ญ": " Loudly Crying Face",
  "๐ฑ": " Face Screaming in Fear",
  "๐": " Confounded Face",
  "๐ฃ": " Persevering Face",
  "๐": " Disappointed Face",
  "๐": " Downcast Face with Sweat",
  "๐ฉ": " Weary Face",
  "๐ซ": " Tired Face",
  "๐ฅฑ": " Yawning Face",
  "๐ค": " Face with Steam From Nose",
  "๐ก": " Pouting Face",
  "๐?": " Angry Face",
  "๐คฌ": " Face with Symbols on Mouth",
  "๐": " Smiling Face with Horns",
  "๐ฟ": " Angry Face with Horns",
  "๐": " Skull",
  "โ?": " Skull and Crossbones",
  "๐ฉ": " Pile of Poo",
  "๐คก": " Clown Face",
  "๐น": " Ogre",
  "๐บ": " Goblin",
  "๐ป": " Ghost",
  "๐ฝ": " Alien",
}

var emojiindict = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiclicked(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation container">
        <div className="nav-brand">emoji-meaning</div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link link-active" href="/">home</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/">github</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://logan1x.github.io">about</a>
          </li>
          <li className="list-item-inline">
            <span id="toggleknop" onClick={changeTheme}><i className="fas fa-moon" id="zon"
              style={{ color: "#737eac" }}></i></span>
          </li>
        </ul>
      </nav>
      <div className="container container-center">
        <h1 className="hero">Do you know meaning of this <span className="heading-inverted">emoji?</span></h1>
        <p>Start typing emoji to see some magic happen!</p>
        <input onChange={emojiHandler} placeholder="Type an emoji here" />
        <h2>{emojiMeaning}</h2>
        <p> Emoji's we know </p>
        <div className="emojishow" >{emojiindict.map((item) => {
          return (
            <span onClick={() => emojiclicked(item)} style={{ padding: ".5rem" }}>
              {item}
            </span>
          );
        })}
        </div></div>
      <footer className="footer">
        <div className="footer-header">Connect with me on</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/logan1x">
              Github
                </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/herkuch">
              Twitter
                </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://linkedin.com/in/logan1x">
              LinkedIn
                </a>
          </li>

        </ul>
      </footer>
    </div>
  );
}
