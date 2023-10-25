import Image from 'next/image'
import styles from './page.module.css'

const todoList = [
  { id: 1, task: 'Einkaufen gehen', completed: false },
  { id: 2, task: 'React-App erstellen', completed: true },
  { id: 3, task: 'Übungen für JavaScript machen', completed: false },
]

export default function Home() {
  return (
    <div>
    <nav style={{
      marginTop: "10px",
      display: "flex",
      gap: "1rem",
      backgroundColor: "grey",
      padding: "1rem"
    }}>
    <main>
    <h1>To-Do Aufgaben</h1>
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
        {todo.completed ? "Abgeschlossen: " : "Ausstehend: "}  {todo.task} ID: {todo.id}
      </li>))}
     </ul>
    </main>
    </nav>
    </div>
  )
}