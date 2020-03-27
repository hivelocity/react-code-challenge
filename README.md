# Hivelocity React code challenge

- [Hivelocity React code challenge](#hivelocity-react-code-challenge)
  - [Challenge](#challenge)
  - [My Notes](#my-notes)
    - [Initial Thoughts](#initial-thoughts)
      - [swagger-client](#swagger-client)
      - [styled-components](#styled-components)
    - [Solution](#solution)
    - [Speedbumps](#speedbumps)
    - [After Thoughts](#after-thoughts)
    - [Delighters](#delighters)

## Challenge

The challenge is to request a list of devices from our API endpoint https://core.hivelocity.net/api/v2/device/ then render each individual device's data into components that look like this:

<img src="example.png"/>

To see example data [interactive api docs are located here.](https://api-docs.hivelocity.net/openapi)

## My Notes

### Initial Thoughts

My first concern was the API key. Ordinarily, this key would be stored on a server and not shipped to the client, but I figured simply keeping the key out of my public repo was good enough for the purposes of a code challenge.

I appreciated the notes in the README about styled-components and Swagger Client - both the insight into Hivelocity’s tech choices and the guidance to take it or leave it. I felt inclined to at least consider both.

#### swagger-client

I’m accustomed to Swagger API docs, but I didn’t know there was such a thing as a Swagger Client. I looked at the docs for a minute and couldn’t immediately see how Swagger Client would benefit me, so I decided to use the Web Fetch API and save myself the time of learning a new package.

#### styled-components

I hadn’t used styled-components professionally or even in my own projects, but I have used emotion which is similar, so I figured why not give it a shot. CSS-in-JS FTW!

### Solution

With the guidance of "keep it simple," my goal was to put nothing more than the list of devices on the screen as content and to add that content directly in the App component. However, because the content is data driven and the data would be fetched after the first render, I wanted to ensure I had content to display before the data had been loaded. I also wanted the user to be able to distinguish between “no data yet,” “no data came back,” and "failed to get data" states. I'm a fan of using finite state machines like XState for this kind of thing when things gets more complicated.

I wrapped my use of Fetch in an abstraction so as not to couple my solution to that API too tightly in case I wanted to try swapping it with Swagger Client, for example.

### Speedbumps

The biggest snag I hit was that the server didn't allow CORS requests from localhost. Only after trying several Chrome extensions to bypass this, I ended up switching to Firefox to use a _working_ CORS bypassing extension. In the real world, I imagine the requesting domain would be whitelisted for CORS on the server.

### After Thoughts

It would be nice if the user didn’t need to refresh to find out a device had been powered off, but I didn't want to keep polling the server and potentially expend a rate limit. Ideally, I wouldn’t have to poll the server for this data and instead receive updates from a server via SSE or WebSockets.

I debated about adding tests given that the guidance on the challenge was to spend only as much time as I needed to complete the objective. I know from reviewing code submissions on my current team that a lack of tests allows the reviewer to assume that the interviewee either doesn’t test their code or doesn't know how to test their code. That can start you off in a bad light come interview time, but ultimately I decided to forego them.

### Delighters

- I swapped the default React favicon with Hivelocity's favicon and set an appropriate document title.
- The loading indicator will change when the request is taking longer than expected.
