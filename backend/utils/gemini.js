import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import {
    resume1Html, resume2Html, resume3Html, resume4Html
   
} from "./resumeTemplate.js";
import { json } from "stream/consumers";

const resumeHtmlMap = {
  
    1: resume1Html,
    2: resume2Html,
    3: resume3Html,
    4: resume4Html
};

const geminiapikey=process.env.geminiapikey

const scriptjsforresume = `
<div class="button-container">
      <button onclick="downloadAsPDF()">Download as PDF</button>
      <button id="edit-button" onclick="toggleEdit()">Edit</button>
    </div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script> 
    async function downloadAsPDF() {
        const element = document.getElementById('resume-container');

        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
          allowTaint: true
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF({
          orientation: 'portrait',
          unit: 'pt',
          format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'jpg', 0, 0, pageWidth, pageHeight);
        pdf.save('resume.pdf');
      }

      function toggleEdit() {
        const resumeContainer = document.getElementById('resume-container');
        const editButton = document.getElementById('edit-button');
        
        if (resumeContainer.getAttribute('contenteditable') === 'false') {
          resumeContainer.setAttribute('contenteditable', 'true');
          editButton.textContent = 'Save';
          resumeContainer.focus();
        } else {
          resumeContainer.setAttribute('contenteditable', 'false');
          editButton.textContent = 'Edit';
        }
      }

      const container = document.getElementById('resume-container');

      container.addEventListener('beforeinput', (e) => {
        // Allow deletions
        if (e.inputType.startsWith('delete')) return;

        // Temporarily insert input to simulate result
        const temp = document.createElement("div");
        temp.innerHTML = container.innerHTML;

        const range = window.getSelection().getRangeAt(0);
        const selection = window.getSelection();

        const tempSpan = document.createElement("span");
        tempSpan.textContent = e.data || "\u200B"; // use Zero-width space if key is undefined
        range.insertNode(tempSpan);

        const willOverflow = container.scrollHeight > container.clientHeight;

        tempSpan.remove(); // cleanup

        if (willOverflow) {
          e.preventDefault(); // Block new input
        }
      });
      </script>
  `

const ai = new GoogleGenAI({ apiKey: geminiapikey });








async function gemini(htmltype,userdata) {
  console.log("userdata in gemini function");
  console.log(userdata);
  let muserdata=await JSON.stringify(userdata)?JSON.stringify(userdata):userdata
  
  
   
 const htmlformate=resumeHtmlMap[htmltype]


 const content =htmltype==0?
 `
you are a resume builder and now you have to resume of a user who provide you his/her data which are following
${muserdata} , make resume in a4 size and write its code in html css and make sure the page should look a4 and seprated from bakcground
in response you have to give only html css code in one file dont give any explanation suggestion etc just html and css code no any prefix and suffix so that i can just preview in browser. dont make unnecessary heaing like resume or cv on top of the page with some background color dont do that
you have to make a good resume for user on teh basis of data provided by user and you can update or refine the project description in bullets points
generally name phone email are on top not inside or bottom of resume,
additional thing 
1. make a4 page with id=resume-container div and add following thing inside body but at the end outside the a4 page
${scriptjsforresume}
make resume and edit button in display flex row direction align item and content center.
 
 ` :
 `
You are a resume builder. Use only the provided user data below to generate a resume in the given HTML format.

User Data: ${JSON.stringify(muserdata)}

HTML Format: ${htmlformate}

Instructions:
- Do not use any previous/default data; only use what is available in the provided user data.
- If any section is missing (e.g., skills, projects), skip or create minimal relevant headings using available info (e.g., if the user knows "C++", you can create "Programming Languages" under "Technical Skills").
- DO NOT modify any HTML tags, class names, or structure in the provided HTML format.
- Only fill in the content part with refined data from the user input.
- Keep the final output suitable for a one-page A4 resume — adjust length and wordiness accordingly.
- Do not add any CSS, JavaScript, or extra wrappers — I already have styling and scripts.
- Final output must be the complete modified HTML code only — no explanations or markdown formatting and only all the main parent tag should be body tag.
- given output <boyd></body> nothing should be outside of body such that i can integrate in html file directely
`;


console.log(content);

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: content,
  });
  




  // console.log(response.text);
  return response.text;
}


















// const content1=`Hey, make a resume for me using the following user data:
// ${userdata}

// Refine and structure the content properly. Then insert it into the following HTML format:
// ${resumeHtml}

// ✅ Important Instructions:

// Do not change any tag names, class names, or the overall HTML structure in ${resumeHtml}.

// Just insert the user data into the relevant parts of the HTML.

// If a particular heading is missing in the user data, create appropriate section headings yourself.

// For example, if the user says "I know C++ and Python," then you can create a heading like "Programming Languages" under Technical Skills.

// DO NOT include or add any CSS or JS code — I already have that.

// Your final output should be only the complete HTML code with the user data filled in — no explanations or extra text.`
export default gemini;







