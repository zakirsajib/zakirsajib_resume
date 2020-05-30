import './src/styles/fonts/icomoon/style.css'
import './src/styles/plugins.min.css'
import './src/styles/style.min.css'
import './src/styles/global.css'
import './src/styles/theme.scss'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
