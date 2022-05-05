import DataList from "./components/DataList";

const data = [
  { 
    name: 'Daniel', 
    age: 40, 
    children:[
			{name:'Hunter', age:21, 
        children:[
          {name:'Becky', age:2}

			  ]
      }

	  ]
  },

  { name: 'John', age: 24 },
  { 
    name: 'Jen', 
    age: 31, 
		children:[
			{name:'Baliey', age:5}

	  ]
  }
];

function App() {
  return (
    <>
      <h1>Sample Recersuve Data List App!</h1>
      <DataList data={data} />
    </>
  );
}

export default App;
