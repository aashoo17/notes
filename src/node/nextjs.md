# next.js

---

## install

`npm i -S next react react-dom`

or

`yarn add next react react-dom`

## scripts to use

```json
"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
}
```

## pages folder to be created

an index.js will be loaded by default
and other with the '/route'

## run in developement

`npm run dev`

or

`yarn run dev`

## use another port than 3000

`npm run dev -p 4000`

## static folder

static assets to be kept here and should be accessed by
/static/

## head to be bloated by

`import Head from 'next/head'`

## data fetching getInitialProps

in class component

```javascript
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = 'chrome'
    return { userAgent }
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>
  }
}
```

in functional component

```javascript
const Page = ({ stars }) => <div>Next stars: {stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

getInitialProps will return an object and properties of this object
will populate the react component props

this method will get an context object as argument with following properties

    pathname - path section of URL
    query - query string section of URL parsed as an object
    asPath - String of the actual path (including the query) shows in the browser
    req - HTTP request object (server only)
    res - HTTP response object (server only)
    jsonPageRes - Fetch Response object (client only)
    err - Error object if any error is encountered during the rendering

## Routing

using Link

`import Link from 'next/link'`

```javascript
<Link href="/about">
      <a>here</a>
    </Link>{' '}
```

using Router

`import Router from 'next/router'`

Above Router object comes with the following API:

    route - String of the current route
    pathname - String of the current path excluding the query string
    query - Object with the parsed query string. Defaults to {}
    asPath - String of the actual path (including the query) shows in the browser
    push(url, as=url) - performs a pushState call with the given url
    replace(url, as=url) - performs a replaceState call with the given url
    beforePopState(cb=function) - intercept popstate before router processes the event.

## using HOC withRouter

```javascript
import { withRouter } from 'next/router'

//children prop is created by react
//router prop by wrapping with withRouter
//href is prehaps created manually

const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
```
