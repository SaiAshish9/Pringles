require("dotenv").config()
'use strict';


const key_var = 'TEXT_ANALYTICS_SUBSCRIPTION_KEY';

const subscription_key = process.env[key_var];

const endpoint_var = 'TEXT_ANALYTICS_ENDPOINT';

const endpoint = process.env[endpoint_var];

let path = '/text/analytics/v2.1/sentiment';

const axios=require('axios')
const fetch=require('fetch')

console.log("Azure Sentiment Analysis Score");

let documents = {
    'documents': [
        { 'id': '5dbec999f16b1600045cf5e9', 'language': 'en',
         'text': 'I was in an abusive marriage 8 years ago. I almost lost my life on many occasions, but, I didn’t. Not because HE Spared me, but because I chose to carry on and I chose to leave. It took me 5 years, but I did it.' },
        { 'id': '5dbec9b2f16b1600045cf5ea', 'language': 'en',
        'text': 'I am struggling hard with feelings and emotions at this point, but I am firm in my step now and can see light at the end of the tunnel.' },
        { 'id': '5dbec9def16b1600045cf5eb', 'language': 'en',
        'text': 'Yesterday I took my 1st step towards freedom. After living with a psycopathic, abusive narcissist for the past 6 years, I can finally say the kids and I are FREE! We packed what we could fit into our car yesterday and left state' },
        { 'id': '5dbec9f7f16b1600045cf5ec', 'language': 'en',
        'text': 'I choose greatness.I choose life.I choose me.' },
        { 'id': '5dbeca0bf16b1600045cf5ed', 'language': 'en',
        'text': 'Made a few swans today. Wish I was as free as them.' },
        { 'id': '5dbecf3df16b1600045cf5ef', 'language': 'en',
        'text': '  Yesterday I took my 1st step towards freedom. After living with a psycopathic, abusive narcissist for the past 6 years, I can finally say the kids and I are FREE! We packed what we could fit into our car yesterday and left state. Starting over with absolutely nothing but the clothes I could pack and the car I managed to get away with, but we are finally okay now! No more hiding bruises, no more strangulation, no more biting. No more walking on eggshells everyday to avoid being beaten, just to be beaten anyways. No more death threats or being smothered. Nobody to tell me how ugly and useless I am everyday. I finally have a chance to be ME again!' },
        { 'id': '5de2ce6abb914bbd7085dbd0', 'language': 'en',
        'text': `I'm going to commit suicide`}
    ]
};

axios({
  method: 'post',
  url:'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.1/sentiment?showStats=false',
  data: JSON.stringify(documents),
  headers: {
    "Content-Type": "application/json",

      'Ocp-Apim-Subscription-Key': subscription_key,
  }
})
.then(data=>{
console.log(data.data.documents[0].score);
});
