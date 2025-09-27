import { Groq } from 'groq-sdk';

export const groq = new Groq({
    apiKey : process.env.LLM_API_KEY
});


