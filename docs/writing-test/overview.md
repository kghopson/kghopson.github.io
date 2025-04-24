
# icanhazdadjoke Overview

The <img src="https://static.wixstatic.com/shapes/a69ed0_3b4c1dfe5eb54b0d87dace760708a00f.svg" width="25" height="25"/> `icanhazdadjoke` API is used to fetch a random dad joke, fetch a specific dad joke, or search for a dad joke. 

You can retrieve your jokes in multiple formats. 

See [About](https://icanhazdadjoke.com/about) to learn more about the API. 

## Authentication

No authentication is required. 

## Response Format

To adjust the format of the response for a specific endpoint, use the following criteria in the [**Accept**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header:

<ol>

- `text/html` -  HTML response (default response format)
- `application/json` - JSON response
- `text/plain` - Plain text response
</ol>

:::tip

Requests made via cURL that do not set an **Accept** header will respond with text/plain by default
:::

## User-Agent Header

Please set a custom [**User-Agent**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request header for all requests to the `icanhasdadjoke` API. This allows the creators to monitor usage and identify potential bad actors.

The **User-Agent** request header should include the name of the library or website that is accessing the API, along with a URL/e-mail where someone can be contacted.

```
curl -H "User-Agent: My Library (https://github.com/username/repo) Contact: email@example.com" https://icanhazdadjoke.com/
``` 