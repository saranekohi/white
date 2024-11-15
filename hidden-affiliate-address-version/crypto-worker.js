addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Define the target URL to cloak
  const targetUrl = 'https://api.paygate.to';
  
  // Modify the request URL to replace the worker's domain with the target domain
  const url = new URL(request.url);
  url.hostname = new URL(targetUrl).hostname;

  // Check the URL path and append the appropriate affiliate wallet parameter
  if (url.pathname.includes('/control/')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/btc')) {
    url.search += (url.search ? '&' : '') + 'affiliate=bc1qx9t2l3pyny2spqpqlye8svce70nppwtaxwdrp4';
  } else if (url.pathname.includes('/crypto/bch')) {
    url.search += (url.search ? '&' : '') + 'affiliate=bitcoincash:qz6v8t9ajq79rrlnckv34am9cgp3dyuhrcj3npwtyh';
  } else if (url.pathname.includes('/crypto/ltc')) {
    url.search += (url.search ? '&' : '') + 'affiliate=ltc1q7zhvk3xwhszepcplsyprzuh68xnw6mysd5k786';
  } else if (url.pathname.includes('/crypto/doge')) {
    url.search += (url.search ? '&' : '') + 'affiliate=D62eMUkApXg3R48CsVTyr8V4WFbeCijSyc';
  } else if (url.pathname.includes('/crypto/eth')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/trx')) {
    url.search += (url.search ? '&' : '') + 'affiliate=TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX';
  } else if (url.pathname.includes('/crypto/bep20')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/erc20')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/arbitrum')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/polygon')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/avax-c')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/optimism')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/base')) {
    url.search += (url.search ? '&' : '') + 'affiliate=0x505e71695E9bc45943c58adEC1650577BcA68fD9';
  } else if (url.pathname.includes('/crypto/trc20')) {
    url.search += (url.search ? '&' : '') + 'affiliate=TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX';
  }

  // Create the modified request
  const modifiedRequest = new Request(url.toString(), request);
  
  // Make a request to the target URL
  const response = await fetch(modifiedRequest);
  
  // Clone the response to modify headers
  const modifiedResponse = new Response(response.body, response);
  
  // Set headers to cloak the origin
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  
  return modifiedResponse;
}
