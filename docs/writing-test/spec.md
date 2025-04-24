
# icanhazdadjokes Specification

```yaml title="Search dad jokes spec"
openapi: 3.1.0
info:
  title: icanhazdadjokes API
  version: 1.0.0
  description: Fetch random dad jokes in a variety of formats
servers:
  - url: https://icanhazdadjoke.com
paths:
  /search:
    get:
      summary: Search for dad jokes
      description: Retrieve a list of random dad jokes using optional query parameters
      parameters:
        - name: page
          in: query
          description: Specifies the page of results to fetch
          required: false
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          description: Specifies the number of results to return per page
          required: false
          schema:
            type: integer
            default: 20
            maximum: 30
        - name: term
          in: query
          description: Specifies the search term to locate in a joke
          required: false
          schema:
            type: string 
            default: List all jokes
      responses:
        '200':
          description: Successful response
          content:
            application/json:
                schema:
                    type: object
                        example:
                            id: "M7wPC5wPKBd"
                            joke: "Did you hear the one about the guy with the broken hearing aid? Neither did he." 
            text/html:
                schema:
                    type: string
                        example:
                            <html>
                                <body>
                                    <h1>
                                        <p>Did you hear the one about the guy with the broken hearing aid?</p>
                                        <p>Neither did he.</p>
                                    </h1>
                                </body>
                            </html>
            text/plain:
                schema:
                    type: string
                        example: "Did you hear the one about the guy with the broken hearing aid? Neither did he."
```