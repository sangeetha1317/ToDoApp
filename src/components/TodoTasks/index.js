import { ScrollView } from "react-native";
import TaskItem from "./TaskItem";

export default function TodoTasks({ tasks, onStatusChange, onTaskDelete }) {
    return (
        <ScrollView>

            {tasks.map((task, index) => {
                return (
                    <TaskItem
                        key={index}
                        {...task}
                        onStatusChange={onStatusChange}
                        onTaskDelete={onTaskDelete}
                    />
                )
            })}
        </ScrollView>
    );
}