import { asynchandler } from "../utils/asynchandler.js";
import { apiResponse } from "../utils/apiresponse.js";
import { User } from '../model/user.js';
import { Data } from "../model/data.js";
import { apiError } from "../utils/apierror.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js";
import gemini from "../utils/gemini.js";
import fs from 'fs/promises'
import {
  
  resume1template, resume2template, resume3template, resume4template, resume0template
} from "../utils/resumeTemplate.js";


const resumeTemplateMap = {
  0: resume0template,
  1: resume1template,
  2: resume2template,
  3: resume3template,
  4: resume4template
};



const getPublicIdFromUrlOfFileOfCloudinary = (url) => {
  const parts = url.split("/");
  const publicIdWithExtension = parts[parts.length - 1];
  const publicId = publicIdWithExtension.split(".")[0];
  return publicId;
};

const registerUser = asynchandler(async (req, res) => {
  console.log(req.body)
  const { email, phone, fullname, clerkid } = req.body;
  if (!email || !phone || !fullname || !clerkid) {
    res.status(400);
    throw new apiError(400, "Please provide all the fields email phone fullname clerkid");
  }

  const userald = await User.findOne({
    $or: [{ email }, { phone }, { clerkid }]
  });

  if (userald) {
userald.email = email || userald.email;
  userald.phone = phone || userald.phone;
  userald.fullname = fullname || userald.fullname;

  const updated = await userald.save();

    return res.status(205).json(new apiResponse(205, {}, "User already exists"));
  }

  const user = await User.create({
    clerkid,
    email,
    phone,
    fullname

  });

  if (!user) {
    res.status(500);
    throw new apiError(500, "User not created");
  }

  res.status(201).json(new apiResponse(201, user, "User created successfully"));
});

const updateUser = asynchandler(async (req, res) => {
  const { email, phone, fullname, clerkid } = req.body;
  if (!email || !phone || !fullname || !clerkid) {
    res.status(400);
    throw new apiError(400, "Please provide all the fields email phone fullname clerkid");
  }

  const user = await User.findOne({ clerkid });
  if (!user) {
    res.status(404);
    throw new apiError(404, "User not found");
  }

  user.email = email || user.email;
  user.phone = phone || user.phone;
  user.fullname = fullname || user.fullname;

  const updated = await user.save();
  if (!updated) {
    res.status(500);
    throw new apiError(500, "User not updated");
  }

  res.status(200).json(new apiResponse(200, updated, "User updated successfully"));
});

const getAllPdf = asynchandler(async (req, res) => {
  const { clerkid, email, phone } = req.body;

  const pdfs = await User.aggregate([
    {
      $match: { $or: [{ clerkid }, { email }, { phone }] }
    },
    {
      $lookup: {
        from: "datas",
        localField: "_id",
        foreignField: "owner",
        as: "pdfs"
      }
    },
    {
      $project: {
        email: 1,
        phone: 1,
        fullname: 1,
        pdfs: {
          pdfurl: 1
        }
      }
    }
  ]);

  if (!pdfs || pdfs.length === 0) {
    res.status(404);
    throw new apiError(404, "User not found or no resumes uploaded");
  }

  res.status(200).json(new apiResponse(200, pdfs, "User's all resumes fetched successfully"));
});


const addPdf = asynchandler(async (req, res) => {
  const { clerkid, email, phone } = req.body || {};
  console.log(``);
  

  if ((!clerkid && !email && !phone)) {
    res.status(400);
    throw new apiError(400, "Please provide all the fields clerkid email phone htmlhash");
  }

  const user = await User.findOne({ $or: [{ clerkid }, { email }, { phone }] });
  if (!user) {
    res.status(404);
    throw new apiError(404, "User not found");
  }

  const pdflocalpath = req.file?.path;
  if (!pdflocalpath) {
    res.status(400);
    throw new apiError(400, "Please provide the PDF file");
  }

  const uploaded = await uploadOnCloudinary(pdflocalpath);
  if (!uploaded?.url) {
    throw new apiError(500, "Failed to upload PDF to Cloudinary");
  }

  const pdf = await Data.create({
    owner: user._id,
   
    pdfurl: uploaded.url
  });

  if (!pdf) {
    res.status(500);
    throw new apiError(500, "Resume not saved");
  }

  res.status(201).json(new apiResponse(201, pdf, "Resume saved successfully"));
});

const deleteResume = asynchandler(async (req, res) => {
  const { email, phone, clerkid, pdfurl } = req.body;
  if (!email && !phone && !clerkid) {
    throw new apiError(400, "Credential missing: email, phone, or clerkid required");
  }

  const user = await User.findOne({ $or: [{ email }, { phone }, { clerkid }] });
  if (!user) {
    throw new apiError(400, "User does not exist");
  }

  if (!pdfurl) {
    throw new apiError(400, "Resume URL is missing for delete");
  }

  const publicId = getPublicIdFromUrlOfFileOfCloudinary(pdfurl);
  await deleteOnCloudinary(publicId);

  const deleted = await Data.deleteOne({ pdfurl });

  if (!deleted.deletedCount) {
    throw new apiError(500, "Resume not deleted");
  }

  res.status(201).json(new apiResponse(201, deleted, "Resume deleted successfully"));
});



const getHtmlOutput = asynchandler(async (req, res) => {
 const clerkid = req.body.clerkid;
 const email = req.body.email;
 const phone = req.body.phone;
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
// const scriptjsforresume = `
//  <div class="button-container">
//        <button onclick="downloadAsPDF()">Download as PDF</button>
//        <button id="edit-button" onclick="toggleEdit()">Edit</button>
//  </div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
// <script>
//   async function downloadAsPDF() {
//     const phone = '${phone}';
//     const email = '${email}';
//     const clerkid = '${clerkid}';

//     const element = document.getElementById('resume-container');

//     const canvas = await html2canvas(element, {
//       scale: 3,
//       useCORS: true,
//       allowTaint: true
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jspdf.jsPDF({
//       orientation: 'portrait',
//       unit: 'pt',
//       format: 'a4'
//     });

//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     pdf.addImage(imgData, 'jpg', 0, 0, pageWidth, pageHeight);

//     // Convert to blob
//     const pdfBlob = pdf.output('blob');

//     // Send to server
//     const formData = new FormData();
//     formData.append('pdf', pdfBlob, 'resume.pdf');
//     formData.append('email', email);
//     formData.append('phone', phone);
//     formData.append('clerkid', clerkid);

//     try {
//       const response = await fetch('http://localhost:3000/api/vivedhara/v1/dss/addresume', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         alert('Resume saved to server successfully!');
//       } else {
//         alert('Upload failed.');
//       }
//     } catch (err) {
//       console.error('Upload error:', err);
//       alert('Error occurred while uploading.');
//     }

//     // Optionally trigger local download
//     pdf.save('resume.pdf');
//   }

//   function toggleEdit() {
//     const resumeContainer = document.getElementById('resume-container');
//     const editButton = document.getElementById('edit-button');

//     if (resumeContainer.getAttribute('contenteditable') === 'false') {
//       resumeContainer.setAttribute('contenteditable', 'true');
//       editButton.textContent = 'Save';
//       resumeContainer.focus();
//     } else {
//       resumeContainer.setAttribute('contenteditable', 'false');
//       editButton.textContent = 'Edit';
//     }
//   }

//   const container = document.getElementById('resume-container');

//   container.addEventListener('beforeinput', (e) => {
//     if (e.inputType.startsWith('delete')) return;

//     const temp = document.createElement("div");
//     temp.innerHTML = container.innerHTML;

//     const range = window.getSelection().getRangeAt(0);
//     const selection = window.getSelection();

//     const tempSpan = document.createElement("span");
//     tempSpan.textContent = e.data || "\u200B";
//     range.insertNode(tempSpan);

//     const willOverflow = container.scrollHeight > container.clientHeight;

//     tempSpan.remove();

//     if (willOverflow) {
//       e.preventDefault();
//     }
//   });
// </script>

// `




  const resumetype = parseInt(req.body.resumetype)
  const userdata = req.body.userdata;
 
  
  if ((!resumetype || !userdata) && (resumetype !== 0)) {
    res.status(400);
    throw new apiError(400, "Please provide all the fields resumetype and userdata");
  }


  let resumeHtml = await gemini(resumetype, userdata);
  resumeHtml = await resumeHtml.replace('```html', '').replace('```', '').replace(/<body>/g, '').replace(/<\/body>/g, '').trim();
  resumeHtml = `
    <body>
${resumeHtml}

${scriptjsforresume}
</body>
    `
  // console.log("resume html");
  // console.log(resumeHtml);
  let wholehtml = await resumeTemplateMap[resumetype](resumeHtml)
  // console.log(resumeHtml);
  console.log(wholehtml)
  // wholehtml = wholehtml.replace('```html', '').replace('```', '');


  //  await fs.writeFile('./deltedee.html',wholehtml,(err) => {
  //    console.log(err)
  //  }
  //  )


  res.status(200).json(new apiResponse(200, wholehtml, "Resume HTML generated successfully"));
}
)

const uploadimage = asynchandler(async (req, res) => {
  const imagefile = req.file?.path
  const uploaded = await uploadOnCloudinary(imagefile);
  if (!uploaded?.url) {
    throw new apiError(500, "Failed to upload image to Cloudinary");
  }
  res.status(201).json(new apiResponse(201, uploaded.url, "Image uploaded successfully"));

}
)

export { registerUser, updateUser, getAllPdf, addPdf, deleteResume, getHtmlOutput, uploadimage };
