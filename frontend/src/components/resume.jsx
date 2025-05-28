import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/resume.css';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useUser } from '@clerk/clerk-react';


const resume = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const { resumetype, ...userdata } = location.state || {}
  const userdatas = JSON.stringify(userdata);
  const [htmlcontent, setHtmlcontent] = useState()
   const { user } = useUser();

  useEffect(() => {

    
    const fetchData = async () => {
      const response = await axios.post('http://localhost:3000/api/vivedhara/v1/dss/gethtmloutput', {
        resumetype,
        userdata,
        phone: user.phoneNumbers[0].phoneNumber,
        email: user.emailAddresses[0].emailAddress,
        clerkid: user.id,
      });
      return response.data.data;
    }
    fetchData().then(response => {
      setHtmlcontent(response)
      setLoading(false);
    })



  }, [resumetype, userdatas]);






  return (
    <div className='htmlview1'>
      {loading && <div className='loading'>Loading</div>}


    {!loading &&  <div className='htmlview0'>
        <iframe
          title="Resume"
          srcDoc={htmlcontent}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>}
     





    </div>
  )
}

export default resume
