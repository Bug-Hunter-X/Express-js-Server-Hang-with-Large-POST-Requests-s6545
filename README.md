# Express.js Server Hang with Large POST Requests

This repository demonstrates a common issue in Express.js applications where the server hangs or becomes unresponsive when processing large POST requests.  The problem arises from performing synchronous operations within the request handler, blocking the event loop and preventing other requests from being processed.

## Bug

The `bug.js` file contains an Express.js server that attempts to process POST requests to the `/data` endpoint.  It simulates an asynchronous operation with a 5-second `setTimeout`, however the problem is the server does not handle it correctly and the server will hang for a large amount of time.

## Solution

The `bugSolution.js` file provides a solution to this problem, using asynchronous processing to avoid blocking the event loop.  The solution uses promises to handle the asynchronous operation, ensuring that the request handler can return control to the event loop promptly.