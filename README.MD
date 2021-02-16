**The blockshub.net domain is no longer associated with the owner(s) of this repository and Github organization.** Any references to it or similar domains were created before the domain expired.

# Blockshub Web Frontend

### Dev Env Setup
1. Create a file called config.json
2. Pase this into it:
```json
{
    "baseUrl": {
        "backend": "http://api-devsite.blockshub.net",
        "frontend": "http://api-devsite.blockshub.net",
        "play": "http://play-devsite.blockshub.net"
    },
    "backendAuthorization": "example-key",
    "env": "DEVELOPMENT",
    "port": 3005,
    "recaptcha": {
        "v3": {
            "public": "6Lc9VM8UAAAAAFlnULqvxYegRA9iz-DZg-SAuQRE"
        },
        "v2": {
            "public": "6LcNVc8UAAAAALqEX0uRZGnCCR7UHl53jDlYQwHY"
        }
    }
}
```
3. Run `npm install`
4. Run `npm run start:dev`
