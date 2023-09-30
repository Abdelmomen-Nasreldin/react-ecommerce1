import './App.scss'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function App() {

  return (
    <>
     <div className="flex items-center justify-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
    </>
  )
}

export default App
