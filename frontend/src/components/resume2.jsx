import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/resume.css';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


const resume = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const { resumetype, ...userdata } = location.state || {}
  const userdatas = JSON.stringify(userdata);
  const [htmlcontent, setHtmlcontent] = useState()


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://localhost:3000/api/vivedhara/v1/dss/gethtmloutput', {
        resumetype,
        userdata,
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
      {!loading && <div className='htmlviewbtn'>
        <div>Edit</div>
        <div>save and download</div>
      </div>}





    </div>
  )
}

export default resume
