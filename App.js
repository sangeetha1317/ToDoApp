import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import uuid from 'react-uuid';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor } from './src/includes/variable.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TodoTasks from './src/components/TodoTasks';
import Form from './src/components/Form'
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (title, status) => {
    const newTask = {title, id: uuid(), status }
    const updateTasks = [...tasks, newTask];
    setTasks(updateTasks);
  }

  const handleStatusChange = (value, id) => {
    const updateTasks = tasks.map((task) => {
      if (task.id == id) {
        task.status = value;
      }
      return task;
    });
    setTasks(updateTasks);
  }

  const handleDeleteTask = (id) => {
    const filteredTask = tasks.filter(
      (task) => task.id !== id
    )
    setTasks(filteredTask);
  }

  
  return (
    <NavigationContainer>
     <View style={styles.container}>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: primaryColor
        }
      }}>
        <Tab.Screen 
          name='Task List'
          options={{
          tabBarLabelStyle: {
            color: primaryColor,
            fontWeight: 'bold'
          },
          tabBarIcon: ({focused}) => {
            const name = focused ? 'clipboard-list' : 'clipboard-list-outline'
            return (
                <MaterialCommunityIcons name={name} size={26} color={primaryColor} />            )
          }
        }}>
          { (props) => (
            <TodoTasks 
            {...props}
            tasks={tasks}
            onStatusChange={handleStatusChange}
            onTaskDelete={handleDeleteTask}  />
          )}
        </Tab.Screen>

        <Tab.Screen 
        name='Add Task' 
        options={{
          tabBarLabelStyle: {
            color: primaryColor,
            fontWeight: 'bold'
          },
          tabBarIcon: ({focused}) => {
            const name = focused ? 'clipboard-edit' : 'clipboard-edit-outline'
          return(
            <MaterialCommunityIcons name={name} size={24} color={primaryColor} />        
          )}
        }} >
          { (props) => (
            <Form
            {...props}
            onAddTask={handleAddTask} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View> 
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    }
  });