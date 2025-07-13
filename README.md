# whitelabel-api
White-label (rebrand API) https://api.paygate.to with your own custom domain using Cloudflare workers.

* Create a new Cloudflare worker
* Edit the code and replace with the desired worker.js (You can use the hidden affiliate wallet version to hide your wallet affiliate parameter from your sub merchants by inserting it directly in the Cloudflare JS code).
* Replace the example wallet (0x505e71695E9bc45943c58adEC1650577BcA68fD9) with your own affiliate wallet.
* Replace checkout.example.com with your own custom domain to be displayed in the hosted Multi-provider Mode.
* Leave all instances of api.paygate.to intact, don't replace it with your own domain name.
* Route your custom domain to the newly created Cloudflare worker from your Cloudflare dashboard.

# Guides
* For more information visit: https://paygate.to/affiliate-white-label/
* Technical Custom Domain Guide: https://paygate.to/white-label-api-custom-domain-guide/
