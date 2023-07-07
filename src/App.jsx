import { useState } from 'react'

/* LOCAL IMPORTS */
import Navigation from './components/Navigation'
import Rank from './components/Rank'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Signin from './components/Signin'
import Register from './components/Register'

const initialState = {
  id: '',
  name: '',
  email: '',
  entries: 0,
  joined: '',
}

function App() {
  const [url, setUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState(initialState)

  const handleChange = (inputValue) => {
    setUrl(inputValue)
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box

    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    // prettier-ignore
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  const detectImage = () => {
    setImageUrl(url)

    const PAT = 'e6884ce0269c4e22a0325e762b494cb2'
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'clarifai'
    const APP_ID = 'main'
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection'
    const IMAGE_URL = url

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    })

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        Authorization: 'Key ' + PAT,
      },
      body: raw,
    }

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      'https://api.clarifai.com/v2/models/' + MODEL_ID + '/outputs',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          fetch('https://smart-brain-backend.up.railway.app/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser((prevState) => ({
                ...prevState,
                entries: count,
              }))
            })
        }
        setBox(calculateFaceLocation(result))
      })
      .catch((error) => console.log('err', error))
  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setUser(initialState)
      setIsSignedIn(false)
    } else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route)
  }

  const loadUser = (data) => {
    const { id, name, email, entries, joined } = data

    setUser({
      id,
      name,
      email,
      entries,
      joined,
    })
  }

  return (
    <>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === 'home' ? (
        <>
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            imageUrl={url}
            handleChange={handleChange}
            handleSubmit={detectImage}
          />
          <FaceRecognition imageUrl={imageUrl} box={box} />
        </>
      ) : route === 'signin' ? (
        <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loadUser={loadUser} />
      )}
    </>
  )
}

export default App
