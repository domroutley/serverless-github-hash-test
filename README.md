# Serverless Node example

*Serverless launched Lambda functions that are protected by IAM.*

## Explanation of this line.
```yml
- "arn:aws:execute-api:${self:provider.region}:*:*/${self:provider.stage}/POST/*"
```
The arn is split into 4 sections.
- `arn:aws:execute-api` This is what you are doing, in this case executing (invoking) the API. This probably will not change.
- `${self:provider.region}` This is the region that your API is located in, here I have parameterised it to be the same as the region defined in the `provider` block.
- `*` This is a wildcard (der) in the section of the APIs name, as I am not using and pre-defined API names in this repo, this has been left as a wildcard.
- `*/${self:provider.stage}/POST/*` This is the location of the FUnction at the API endpoint. We use wildcards here to allow any functions, or you can specify functions by name for a even more secure policy. This locks the requests to only the same stage as is defined in the `provider` block, and only allows `POST` requests to be made.

In the end this policy **only** allows POST requests made to the same region and the same stage as the calling function.


## Explanation of this block.
```yml
environment:
  SELF_ENDPOINT:
    Fn::Join:
      - ""
      - - "https://"
        - Ref: "ApiGatewayRestApi"
        - ".execute-api.${self:provider.region}.amazonaws.com/${self:provider.stage}/"
```
- `environment:` What are we defining, in this case environment variables
- `SELF_ENDPOINT:` The name of the environment variable that Lambda functions will be able to access
- `FN::Join` Using CloudFormation information
- The rest is what we are pulling from CloudFormation, we are pulling in this case the unique `ApiGatewayRestApi` so that it can be accessed from the Lambda functions.

For more information on this block look at [this page wot I found](http://www.goingserverless.com/blog/api-gateway-url).
