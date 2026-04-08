# SpillR

A time-synced live TV commentary app. Comment and react with emoji on shows in real time - every message is anchored to the show's timeline, not the clock, so premiere and catchup viewers share the same spoiler-free conversation.

## What it does

Tap "Start" when your show begins. A local timer syncs your experience to the broadcast timeline. Every comment, reply, and emoji reaction you see appears at the exact moment in the show it was posted — whether you're watching live or three days later. Emoji reactions fly up the screen for everyone at the same narrative beat.

## Demo

[Watch the demo on Vimeo](https://vimeo.com/1177638431)

## Backend repo

[spillr-BE](https://github.com/yewen-jin/spillr-BE) — Express + Socket.io server

## How it works

```
┌─────────────────────────────┐
│  React Native (Expo)        │
│  ├── Local timer state      │  ← setInterval, currentSecond
│  ├── Supabase REST API      │  ← Direct database reads
│  └── Socket.io client       │  ← Real-time events (queued until timer matches)
└─────────────────────────────┘
```

The client receives all real-time events via Socket.io but queues them locally. Comments, replies, and reactions only render when `currentSecond` matches their `timestamp` property. No server-side clock coordination needed.

## Tech stack

- **Framework:** React Native, Expo
- **Real-time:** Socket.io client on Express 
- **Database:** Supabase REST API (direct reads) + custom REST API endpoints on Express
- **State:** React hooks, custom hooks for Socket.io integration

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/go) app on your phone

## Getting started

```bash
git clone https://github.com/Ines1299/SpillR-app.git
cd SpillR-app
npm install
npx expo start
```

Scan the QR code in the terminal with the Expo Go app.

### Platform-specific

```bash
npm run android   # Android emulator
npm run ios       # iOS simulator
npm run web       # Browser
```

Create a `.env` file:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SOCKET_URL=your_backend_url
```

## Team

Built by a team of 6 in 2 weeks during a coding bootcamp.





