
# Welcome to Storage Helper!

This project is a proof of concept to show how we can integrate the Dell EMC product portfolio into a voice assistant to have verbal and/or on the go access to product information and product pitches.

This project was created by Austin Stegall, Manik Trikha, Alexander Rodriguez, and Josh Macchi during our 2019 Launch internship at DellEMC. We worked under Dana Young who assigned us the project and helped us tremendously throughout the process.

# The Voice Assistant Advantage

 - It can be difficult to remember the wide variety of products that Dell Technologies offers.
	 - Using verbalization from Alexa can help any SE memorize the wide breadth of products.
- Delivering a succinct and educational product pitch is essential.
	- ‘Storage Helper’ has pitches designed to help your delivery to be succinct and educational.
- Building trust by answering difficult customer questions is a challenge in Account Warming.
	- If an SE can gain the customer’s trust, they can build a better relationship.

# Alexa Skills Kit Functionality
In this section we will give some background to the Alexa Skills Kit and then dive into how this project was created, how it can be continued and the future potential for this project.

## Alexa Process Map
![When a user specifies an utterance, the Alexa enabled device passes it onto the Developer console where the user defined app is stored, the developer console then passes it on to the back end (lambda function) to parse the response and come up with the correct output ](https://i.imgur.com/6O3aoGT.png)
When a user specifies an utterance, the Alexa enabled device passes it onto the Developer console where the user defined app is stored. The developer console then passes it on to the back end or end point (lambda function) to parse the response and come up with the correct output

![Lambda back to user](https://i.imgur.com/oXfYDBe.png)

After the Lambda function comes up with the correct response, it passes it back to the developer console. The developer console then passes it to your Alexa enabled device to output the correct response to the user using text to speech or on certain devices by showing the response.

## Alexa Developer Console

 - Provides a clean interface to help build, test, measure and launch Alexa Skills
- Allows access to Alexa Skills Kit (ASK)
	- Has an integrated library full of self-service API's, tools, and services
	- Connects to the back end or "end-point", in our case we used the provided AWS console
		- The back end utilizes the Lambda function which controls the logic to create the voice output from your Alexa enabled device
- The Developer console is where you program "what you say to the Alexa"

## AWS Lambda Function
- This contains the back-end code hosted on AWS that is able to scale automatically so that there’s no need to provision resources
- The Lambda Function is uploaded to AWS Cloud to execute code in response to an Alexa request
- This is where the logic is contained to determine "what the Alexa says back to you"

## Creating Intents and Utterances
![JSON](https://i.imgur.com/SOHhOzM.png)

In the Alexa Developer console there is a JSON editor to create intents along with their utterances. Intents, in our use case, were used to create facts about either a specific product or a pitch for the product. Intents are listened to by the fact handler, which will be explained below, and launch the handler to output the correct answer. Utterances are what a user says to the Alexa in order to launch the intent. By inputting a large number of utterances manually, the Lambda back end can use a bit of machine learning and artificial intelligence to create a list of utterances based off the ones we input in order to account for natural language. This allows people to say an utterance similar to the provided ones and still launch the intent to get their Dell EMC product fact.

## Fact Handler Function

![Index . JS](https://i.imgur.com/oUKUmtq.png)

This is the back end logic for our Alexa Skill. In our Index.js file you can see the code for our fact handler function and also the fact array.
The fact handler function listens for an intent. We created it in a way to be easily duplicated in order for new products and pitches to be added by simply copying and pasting our function and editing the values. When the fact handler function hears the specific intent it listens for, it will return an array position containing the correct output. The fact array contains data we curated through the Dell EMC product portfolio. We also curated our own product pitches, about elevator length, to show off the functionality of our project.

# Moving Forward
## Creating our own back - end
By creating a secure back end or endpoint of our own the Alexa project can contain more information that is sensitive or marked as internal use only. Our own back end would allow us to also link directly to a Dell EMC data base to pull data rather than manually curating data to put into the project. For security reasons our project only contained public information because it was hosted on the AWS back-end. A future intern group could create their own end-point which would help this project tremendously.

## Create a API port
By creating our own self service portal or API port, we could also allow SE's to add their own pitches, notes or other account warming notes to their specific Alexa enabled device. This would allow for far more functionality as each user could define what they wanted their storage helper to do for them.

## Creating a customer facing app
This project could eventually be used at customer sites to allow for them to have easy access to information that they are buying or installing. The customer facing Alexa could also contain reminders to when their support cycle is ending to remind them to look into maintenance and also put them in contact with their sales rep in order to move forward with future purchases.


