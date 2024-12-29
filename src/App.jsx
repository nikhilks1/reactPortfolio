import './App.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import resume from './assets/resume.pdf'
import { useEffect, useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [text] = useTypewriter({
    words: [' Developer', ' Designer'],
    loop: {},
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
   
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black">
        <ClimbingBoxLoader
          color={"#ffffff"}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1 className="text-white mt-4 text-center text-xl">Loading<span>
             <span className="dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
           </span>
        </h1> 
        
      </div>
      
    );
  }

  return (
    <>
  <div style={{ backgroundColor: 'rgb(24, 24, 27)', minHeight: '100vh' }} className="text-white mx-auto p-7 flex justify-center ">
    <div>
      <div className="container mx-auto">
        <h1 className="text-xl font-thin tracking-tighter">Nikhil K S</h1> 
        <p className="font-light heading">
          Web
          <span>
            <span>{text}</span>
            <Cursor />
          </span>
        </p>
        
        <span className="font-thin mt-5 block">Projects</span>
  
        <div className='projectGroup'>
                  {/* project 1 */}
                  <div className='project mt-4 '>
                    <a href="https://reactiphone.vercel.app" target='_blank' rel="noopener noreferrer" className='logo'>
                    iPhone 15 Pro Concept Page
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>Responsive layout featuring Apple's flagship</p>
                  </div>
  
                  {/* project 2 */}
                  <div className='project mt-4'>
                    <a href="https://react-nike-five.vercel.app" target='_blank' rel="noopener noreferrer"  className='logo'>
                    Nike inspired landing page
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>A sleek landing page inspired by Nike, optimized for all devices.</p>
                  </div>
  
                  {/* project 3 */}
                  <div className='project mt-4'>
                    <a href="https://spotifyclonewithreact.netlify.app/" target='_blank' rel="noopener noreferrer"  className='logo'>
                      Spotify Clone
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>A responsive web app replicating Spotify's interface and functionality.</p>
                  </div>
  
                  {/* project 4 */}
                  <div className='project mt-4'>
                    <a href="https://color-shade-picker.vercel.app/" target='_blank' rel="noopener noreferrer"  className='logo'>
                    Color Picker
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>A tool to select and copy colors with a user-friendly interface.</p>
                  </div>

                  
                  {/* project 5 */}
                  <div className='project mt-4'>
                    <a href="https://react-yarn-tic-tac-toe-game.vercel.app" target='_blank' rel="noopener noreferrer"  className='logo'>
                    Tic Tac Toe Game
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>A responsive web app replicating Spotify's interface and functionality.</p>
                  </div>


                   
                  {/* project 6 */}
                  {/* <div className='project mt-4'>
                    <a href="https://react-yarn-tic-tac-toe-game.vercel.app" target='_blank' rel="noopener noreferrer"  className='logo'>
                    Tech Mart
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                    <p>A responsive Spotify clone that .</p>
                  </div> */}
        </div>
  
        <div className='brandIcons mt-8 text-2xl'>
             <a href='https://github.com/nikhilks1' target='_blank' rel="noopener noreferrer"> <i className="fa-brands fa-github link"></i></a>
             <a href='https://www.linkedin.com/in/nikhilks1' target='_blank' rel="noopener noreferrer"> <i className="fa-brands fa-linkedin ml-4 link"></i></a>
             <a href='https://www.figma.com/@nikhilks' target='_blank' rel="noopener noreferrer"> <i className="fa-brands fa-figma ml-4 link"></i></a>
             <a href='https://monkeytype.com/profile/blend_op' target='_blank' rel="noopener noreferrer"> <i className="fa-solid fa-keyboard ml-4 link"></i></a>
             <a href='https://leetcode.com/u/Nikhilks231' target='_blank' rel="noopener noreferrer"> <i className="fa-solid fa-code ml-4 link"></i></a>
             <a href={resume} target='_blank' rel="noopener noreferrer" download> <i className="fa-solid fa-download ml-4 link"></i></a>
        </div>
      </div>
    </div>
  </div>
  
</>


  )
}

export default App
