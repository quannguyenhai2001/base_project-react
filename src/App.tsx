import './App.css'
import { useTranslation } from 'react-i18next'
function App() {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('lead.base')}</div>
      <div>{t('component:button.add')}</div>
    </>
  )
}

export default App
