import './paths'
import { port } from './config'
import app from './app'

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
