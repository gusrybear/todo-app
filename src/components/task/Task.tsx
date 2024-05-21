import { CheckCircleOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { useState } from "react"

const Task = () => {
  const [tasks, setTask] = useState<string[]>([])
  const [value, setValue] = useState("")

  const addTask = () => {
    setTask([...tasks, value])
    setValue("")
  }
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Space.Compact>
          <Input
            placeholder="Enter new task."
            className="w-[400px]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="primary" onClick={addTask}>
            Add Task
          </Button>
        </Space.Compact>
      </div>
      {tasks.length > 0 && (
        <div id="display-task" className="flex flex-col gap-y-2">
          {tasks.map((task) => {
            return (
              <div
                key={task}
                className="flex gap-x-2 items-center bg-white rounded-md p-2 opacity-75"
              >
                <CheckCircleOutlined
                  className="text-[36px] hover:text-green-500 hover:cursor-pointer"
                  onClick={() => alert(`${task} is clicked!`)}
                />
                <p className="text-black font-medium text-xl">{task}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Task
