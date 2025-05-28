import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
const geminiapikey=process.env.geminiapikey

const ai = new GoogleGenAI({ apiKey: geminiapikey });


const content={
  name:"vivekant kumar",
  mobile:"1234567890",
  email:"dhara1234@gmail.com"
}
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "write dhara in capital letters",
  });
  console.log(response.text);
}

await main();