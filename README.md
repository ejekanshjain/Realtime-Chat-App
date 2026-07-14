# Realtime Chat App

A lightweight real-time browser chat built with Express and Socket.IO.

## Features

- Join a shared chat with a display name
- Broadcast messages instantly over WebSockets
- Show user-connected and user-disconnected events
- Responsive single-page client served by Express
- In-memory connection tracking with no database dependency

## Local development

    npm install
    npm start

Open http://localhost:3000. Set PORT in the environment to use a different port.

## Architecture

server.js creates the HTTP and Socket.IO server, while index.html contains the chat interface and browser-side event handling. User state is intentionally ephemeral and is cleared when the server restarts.

## Status

This is a compact learning project from 2020. The original Heroku demo URL is retained in repository history but may no longer be active.
