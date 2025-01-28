import React from "react";
import "./index.css";

let data = [
  {
    id: 1,
    imgURL: "https://media.istockphoto.com/id/136881877/photo/mountain-lake-with-dock-and-stars.jpg?s=612x612&w=0&k=20&c=hwMVAc4R5UGAOrQoZiXV4MYjuXodHWElPJp_ogCZySw=",
    title: "Beautiful Pic..!!",
    description: "Lorem Picsum lorem ipsum for photos. If you need pictures for testing or just placeholders in your prototype, this is a nice resource.",
  },
  {
    id: 2,
    imgURL: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    title: "Mountains..!!",
    description: "If you need pictures for testing or just placeholders in your prototype, this is a nice resource.",
  },
  {
    id: 3,
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    title: "NightLight..!!",
    description: "Just placeholders in your prototype, this is a nice resource.",
  },
];

const App = () => {
  return (
                          // <div className="container">
                          //   <Movie imgURL={data[0].imgURL} title={data[0].title} description={data[0].description}/>
                          //   <Movie imgURL={data[1].imgURL} title={data[1].title} description={data[1].description}/>
                          //   <Movie imgURL={data[2].imgURL} title={data[2].title} description={data[2].description}/>

                          
                          // </div>
                       <section>
                      {data.map((eachObj,id)=>
                      {
                        const{title,imgURL,description}=eachObj;
                        return(
                          <Movie 
                          key={id}
                          title={title}
                          imgURL={imgURL}
                          description={description}
                          />

                        );
                      })};

                       </section>

  );
};

const Movie = ({ imgURL, title, description }) => {
  return (
    <div className="div1">
      <img
        src={imgURL}
        height="300px"
        width="300px"
        alt={title}
      />
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default App;
