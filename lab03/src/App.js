import Form from "./Components/AddForm";
import ToDoList from "./Components/ToDoList";
const App = () => {
  const tasks = [
    {task: "Make a lunch",
    date: "10.10.2022"}
]
  return ( 
    <div className="App">
      <ToDoList tasks={tasks}/>
      <Form />
    </div>
   );
}
 
export default App;