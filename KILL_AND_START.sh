#!/bin/bash
echo "Killing old server..."
pkill -9 node
sleep 2
echo "Starting fresh server..."
cd /Users/rayen/Desktop/Website-ELITE-CARE-TRAVEL/server
npm run dev
