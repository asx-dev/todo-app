import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function tasks() {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTaskHandler = () => {
    if (newTask !== "") {
      setData((prev) => [...prev, { data: newTask, id: Date.now() }]);
      setNewTask("");
    }
  };

  const deleteTaskHandler = (id) => {
    setData((prev) => prev.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <BouncyCheckbox
        size={35}
        fillColor="#141736"
        text={item.data}
        textStyle={{ fontSize: 25, color: "black" }}
        style={styles.checkbox}
      />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTaskHandler(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      {/* <Toast config={toastConfig} /> */}
      <SafeAreaView style={styles.viewPort}>
        <View style={styles.container}>
          <Text style={styles.title}>📝 Tasks Manager</Text>
          {/* Input to create a new tasks */}
          <TextInput
            style={styles.textInput}
            placeholder="Add new tasks here...."
            onChangeText={(text) => setNewTask(text)}
            defaultValue={newTask}
          />
          <TouchableOpacity style={styles.button} onPress={addTaskHandler}>
            <Text style={styles.buttonText}>Add new task</Text>
          </TouchableOpacity>
          {/* List of tasks to do */}
          {data.length < 1 ? (
            <Text style={styles.text}>You dont have pending tasks 🏖️</Text>
          ) : (
            <FlatList style={styles.list} data={data} renderItem={renderItem} />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
    marginVertical: 5,
  },
  container: {
    paddingHorizontal: 20,
    gap: 15,
  },
  title: {
    fontSize: 50,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  checkbox: {
    marginVertical: 8,
    width: "70%",
  },
  textInput: {
    height: 60,
    borderWidth: 2,
    borderColor: "#141736",
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#141736",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
  },
  taskItem: {
    flexDirection: "row",
    marginVertical: 3,
  },
});
