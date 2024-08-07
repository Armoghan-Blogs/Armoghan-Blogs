// Define the offline page content
var offlinePageContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 0;
      background-color: #f8f9fa; /* Light mode background */
      color: #212529; /* Light mode text color */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    h1 {
      font-size: 2.25rem; /* Tailwind text-4xl */
      font-weight: 800; /* Tailwind font-extrabold */
      margin-bottom: 1rem; /* Tailwind mb-3 */
    }
    p {
      margin: 2rem 0; /* Tailwind mt-8 mb-12 */
      color: #6c757d; /* Light mode text color */
    }
    .container {
      max-width: 600px;
      width: 100%;
      box-sizing: border-box; /* Ensure padding is included in width */
    }

    /* Dark mode styles */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #343a40; /* Dark mode background */
        color: #e9ecef; /* Dark mode text color */
      }
      p {
        color: #adb5bd; /* Dark mode text color */
      }
      .prose {
        color: #e9ecef; /* Dark mode text color for prose */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>You are Offline</h1>
    <p>It looks like you have lost connection to the internet. Please check your network settings and try again.</p>
    <div class="prose">
      <p>Our site requires an internet connection to work. If you continue to have issues, please contact support.</p>
    </div>
  </div>
</body>
</html>
`;

// Install event to activate the new service worker immediately
self.addEventListener('install', function (e) {
  self.skipWaiting(); // Skip the waiting phase
});

// Activate event to claim clients immediately
self.addEventListener('activate', function (e) {
  clients.claim(); // Become available to all clients
});

// Fetch event to handle requests and serve offline page when offline
self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request)
      .catch(function () {
        // Return the offline page if the network request fails
        return new Response(offlinePageContent, {
          headers: { 'Content-Type': 'text/html' }
        });
      })
  );
});
