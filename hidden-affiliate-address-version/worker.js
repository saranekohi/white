addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Define the target URL to cloak
  const targetUrl = 'https://api.highriskshop.com';
  
  // Modify the request URL to replace the worker's domain with the target domain
  const url = new URL(request.url);
  url.hostname = new URL(targetUrl).hostname;

  // Add the affiliate parameter to the URL where you can replace this Polygon wallet with your own affiliate wallet hidden from your merchants in the address bar
  url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';

  const modifiedRequest = new Request(url.toString(), request);
  
  // Make a request to the target URL
  const response = await fetch(modifiedRequest);
  
  // Clone the response to modify headers
  const modifiedResponse = new Response(response.body, response);
  
  // Set headers to cloak the origin
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  
  return modifiedResponse;
}