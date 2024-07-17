import styles from './App.module.css'
import Display from './components/Display'
import Button from './components/Button'
function App() {

  return (
    <div className={styles.container}>
      <Display />
      <Button />

    </div>
  )
}

export default App
