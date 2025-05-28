import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../css/getdetails.css';
import { useNavigate } from 'react-router-dom';

const GetDetails = () => {
  const location = useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();

  const allOptions = [
    'Education',
    'Projects',
    'Experience',
    'Internship',
    'Scholastic Achievement',
    'Position of Responsibility',
    'Technical Skills',
    'Hobbies'
  ];

  const [sections, setSections] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(allOptions);
  const [sectionInputs, setSectionInputs] = useState({});
  const [language, setLanguage] = useState('');
  const [customLanguage, setCustomLanguage] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    mobile: '',
    linkedin: '',
    github: '',
    role: '',
    language: '',
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleGetResume = () => {
    const finalData = {};

    // Include role if provided
    if (personalInfo.role?.trim()) {
      finalData.role = personalInfo.role.trim();
    }

    // Clean and include personal info
    const { role, ...restPersonalInfo } = personalInfo;
    const cleanedPersonalInfo = {};
    for (let key in restPersonalInfo) {
      if (restPersonalInfo[key]?.trim()) {
        cleanedPersonalInfo[key] = restPersonalInfo[key].trim();
      }
    }
    if (Object.keys(cleanedPersonalInfo).length > 0) {
      finalData.personalInfo = cleanedPersonalInfo;
    }

    // Define sections for each resume type
    const resumeSections = {
      custom: sections,
      resume1: ['Scholastic Achievement', 'Key Projects', 'technical skills'],
      resume2: ['Profile', 'Address Details', 'Education', 'References', 'Skills', 'Employment History'],
      resume3: ['Profile', 'Address Details', 'Education', 'References', 'Skills', 'Employment History'],
      resume4: ['Profile', 'Education', 'References', 'Skills', 'Employment History']
    };

    // Get the sections for the current resume type
    const currentSections = resumeSections[from] || [];

    // Process each section
    currentSections.forEach(section => {
      const inputs = sectionInputs[section] || [''];
      if (Array.isArray(inputs)) {
        const cleanedInputs = inputs.filter(val => val?.trim());
        if (cleanedInputs.length > 0) {
          const sectionKey = section.toLowerCase().replace(/\s+/g, '');
          const formattedInputs = {};
          cleanedInputs.forEach((val, idx) => {
            formattedInputs[`${sectionKey}${idx + 1}`] = val;
          });
          finalData[sectionKey] = formattedInputs;
        }
      }

    });

    // Include profile image if provided
    if (profileImage?.trim()) {
      finalData.profileImage = profileImage.trim();
    }

    // Set resume type
    finalData.resumetype = from === 'custom' ? 0 : from[from.length - 1];
console.log(finalData)
    // Navigate and pass state
    navigate('/resume', { state: finalData });
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setProfileImage(URL.createObjectURL(file));
  //   }
  // };
const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file); // 👈 Make sure backend expects `image` field

  try {
    const res = await fetch("http://localhost:3000/api/vivedhara/v1/dss/uploadimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.data) {
      setProfileImage(data.data); // ✅ URL returned by your backend
      console.log(data.data)
      
    } else {
      console.error("Upload failed", data);
    }
  } catch (err) {
    console.error("Error uploading image", err);
  }

  
};



  const handleSelect = (e) => {
    const selected = e.target.value;
    if (!selected) return;

    setSections(prev => [...prev, selected]);
    setAvailableOptions(prev => prev.filter(item => item !== selected));
    e.target.value = '';
  };

  const handleDeleteSection = (section) => {
    setSections(prev => prev.filter(s => s !== section));
    setAvailableOptions(prev => [...prev, section]);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    if (name === 'language') {
      if (value === 'Custom') {
        setIsCustom(true);
        setPersonalInfo(prev => ({ ...prev, language: '' }));
      } else {
        setIsCustom(false);
        setPersonalInfo(prev => ({ ...prev, language: value }));
      }
    } else if (name === 'customLanguage') {
      setPersonalInfo(prev => ({ ...prev, language: value }));
    } else {
      setPersonalInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const addMoreGeneric = (section) => {
    setSectionInputs(prev => ({
      ...prev,
      [section]: [...(prev[section] || ['']), '']
    }));
  };

  const updateGenericInput = (section, index, value) => {
    const updated = [...(sectionInputs[section] || [''])];
    updated[index] = value;
    setSectionInputs(prev => ({ ...prev, [section]: updated }));
  };

  const renderInputSection = (section) => {
    const inputs = sectionInputs[section] || [''];
    const lower = section.toLowerCase();

    const labelMap = {
      'projects': 'Project',
      'experience': 'Experience',
      'internship': 'Internship',
      'scholastic achievement': 'Achievement',
      'position of responsibility': 'Responsibility',
      'technical skills': 'Skill',
      'hobbies': 'Hobby',
      'education': 'Education',
      'profile': 'Profile',
      'address details': 'Address',
      'references': 'Reference',
      'employment history': 'Employment'
    };

    const label = labelMap[lower] || section;

    const showAddButton =
      from !== 'resume2' || section === 'Employment History' || section === 'Skills';

    const inputWrapperClass = `input-wrapper${
      from === 'resume2' && !showAddButton ? ' row-wrap' : ''
    }`;

    return (
      <div key={section} className="section-block">
        <div className="section-header">
          <h3>{section}</h3>
          {from === 'custom' && (
            <button className="delete-btn" onClick={() => handleDeleteSection(section)}>❌</button>
          )}
        </div>
        <div className={inputWrapperClass}>
          {inputs.map((val, index) => (
            <div key={index} className="input-group">
              <textarea
                rows={5}
                cols={50}
                value={val}
                placeholder={`${label} ${index + 1}`}
                onChange={(e) => updateGenericInput(section, index, e.target.value)}
              />
            </div>
          ))}
          {showAddButton && (
            <button className="add-btn" onClick={() => addMoreGeneric(section)}>
              Add More {label}
            </button>
          )}
        </div>
      </div>
    );
  };

  let content;
  if (from === 'custom') {
    content = (
      <div className="resume-builder">
        <h1>Custom Resume</h1>
        <div className="input-group">
          <label className='role' htmlFor="role">Role :</label>
          <input type="text" id="role" name="role" placeholder="Enter your role" value={personalInfo.role} onChange={handlePersonalInfoChange} />
        </div>
        <div className="section-block">
          <div className="section-header">
            <h3>Personal Details</h3>
          </div>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
            <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={personalInfo.mobile} onChange={handlePersonalInfoChange} />
            <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
            <input type="text" name="github" placeholder="GitHub Profile URL" value={personalInfo.github} onChange={handlePersonalInfoChange} />
          </div>
        </div>
        <div className="sections-container">
          {sections.map(renderInputSection)}
        </div>
        {availableOptions.length > 0 && (
          <div className="dropdown-wrapper">
            <select className="dropdown" defaultValue="" onChange={handleSelect}>
              <option disabled value="">Add heading</option>
              {availableOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
        <button className="get-resume" onClick={handleGetResume}>
          Get Resume
        </button>
      </div>
    );
  } else if (from === 'resume1') {
    content = (
      <div className="resume-builder">
        <div className="section-block">
          <div className="section-header">
            <h3>Personal Details</h3>
          </div>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
            <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={personalInfo.mobile} onChange={handlePersonalInfoChange} />
            <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
            <input type="text" name="github" placeholder="GitHub Profile URL" value={personalInfo.github} onChange={handlePersonalInfoChange} />
          </div>
        </div>
        <div>
          {renderInputSection('Scholastic Achievement')}
        </div>
        <div>
          {renderInputSection('Key Projects')}
        </div>
        <div>
          {renderInputSection('technical skills')}
        </div>
        <button className="get-resume" onClick={handleGetResume}>Get Resume</button>
      </div>
    );
  } else if (from === 'resume2') {
    content = (
      <div className="resume-builder">
        <div className="section-block">
          <div className="section-header">
            <h3>Personal Details</h3>
          </div>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
            <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={personalInfo.mobile} onChange={handlePersonalInfoChange} />
            <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
            <input type="text" name="github" placeholder="GitHub Profile URL" value={personalInfo.github} onChange={handlePersonalInfoChange} />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
        <div className="two-column-row">
          {['Profile', 'Address Details', 'Education', 'References'].map(renderInputSection)}
        </div>
        <div>
          {renderInputSection('Skills')}
        </div>
        <div>
          {renderInputSection('Employment History')}
        </div>
        <button className="get-resume" onClick={handleGetResume}>Get Resume</button>
      </div>
    );
  } else if (from === 'resume3') {
    content = (
      <div className="resume-builder">
        <div className="section-block">
          <div className="section-header">
            <h3>Personal Details</h3>
          </div>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
            <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={personalInfo.mobile} onChange={handlePersonalInfoChange} />
            <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
            <input type="text" name="github" placeholder="GitHub Profile URL" value={personalInfo.github} onChange={handlePersonalInfoChange} />
             
            
            
            <select
              name="language"
              value={isCustom ? "Custom" : personalInfo.language}
              onChange={handlePersonalInfoChange}
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Marathi">Marathi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Bengali">Bengali</option>
              
              
              <option value="Gujarati">Gujarati</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Kannada">Kannada</option>
              <option value="Urdu">Urdu</option>
              <option value="Custom">Custom</option>
            </select>
            {isCustom && (
              <input
                type="text"
                name="customLanguage"
                placeholder="Enter your language"
                value={personalInfo.language}
                onChange={handlePersonalInfoChange}
              />
            )}
          </div>
        </div>
        <div className="two-column-row">
          {['Profile', 'Address Details', 'Education', 'References'].map(renderInputSection)}
        </div>
        <div>
          {renderInputSection('Skills')}
        </div>
        <div>
          {renderInputSection('Employment History')}
        </div>
        <button className="get-resume" onClick={handleGetResume}>Get Resume</button>
      </div>
    );
  } else if (from === 'resume4') {
    content = (
      <div className="resume-builder">
        <div className="section-block">
          <div className="section-header">
            <h3>Personal Details</h3>
          </div>
          <div className="input-wrapper">
            <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
            <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={personalInfo.mobile} onChange={handlePersonalInfoChange} />
            <input type="text" name="linkedin" placeholder="LinkedIn Profile URL" value={personalInfo.linkedin} onChange={handlePersonalInfoChange} />
            <input type="text" name="github" placeholder="GitHub Profile URL" value={personalInfo.github} onChange={handlePersonalInfoChange} />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
        <div className="two-column-row">
          {['Profile', 'Education', 'References'].map(renderInputSection)}
        </div>
        <div>
          {renderInputSection('Skills')}
        </div>
        <div>
          {renderInputSection('Employment History')}
        </div>
        <button className="get-resume" onClick={handleGetResume}>Get Resume</button>
      </div>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

export default GetDetails;