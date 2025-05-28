const resume1Html = `<body>
     

    <div class="container " id="resume-container" contenteditable="false">

       <h1 style="margin: 0px auto; width: max-content;">David Warner</h1>
       <ul class="info1">
        <li><img width="18" style="margin-top: -0.5px; margin-right: 5px;" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt=""> David4563@gmail.com</li>
        <li><img width="20" style="margin-top: -0.5px; margin-right: 5px;" src="https://cdn-icons-png.flaticon.com/128/3059/3059446.png" alt=""> 6746376783</li>
        <li style="gap:5px;"><img width="21" style="margin-top: -0.5px;" src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt=""> <a href="google.com">Github</a></li>
        <li style="gap: 5px;"> <img width="24" style="margin-top: -1px;" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt=""><a href="linkedin.co">Linkedin</a></li>
            
        </ul>

       <!-- SCHOLASTIC ACHIEVEMENT -->
<div class="mainheading ">
  <div class="linechange">
    <div class="heading">SCHOLASTIC ACHIEVEMENT</div>
    <div class="line"></div>
  </div>
  <ul class="subheading1">
    <li>
      <div class="flex">
        <div>Secured AIR <b>1</b> in JEE ADVANCED among 160,000+ candidates with top percentile in Physics & Maths.</div>
        <div class="date date1">[2022]</div>
      </div>
    </li>
    <li>
      <div class="flex">
        <div>Achieved 99.99 percentile in JEE MAINS among 1.1 million applicants with 100/100 in Mathematics.</div>
        <div class="date date1">[2022]</div>
      </div>
    </li>
    <li>
      <div class="flex">
        <div>Ranked among top 1% in KVPY SA Stream and selected for fellowship at IISc Bangalore in science research track.</div>
        <div class="date date1">[2021]</div>
      </div>
    </li>
    <li>
      <div class="flex">
        <div>Secured 97.8% in CBSE Class 12 boards with 100 in Physics and 99 in Computer Science at Sardar Patel School.</div>
        <div class="date date1">[2021]</div>
      </div>
    </li>
    <li>
      <div class="flex">
        <div>Scored 98.4% in ICSE Class 10 boards, topping the batch with national distinction in Science and Math.</div>
        <div class="date date1">[2019]</div>
      </div>
    </li>
  </ul>
</div>

<!-- KEY PROJECTS -->
<div class="mainheading">
  <div class="linechange">
    <div class="heading">KEY PROJECTS</div>
    <div class="line"></div>
  </div>

  <!-- Emotion Recognition -->
  <div class="subheading2">
    <div class="flex">
      <div class="flex2">
        <div class="subheading21 bold">Facial Emotion Recognition using Deep CNN</div>
        <div class="guid">Python | TensorFlow | OpenCV | Self</div>
      </div>
      <div class="date">[Feb 2025]</div>
    </div>
    <ul class="subheading1">
      <li>Built a convolutional neural network trained on FER2013 dataset to classify facial expressions into 7 emotions.</li>
      <li>Integrated OpenCV for real-time webcam input, using face detection and preprocessing pipeline with Haar cascades.</li>
      <li>Achieved 85%+ validation accuracy using regularization, batch norm, and data augmentation techniques.</li>
    </ul>
  </div>

  <!-- Algo Trading App -->
  <div class="subheading2">
    <div class="flex">
      <div class="flex2">
        <div class="subheading21 bold">Full-Stack Algo Trading Paper App</div>
        <div class="guid">React | Express | MongoDB | SmartAPI | Node.js</div>
      </div>
      <div class="date">[Jan 2025]</div>
    </div>
    <ul class="subheading1">
      <li>Developed full authentication system with JWT, refresh tokens, route protection, and user profile features.</li>
      <li>Fetched OHLC data from SmartAPI for index options, implemented logic for paper trades and P&L visualization.</li>
      <li>UI includes real-time watchlist, trade execution panel, strategy backtest logs, and Cloudinary integration.</li>
    </ul>
  </div>

  <!-- Spotify Clone -->
  <div class="subheading2">
    <div class="flex">
      <div class="flex2">
        <div class="subheading21 bold">MusicStream – Spotify Clone with JS</div>
        <div class="guid">HTML | CSS | JavaScript | Self</div>
      </div>
      <div class="date">[June 2024]</div>
    </div>
    <ul class="subheading1">
      <li>Built interactive frontend player with audio controls, seek bar, volume slider, and auto-play playlist system.</li>
      <li>Designed album and song folder parser using metadata inference to auto-organize music like Spotify UI.</li>
      <li>Responsive design with dark/light mode toggle, animations, and dynamic playlist generation from folder structure.</li>
    </ul>
  </div>

  <!-- PCR Tool -->
  <div class="subheading2">
    <div class="flex">
      <div class="flex2">
        <div class="subheading21 bold">Live Option Chain Sentiment (PCR Tool)</div>
        <div class="guid">Python | Pandas | Matplotlib | NSELib</div>
      </div>
      <div class="date">[May 2024]</div>
    </div>
    <ul class="subheading1">
      <li>Scraped live NSE option chain, calculated PCR for Nifty/BankNifty, and visualized changing sentiment zones.</li>
      <li>Added moving average and divergence detection with dynamic annotations to help decode intraday reversals.</li>
      <li>Extended tool to include OI change graphs and cumulative PCR heatmaps for enhanced trader insight.</li>
    </ul>
  </div>

  <!-- Arduino Density -->
  <div class="subheading2">
    <div class="flex">
      <div class="subheading21 bold">Smart Density Estimator via Arduino Sensors</div>
      <div class="date">[Aug – Nov 2023]</div>
    </div>
    <div class="guid">Guide: Prof. Mehta, Prof. Deshpande – MM221 | IIT Bombay | Team of 3</div>
    <ul class="subheading1">
      <li>Used load cells, servo motors, and buoyancy to auto-calculate density with precision using Arduino Uno.</li>
      <li>Programmed LCD display + serial monitor output for live weight and volume readouts with calibration support.</li>
    </ul>
  </div>

  <!-- Health Dashboard -->
  <div class="subheading2">
    <div class="flex">
      <div class="flex2">
        <div class="subheading21 bold">National Health Metrics Dashboard</div>
        <div class="guid">Tableau | Python | Pandas | Team Project</div>
      </div>
      <div class="date">[Nov 2024]</div>
    </div>
    <ul class="subheading1">
      <li>Processed NFHS/NSSO datasets with over 5 lakh rows to build interactive dashboards showing health inequality.</li>
      <li>Plotted state-wise comparisons of malnutrition, immunization rates, and expenditure using Tableau Public.</li>
    </ul>
  </div>
</div>

<!-- TECHNICAL SKILLS -->
<div class="mainheading">
  <div class="linechange">
    <div class="heading">TECHNICAL SKILLS</div>
    <div class="line"></div>
  </div>
  <div class="content subheading2">
    <div>
      <div class="subheading21 bold">Languages:</div>
      <div>C++ | Python | JavaScript | TypeScript | SQL | Bash | HTML5 | CSS3</div>
    </div>

    <div>
      <div class="subheading21 bold">Python Libraries:</div>
      <div>Numpy | Pandas | Matplotlib | Seaborn | Scikit-learn | TensorFlow | OpenCV | NSELib | Requests</div>
    </div>

    <div>
      <div class="subheading21 bold">Web Development:</div>
      <div>React | Express.js | Node.js | MongoDB | Zustand | Vite | Mongoose | Axios | Tailwind CSS | Chart.js</div>
    </div>

    <div>
      <div class="subheading21 bold">Tools & Platforms:</div>
      <div>Git | GitHub | Postman | VSCode | Jupyter | Anaconda | Google Colab | Netlify | Railway | Render | Figma</div>
    </div>

    <div>
      <div class="subheading21 bold">Cloud & DevOps:</div>
      <div>Cloudinary | Firebase | Realtime DB | MongoDB Atlas | GitHub Actions | Railway CI</div>
    </div>

    <div>
      <div class="subheading21 bold">Databases:</div>
      <div>MongoDB | MySQL | Firebase Realtime DB | IndexedDB (browser)</div>
    </div>
  </div>
</div>
    </div>

</body>`

const resume2Html = `<body>
  <div class="container" id="resume-container" contenteditable="false" >
    <div class="header">
      <img src="https://res.cloudinary.com/vivedhara/image/upload/v1748263635/rqccp1dei5eqlvavqlo5.jpg" alt="Profile" class="profile-pic" />
      <div class="name">Sophie Wright</div>
      <div class="position">Manager &nbsp;|&nbsp; White Plains, NY 10605, United States &nbsp;|&nbsp; 📧 sophie.wright@gmail.com &nbsp;|&nbsp; 📞 (914) 804-6157</div>
    </div>

    <div class="content">
      <div class="left">
        <div class="contact">
          <h3>Details</h3>
          <p>102 Smith Ave<br />White Plains, NY 10605<br />United States</p>
        </div>

        <div class="skills">
          <h3>Skills</h3>
          <div class="skill-badge">General Management</div><br />
          <div class="skill-badge">Problem Solving Skills</div><br />
          <div class="skill-badge">Business Development Strategies</div><br />
          <div class="skill-badge">Interpersonal Communication Skills</div><br />
          <div class="skill-badge">Time Management Skills</div><br />
          <div class="skill-badge">Multitasking Skills</div>
        </div>
      </div>

      <div class="right">
        <div class="section">
          <h2>Profile</h2>
          <p class="job-description">
            Experienced and self-motivated Manager bringing forth valuable industry experience and a passion for management. Results oriented with a proven track record of working collaboratively with team members to achieve goals. Experienced in both retail and culinary settings, and adept at effectively managing all operations.
          </p>
        </div>

        <div class="section">
          <h2>Employment History</h2>

          <div>
            <div class="job-title">General Manager at H&M, White Plains</div>
            <div class="job-date">September 2014 – September 2019</div>
            <ul class="job-description">
              <li>Served as a successful leader, promoting and achieving store success.</li>
              <li>Encouraged employees to do their best, and increased store productivity immensely.</li>
              <li>Identified and maximized sales opportunities, and increased customer retention rates.</li>
              <li>Successfully handled visual merchandising, and worked to promote company image.</li>
              <li>Led recruitment efforts and training of new employees.</li>
            </ul>
          </div>

          <div>
            <div class="job-title">Assistant Store Manager at H&M, White Plains</div>
            <div class="job-date">September 2012 – September 2014</div>
            <ul class="job-description">
              <li>Provided optimal assistance to the General Manager and handled a variety of tasks.</li>
              <li>Assisted with recruitment and training of new employees, while also monitoring the work of current employees.</li>
              <li>Worked to foster a neat and attractive sales environment, and assisted in the setup of visual displays.</li>
              <li>Handled all logistics and the organization of employee files.</li>
              <li>Assisted with payroll and distributed paychecks to employees.</li>
            </ul>
          </div>

          <div>
            <div class="job-title">Sales Associate at the Guided Lynx</div>
            <div class="job-date">May 2009 – August 2012</div>
            <ul class="job-description">
              <li>Served as an enthusiastic and knowledgeable Sales Associate in this high end jewelry boutique.</li>
              <li>Remained informed and up to date on the current stock and offerings.</li>
              <li>Answered all customer queries with friendliness and expertise.</li>
              <li>Worked to provide optimal browsing and buying experiences for all visitors and customers.</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2>Education</h2>
          <div class="education-item">
            Associate of Communications, Purchase College, Purchase<br />
            August 2001 – May 2005
          </div>
          <div class="education-item">
            High School Diploma, White Plains High School, White Plains<br />
            May 1997 – September 2001
          </div>
        </div>

        <div class="section">
          <h2>References</h2>
          <p class="job-description">Available upon request.</p>
        </div>
      </div>
    </div>
  </div>

 
</body>`

const resume3Html = `<body>
  <div class="page" id="resume-container" contenteditable="true">

    <div class="header">
      <h1>Tim Stewart, Accountant</h1>
      <p>80 Gold Street, New York, NY 10038, United States, (917) 407-2179, tim.stewart@gmail.com</p>
    </div>

    <div class="section-title">PROFILE</div>
    <p>
      Certified Accountant with five years of experience in account reconciliations, streamlining accounts, and financial planning.
      Highly motivated professional with a proven track record of delivering accurate reports and high-quality service.
      Possess a comprehensive understanding of all aspects of accounting and financial planning.
      A dedicated leader with the ability to lead effective teams in attaining profit improvement.
    </p>

    <div class="section-title">EMPLOYMENT HISTORY</div>

    <div class="subsection">
      <div class="job-title">Staff Accountant, Dubone Partnership</div>
      <div class="location-date">
        <span>New York</span>
        <span>Nov 2013 – Sep 2019</span>
      </div>
      <ul>
        <li>Managed accounts by analyzing costs and revenues.</li>
        <li>Projected future trends based on analysis work.</li>
        <li>Managed complex expense reporting.</li>
        <li>Developed strategies for minimizing tax liability.</li>
        <li>Worked closely with auditors during all audit processes.</li>
        <li>Performed financial risk assessments for all future business projects.</li>
        <li>Organized sales and profit reports.</li>
        <li>Prepared, reviewed, and submitted crucial budget plans for company goals.</li>
      </ul>
    </div>

    <div class="subsection">
      <div class="job-title">Huntington Associates</div>
      <div class="location-date">
        <span>Philadelphia</span>
        <span>Jul 2010 – Jul 2013</span>
      </div>
      <ul>
        <li>Oversaw the management of all company accounts.</li>
        <li>Processed staff payroll and other main aspects of financial transactions.</li>
        <li>Managed accounting teams and ensured all accounting records were complete and accurate.</li>
        <li>Explained financial matters to people outside the finance department in a comprehensive way.</li>
        <li>Remained professional and discreet when handling sensitive or private financial matters.</li>
        <li>Worked closely with junior staff members while aiding them in the progression of their careers.</li>
      </ul>
    </div>

    <div class="section-title">EDUCATION</div>

    <div class="subsection">
      <div class="job-title">Master of Accountancy, St. Joseph’s College</div>
      <div class="location-date">
        <span>New York</span>
        <span>Jul 2009 – Jul 2013</span>
      </div>
      <ul>
        <li>Graduated with High Honors.</li>
      </ul>
    </div>

    <div class="subsection">
      <div class="job-title">Bachelor of Finance, University of Pennsylvania</div>
      <div class="location-date">
        <span>Philadelphia</span>
        <span>Sep 2006 – May 2010</span>
      </div>
      <ul>
        <li>Graduate <i>summa cum laude</i>.</li>
        <li>President of Student Counsel.</li>
      </ul>
    </div>

    <div class="section-title">SKILLS</div>
    <div class="skills">
      <div>Financial Reporting<br><strong>Expert</strong></div>
      <div>Advanced Technological Skills<br><strong>Expert</strong></div>
      <div>Budgeting & Forecasting<br><strong>Expert</strong></div>
      <div>Effective Time Management<br><strong>Expert</strong></div>
      <div>Interpersonal Skills<br><strong>Expert</strong></div>
    </div>

    <div class="section-title">REFERENCES</div>
    <div class="references">
      <p><strong>LeAnne Gaines</strong> from Dubone Partnership<br>lgaines@dbp.com • 917-988-1212</p>
      <p><strong>Jeffrey Ringer</strong> from Huntington Associates<br>jringer@huntingtonpa.com • 267-348-9353</p>
      <p><strong>Liam Olsen</strong> from Huntington Associates<br>lolsen@huntingtonpa.com • 913-278-8787</p>
    </div>

  </div>

  
</body>`

const resume4Html = `<body>

  <div class="wrapper" id="resume-container" contenteditable="false">
    <!-- Header -->
    <div class="header">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Matthew Jones">
      <div class="header-text">
        <h1>Matthew Jones</h1>
        <h2>Financial Analyst</h2>
      </div>
    </div>

    <div class="main-content">
      <!-- Left Main Content -->
      <div class="left-section">
        <div class="section">
          <h3>Profile</h3>
          <p>
            Experienced and driven Financial Analyst with an impressive background of managing multi-million dollar budgets while providing analysis and account support within product development departments. Worked to reduce business expenses and develop logical and advantageous operating plan budgets. Experience creating quarterly accruals based on trends and forecasted expenses.
          </p>
        </div>

        <div class="section">
          <h3>Employment History</h3>

          <div class="job">
            <div class="title">Financial Analyst at GEO Corp., New York</div>
            <div class="date">October 2012 — September 2019</div>
            <ul>
              <li>Created budgets and ensured that labor and material costs were decreased by 15 percent.</li>
              <li>Created financial reports on completed projects, indicating advantageous results.</li>
              <li>Generated financial statements including cash flow charts and balance sheets.</li>
              <li>Created analysis and performance reports for management teams to review.</li>
              <li>Introduced and implemented a different type of innovative software.</li>
              <li>Assessed new development projects generating over $4.5M in revenue.</li>
            </ul>
          </div>

          <div class="job">
            <div class="title">Financial Analyst at Sisco Enterprises, New York</div>
            <div class="date">September 2008 — September 2012</div>
            <ul>
              <li>Provided reports, ad-hoc analysis, annual operating plan budgets, monthly cash forecasts, and revenue forecasts.</li>
              <li>Analyzed supplier contracts and advised in negotiations bringing budgets down by 6%.</li>
              <li>Created weekly labor finance reports and presented the results to management.</li>
              <li>Modeled anticipated revenue charts to accurately track our progress in relation to forecasts and intentions.</li>
            </ul>
          </div>
        </div>

        <div class="section edu">
          <h3>Education</h3>
          <p><strong>Bachelor of Finance, Villanova University, King of Prussia</strong></p>
          <p><em>August 2004 – May 2008</em></p>
          <p>Graduated <em>summa cum laude</em>.</p>
          <br>
          <p><strong>High School Diploma, Camden High School, Camden</strong></p>
          <p><em>September 2000 – June 2004</em></p>
        </div>

        <div class="section">
          <h3>References</h3>
          <p class="reference">Devin Strazza from GEO Corp.</p>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="right-section">
        <div class="info-group">
          <h4>Details</h4>
          <p>
            333 Oklahoma Road<br>
            New York, NY 10024<br>
            United States<br>
            (917) 407-5112<br>
            <a href="mailto:MJ12@gmail.com">MJ12@gmail.com</a>
          </p>
        </div>

        <div class="info-group">
          <h4>Skills</h4>
          <div class="tag">Financial Analysis</div><br>
          <div class="tag">Strategic Planning</div><br>
          <div class="tag">Trend Analysis</div><br>
          <div class="tag">Market Assessment</div><br>
          <div class="tag">Team Leadership</div>
        </div>

        <div class="info-group">
          <h4>Languages</h4>
          <div class="tag">Spanish</div>
        </div>
      </div>
    </div>
  </div>

  
</body>`





const resume1template = (body) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

body {
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    display: flex;
    /* flex-direction: column; */
/* align-items: center; */
justify-content: space-between;
gap : 20px;
  
}
.button-container{
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  gap: 20px;
  /* justify-content: center; */
  
}
.button-container button{
  width: 300px;
  background-color: blue;
  height: 60px;
  font-size: 30px;
  color: white;
  border-radius: 20px ;
  cursor: pointer;
}


#resume-container {
  margin: 0px 30px;
    width: 210mm; /* A4 width */
    height: 297mm; /* A4 height */
    /* margin: auto; */
    background-color: #fff;
    padding: 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    overflow-y: auto; /* Enable vertical scrolling */
    -ms-overflow-style: none; /* Hide scrollbar for Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
}

/* Hide scrollbar for WebKit browsers (Chrome, Safari) */
.container::-webkit-scrollbar {
    display: none;
}

.mainheading {
    margin: 0px auto;
    font-size: 16px;
    height: max-content;
    width: 100%;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 5px;
}

.heading {
    color: rgb(100, 100, 242);
    font-weight: 500;
    font-size: 1.4rem;
    min-width: max-content;
}

.line {
    border: 0.7px solid #7272fb;
    width: 100%;
    margin-top: 17px;
    margin-bottom: 9px;
}

.subheading1 {
    margin: 5px -5px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.subheading1 li {
    margin: -1px -14px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.subheading21 {
    text-decoration: none;
}

.subheading2 {
    margin: 0px -5px;
    margin-left: 13px;
}

.date {
    font-size: 13px;
    color: gray;
}

.date1 {
    margin-right: 14px;
}

.bold {
    font-weight: bold;
}

.guid {
    font-size: 15px;
    color: gray;
}

.content div {
    display: flex;
    gap: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.flex1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.linechange {
    display: flex;
}

.flex2 {
    display: flex;
    gap: 11px;
    align-items: center;
}

.info1 {
    list-style-type: none;
    display: flex;
    width: 90%;
    padding: 0px;
    font-size: 18px;
    font-weight: bold;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 10px;
}

.info1 li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
}

.info1 li img {
    margin-top: 5px;
}

.info1 li a {
    text-decoration: none;
    color: black;
}</style>








</head>
${body}


</html>`
}
const resume2template = (body) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume - Sophie Wright</title>
  <style>
   body {
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    display: flex;
    /* flex-direction: column; */
/* align-items: center; */
justify-content: space-between;
gap : 20px;
  
}
.button-container{
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  gap: 20px;
  /* justify-content: center; */
  
}
.button-container button{
  width: 300px;
  background-color: blue;
  height: 60px;
  font-size: 30px;
  color: white;
  border-radius: 20px ;
  cursor: pointer;
}

   #resume-container {
      width: 210mm;
      height: 297mm;
      margin: auto;
      background-color: white;
      padding: 20px;
      box-sizing: border-box;
      margin: 40px auto;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .profile-pic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    .name {
      font-size: 24px;
      margin: 10px 0 5px;
    }

    .position {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .contact-info {
      font-size: 12px;
      margin-bottom: 10px;
    }

    .content {
      display: flex;
    }

    .left {
      width: 30%;
      padding-right: 10mm;
      border-right: 2px solid #eee;
    }

    .right {
      width: 70%;
      padding-left: 10mm;
    }

    .section {
      margin-bottom: 20px;
    }

    .section h2 {
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      padding-bottom: 5px;
    }

    .contact p, .skills div, .job-description, .education-item {
      font-size: 12px;
    }

    .contact h3, .skills h3 {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .skill-badge {
      background-color: #ddd;
      display: inline-block;
      padding: 4px 8px;
      margin: 2px 0;
      border-radius: 3px;
      font-size: 11px;
    }

    .job-title {
      font-weight: bold;
      font-size: 14px;
    }

    .job-date {
      font-size: 12px;
      font-style: italic;
      margin-bottom: 5px;
    }

    ul.job-description {
      margin-top: 0;
      padding-left: 20px;
    }
  </style>
</head>

${body}

</html>`
}
const resume3template = (body) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tim Stewart, Accountant</title>
  <style>
    @page {
      size: A4;
      margin: 1in;
    }

    body {
     margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    display: flex;
    /* flex-direction: column; */
/* align-items: center; */
justify-content: space-between;
gap : 20px;
    }

    #resume-container {
    
      width: 210mm;
      min-height: 297mm;
      margin: 40px auto;
      padding:10px 30px;
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(63, 63, 63, 1);
    }

    .button-container{
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  gap: 20px;
  /* justify-content: center; */
  
}
.button-container button{
  width: 300px;
  background-color: blue;
  height: 60px;
  font-size: 30px;
  color: white;
  border-radius: 20px ;
  cursor: pointer;
}
    h1, h2 {
      margin-bottom: 5px;
    }

    .header {
      text-align: center;
    }

    .header h1 {
      font-size: 24px;
      margin: 0;
    }

    .header p {
      font-size: 14px;
      margin: 5px 0;
    }

    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-top: 30px;
      padding-bottom: 3px;
      border-bottom: 1px solid #000;
    }

    .subsection {
      margin-top: 15px;
    }

    .job-title {
      font-weight: bold;
      font-size: 15px;
    }

    .location-date {
      display: flex;
      justify-content: space-between;
      font-style: italic;
      font-size: 13px;
    }

    ul {
      margin-top: 5px;
      padding-left: 20px;
    }

    li {
      margin-bottom: 5px;
    }

    .skills {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 10px;
      font-size: 14px;
    }

    .references p {
      margin: 5px 0;
    }
  </style>
</head>
${body}
</html>
`
}
const resume4template = (body) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Matthew Jones Resume</title>
  <style>
    /* Simulate A4 page over gray background */
    body {
      margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    display: flex;
    /* flex-direction: column; */
/* align-items: center; */
justify-content: space-between;
gap : 20px;
    }
    .button-container{
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  gap: 20px;
  /* justify-content: center; */
  
}
.button-container button{
  width: 300px;
  background-color: blue;
  height: 60px;
  font-size: 30px;
  color: white;
  border-radius: 20px ;
  cursor: pointer;
}

    #resume-container {
      background-color: #fff;
      width: 210mm;
      min-height: 297mm;
      padding: 30px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      box-sizing: border-box;
      margin: 0px 30px;
    }

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }

    .header img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }

    .header-text h1 {
      margin: 0;
      font-size: 26px;
    }

    .header-text h2 {
      margin: 5px 0 0 0;
      font-size: 16px;
      color: #555;
    }

    .main-content {
      display: flex;
      gap: 40px;
    }

    .left-section {
      width: 65%;
    }

    .right-section {
      width: 35%;
    }

    .section {
      margin-bottom: 30px;
    }

    .section h3 {
      font-size: 18px;
      color: #2a2a2a;
      border-bottom: 2px solid #ccc;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }

    .section p,
    .section li {
      font-size: 14px;
      line-height: 1.6;
    }

    .job {
      margin-bottom: 20px;
    }

    .job .title {
      font-weight: bold;
      font-size: 15px;
    }

    .job .date {
      font-size: 13px;
      color: #555;
      margin-bottom: 5px;
    }

    .job ul {
      padding-left: 20px;
      margin: 0;
    }

    .right-section .info-group {
      margin-bottom: 30px;
    }

    .info-group h4 {
      font-size: 16px;
      color: #2a2a2a;
      border-bottom: 2px solid #ccc;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }

    .info-group p,
    .info-group a {
      font-size: 14px;
      color: #000;
      line-height: 1.6;
      text-decoration: none;
    }

    .info-group a {
      color: #007BFF;
    }

    .tag {
      display: inline-block;
      background: #e6f3ff;
      padding: 6px 10px;
      border-left: 4px solid #007BFF;
      font-size: 13px;
      margin: 4px 0;
    }

    .edu p {
      margin: 4px 0;
    }

    .reference {
      font-style: italic;
    }

    /* Print styles */
    @media print {
      body {
        background: none;
        padding: 0;
      }

      .wrapper {
        box-shadow: none;
        margin: 0;
        width: auto;
        min-height: auto;
        padding: 0;
      }
    }
  </style>
</head>
${body}
</html>
`
}

const resume0template= (body) => {
  return body
}



export {
    resume1Html,
    resume2Html,
    resume3Html,
    resume4Html,
    resume1template,
    resume2template,
    resume3template,
    resume4template,
    resume0template
}

