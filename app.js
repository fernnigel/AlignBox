const items = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image1.jpg",
    time: 1,
    views: 734,
    likes: 298,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image2.jpg",
    time: 3,
    views: 2345,
    likes: 48,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image3.jpg",
    time: 1,
    views: 78932,
    likes: 3498,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image4.jpg",
    time: 4,
    views: 86352,
    likes: 32038,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image5.jpg",
    time: 2,
    views: 8334,
    likes: 98,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image6.jpg",
    time: 5,
    views: 92334,
    likes: 12398,
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image7.jpg",
    time: 6,
    views: 6352,
    likes: 3238,
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image8.jpg",
    time: 3,
    views: 8534,
    likes: 1298,
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image9.jpg",
    time: 7,
    views: 7325,
    likes: 2398,
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem illum, nihil ea consectetur repellat?",
    image: "image10.jpg",
    time: 3,
    views: 934,
    likes: 398,
  }
];

var mainMid = document.querySelector(".main-mid");

function mapItems(items) {

  let mapQuiz = items.map((item) => {

    return `<div class="row">
    <img src="./images/${item.image}"/>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div class="stats">
    <p>&#9201 ${item.time} month    &#128065 ${item.views}  &#128077 ${item.likes}</p>
    </div>
    </div>`;

  });

  mapQuiz = mapQuiz.join("");
  mainMid.innerHTML = mapQuiz;
}

window.addEventListener("load", () => {
    items.sort(function (a, b) {
        return a.time - b.time;
      });
    mapItems(items);
});

var selected = document.querySelector(".selected");

selected.addEventListener("change", () => {
  if (selected.options[selected.selectedIndex].text === "Newest") {

    items.sort(function (a, b) {
      return a.time - b.time;
    });

    mapItems(items);

  } 
  else if (selected.options[selected.selectedIndex].text === "Most Viewed") {

    items.sort(function (a, b) {
      return b.views - a.views;
    });

    mapItems(items);
  }
  else{

    items.sort(function (a, b) {
        return b.likes - a.likes;
      });
  
      mapItems(items);
  }
});

const mobNav = ()=>{
    document.querySelector(".mob-nav-links").classList.toggle("ht");
}