# Fight Culture SF

[FightCultureSF.com](https://fightculturesf.com)

![fc-gif](https://user-images.githubusercontent.com/89363938/192906932-84af743e-26ce-4ae0-990f-5784387e9c5a.gif)
<img src="public/images/FightCultureBlackLogo.png" height='330' width='330'></img>


## Overview

FightCultureSF.com is the domain site for Fight Culture, a martial arts training facility located right on the border of San Francisco and Daly City at 6137 Mission Street. Fight Culture teaches muay thai, brazilian jiu-jitsu, wrestling, and boxing to its members. The site can be navigated via the 'Navbar' component, which contains links to all 5 pages: Classes, Instructors, Schedule, Gallery, & Contact. These links are also accessible within the 'Footer' component as well as the 'Cards' component on the home page.

![fc-gif-links](https://user-images.githubusercontent.com/89363938/192906941-30a2fe61-e657-4dbc-ad7b-e266ed63e1f7.gif)
<img src="public/images/readme-cards.png" height='380'></img>
<img src="public/images/readme-footer.png" height='320'></img>


## Technologies, Libraries, APIs

- React Hooks
- Next.js
- Node.js
- Tailwind / CSS3

## Features

- Fully mobile responsive 
- Responsive Navbar with 5 links 
- Client side rendering with React.js
- Server side rendering with Next.js

![fc-gif-mobile](https://user-images.githubusercontent.com/89363938/192908129-c43ca8a7-055d-4313-8c72-940bf0e71eb7.gif)
![fc-gif-links-mobile](https://user-images.githubusercontent.com/89363938/192907702-accdec74-9d4a-4a78-aa9d-b9a9d0a1dfa6.gif)

## Technical Implementations

The most important implementation I made to this project was the addition of server-side rendering with Next.js. Applying the server side code with React was possible, but I found implementing Next.js to be faster solution which lead to cleaner D.R.Y code and a faster website! Once installed, I had to change my React file structure to fit Next.js parameters. I then added the server code which assisted in rendering static HTML to the server to allow for fast refreshing and an increase in overall site performance and optimization. Without this implementation, the site would only run client-side and render a 403 error when any of the links are refreshed.

```javascript
// server.js

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

Another crucial implementation for the functionality of this project is that of the 'Navbar' component. The Navbar is mobile responsive, and uses true/false logic to apply the component's state & navigate pages. [click, setClick] are variables set to a false state, and when the handleClick() function is called, the opposite state from what the component was is then applied. Turnary logic and Tailwind CSS are applied in the unordered list tag, which contains the mobile drop down menu's code. The same logic is then applied to the fontAwesome Icon which appears or disapears depending on the media screen width.


```javascript
// navbar.js
    
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

const closeMobileMenu = () => setClick(false)

<ul id='fadeInLeftFast'
    className={click ? 'fixed animate-fadeInFast mt-96 mb-1 w-screen bg-[#242222]' 
                      : 'hidden med:flex items-right ml-auto justify-right pr-4'}>
  <div>
      // ...Code for Navbar Links
  </div>
</ul>

<div className='ml-auto cursor-pointer animate-fadeIn pr-8 med:hidden'>
  <FontAwesomeIcon 
    icon={click ? faTimes : faBars} 
    onClick={handleClick} 
    className='bg-black text-white float-right lg:hidden'/>
</div>  

```

## Future Features

- Google Maps API on Contact page
- Next.js Image tags for optimal image loading
- downloadable PDF schedule 
- downloadable PDF waiver
- Live-class videos for classes page

<img src="public/images/FightCultureBlackLogo.png" height='400' width='400'></img>

