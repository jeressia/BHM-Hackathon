import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log(req)
  console.log('api success')
  // res.status(200).json({ 'result': 'moneybot talked back' });
  res.status(200);
}

/*
export default async function (req, res) {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      });
      return;
    }
  
    const userProfile = req.body.userProfile || '';
    if (userProfile.firstName.trim().length === 0) {
      res.status(400).json({
        error: {
          message: "Please enter a valid first name",
        }
      });
      return;
    }
  
    try {

        //check if request is from quiz. switch control for 
        //prompt function (?)

     /*
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generateGoals(userProfile),
        temperature: 0.6,
      });
      res.status(200).json({ result: completion.data.choices[0].text });
    } catch(error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    }
}
*/

function generateGoals(userProfile) {
    // Replace with descriptive paragraph of user and ask about some beginner goals
    // Also ask to list steps in array format
    let userprompt = `
    I'm looking to better my financial situation. I was born on ${userProfile.dateOfBirth} and live in the United States state abbreviated ${userProfile.state}. 
    My current credit score is ${userProfile.creditScore}. I have saved $${moneySaved} and have debts totaling $${moneyOwed}.
    Suggest three goals in array format that will help me ${userProfile.keyMotivationId}.
    `
    return userprompt;
}

function amaBot(userQuestion) {
    // Replace with descriptive paragraph of user and ask about some beginner goals
    // Also ask to list steps in array format
    let userprompt = `
    I'm looking to better my financial situation. I was born on ${userProfile.dateOfBirth} and live in the United States state abbreviated ${userProfile.state}. 
    My current credit score is ${userProfile.creditScore}. I have saved $${moneySaved} and have debts totaling $${moneyOwed}.
    Suggest three goals in array format that will help me ${userProfile.keyMotivationId}.
    `
    return userprompt;
}