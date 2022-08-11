counter = 0;
arrayEmojis = [
  "👶",
  "🌳",
  "🦄",
  "⛲️",
  "🏬",
  "🔱",
  "☺️",
  "🍝",
  "🚉",
  "🚎",
  "⚫️",
  "🙍",
  "🌜",
  "↕️",
  "➿",
  "🕡",
  "😽",
  "〽️",
  "🔻",
  "🕛",
];

currentContent = [];

let display = document.getElementById("arrayDisplay");

function generateEmoji() {
  emoji = getRandomEmoji();
  return emoji;
}
function getRandomEmoji() {
  let num = Math.floor(Math.random() * arrayEmojis.length);
  return arrayEmojis[num];
}
function getPosition(type) {
  if ((type === "add")) {
    position = document.getElementById("numberAdd").value;
    return position - 1;
  } else if ((type === "remove")) {
    position = document.getElementById("numberRemove").value;
    console.log(position);
    return position - 1;
  }
}
function updateContent() {
  display.innerHTML = currentContent;
}

const pushArray = () => {
  emoji = generateEmoji();
  currentContent.push(emoji);
  updateContent();
};

const unshiftArray = () => {
  emoji = generateEmoji();
  currentContent.unshift(emoji);
  updateContent();
};

function insertArray() {
  emoji = generateEmoji();
  position = getPosition("add");
  currentContent.splice(position, 0, emoji);
  updateContent();
}

function popArray() {
  currentContent.pop();
  updateContent();
}

function shiftArray() {
  currentContent.shift();
  updateContent();
}

function removeArray() {
  position = getPosition("remove");
  console.log(position);
  currentContent.splice(position, 1);
  console.log(currentContent);
  updateContent();
}
