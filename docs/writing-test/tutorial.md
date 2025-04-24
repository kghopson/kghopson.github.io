# Search for dad jokes Tutorial

The **Search for dad jokes** endpoint allows you to search for dad jokes. 

In addition to defining the format of the joke, you can use parameters to specify the page to retrieve, change the number of results returned per page, or search for a joke with a specific term. 

:::info
**URL**: https://icanhazdadjoke.com/search
:::

## Prerequisites

This tutorial uses Postman for demonstration purposes. It assumes that you already have already created a Postman workspace and can create new requests.

See [Create your first workspace](https://learning.postman.com/docs/getting-started/first-steps/creating-your-first-workspace/) to learn how to set up your workspace.

## Basic Request

To start, send a basic request without using query parameters:

1. Select **+** to add a new request.
    - The default method for the new request will be **GET**.
2. In the workbench, enter the URL for the request: https://icanhazdadjoke.com/search
3. Next, select the **Headers** tab to specify the `Accept` and `User-Agent` headers.
    - In the **Key** field, enter `Accept`, then specify the response format in the **Value** field. The below example uses `application/json`. 
        <img src="https://static.wixstatic.com/media/a69ed0_e2cbb1803f764bf18498dfce870e2e02~mv2.png"/>
    - In the next **Key** field, enter `User-Agent`, then specify your contact information in the **Value** field. 
        <img src="https://static.wixstatic.com/media/a69ed0_e0adf425dc89457fa78b8d691e05ca03~mv2.png"/>
4. Select **Send** to send the request.

### Response

Since you did not specify any additional parameters, the API will return a response similar to the one below:

```
{
    "current_page": 1,
    "limit": 20,
    "next_page": 2,
    "previous_page": 1,
    "results": [
        {
            "id": "0189hNRf2g",
            "joke": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
        },
        {
            "id": "08EQZ8EQukb",
            "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
            "id": "08xHQCdx5Ed",
            "joke": "Why didn’t the skeleton cross the road? Because he had no guts."
        },
        {
            "id": "0DQKB51oGlb",
            "joke": "What did one nut say as he chased another nut?  I'm a cashew!"
        },
        {
            "id": "0DdFQZgyXnb",
            "joke": "Where do fish keep their money? In the riverbank"
        },
        {
            "id": "0DdaxAX0orc",
            "joke": "I accidentally took my cats meds last night. Don’t ask meow."
        },
        {
            "id": "0DtrrOZDlyd",
            "joke": "Chances are if you' ve seen one shopping center, you've seen a mall."
        },
        {
            "id": "0L6MexPukjb",
            "joke": "Dermatologists are always in a hurry. They spend all day making rash decisions. "
        },
        {
            "id": "0LuXvkq4Muc",
            "joke": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
        },
        {
            "id": "0gFdFBsWDd",
            "joke": "I won an argument with a weather forecaster once. His logic was cloudy..."
        },
        {
            "id": "0ga2EdN7prc",
            "joke": "How come the stadium got hot after the game? Because all of the fans left."
        },
        {
            "id": "0ga2wsPZgib",
            "joke": "\"Why do seagulls fly over the ocean?\" \"Because if they flew over the bay, we'd call them bagels.\""
        },
        {
            "id": "0oO71TSv4Ed",
            "joke": "Why was it called the dark ages? Because of all the knights. "
        },
        {
            "id": "0oz51ozk3ob",
            "joke": "A steak pun is a rare medium well done."
        },
        {
            "id": "0ozAXv4Mmjb",
            "joke": "Why did the tomato blush? Because it saw the salad dressing."
        },
        {
            "id": "0wcFBQfiGBd",
            "joke": "Did you hear the joke about the wandering nun? She was a roman catholic."
        },
        {
            "id": "189xHQ7pOuc",
            "joke": "What creature is smarter than a talking parrot? A spelling bee."
        },
        {
            "id": "18Elj3EIYvc",
            "joke": "I'll tell you what often gets over looked... garden fences."
        },
        {
            "id": "18h3wcU8xAd",
            "joke": "Why did the kid cross the playground? To get to the other slide."
        },
        {
            "id": "1DIRSfx51Dd",
            "joke": "Why do birds fly south for the winter? Because it's too far to walk."
        }
    ],
    "search_term": "",
    "status": 200,
    "total_jokes": 744,
    "total_pages": 38
}
```

## Request with Parameters

Next, send a request using the `page`, `limit`, and `term` parameters:

1. Select the **Params** tab.
2. Enter the query parameter of your choice in the **Key** field:
    - Enter `page`, then specify the page number you want to retrieve in the **Value** field. The below example uses `2` as the **Value**.
    - Enter `limit`, then specify the number of results you want to retrieve per page in the **Value** field. The below example uses `5` as the **Value**.
    - Enter `term`, then specify the word you want to locate in the dad jokes in the **Value** field. The below example uses `hipster` as the **Value**.
3. Select **Send**.

### Example Responses

#### Page
<img src="https://static.wixstatic.com/media/a69ed0_539d37e34fbe4fcfb77febcadd7ce7b3~mv2.png"/>

#### Limit
<img src="https://static.wixstatic.com/media/a69ed0_973c7550d06142f4baccb36bea7cf334~mv2.png"/>

#### Term
<img src="https://static.wixstatic.com/media/a69ed0_4186f6c1ba304f2f87156bdc9b2da4cb~mv2.png"/>


