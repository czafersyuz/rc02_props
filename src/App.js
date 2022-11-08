import Person from "./components/Person";

function App() {
 

  return (
    <div>
      <Person
        name="Ahmet Can"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="55555555"
      />

      <Person style={{width:"100px"}}
        name="Mehmet baki"
        img="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
        tel="55555555"
      />

      <Person
        name="Canan Can"
        img="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"
        tel="5555544444555"
      />
    </div>
  );
}

export default App;
