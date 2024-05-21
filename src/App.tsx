import Task from "./components/task/Task"

function App() {
  return (
    <>
      <div className="mx-4 flex flex-col gap-y-4">
        <h1 className="text-white font-bold underline">
          Todo App By Gusrybear
        </h1>

        <Task />
      </div>
    </>
  )
}

export default App
