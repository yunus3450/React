import React, { useEffect, useState } from "react";
import FaqList from "../molecules/FaqList";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaqId, setOpenFaqId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/src/assets/datas/faq-data.json");
      const data = await response.json();
      
      setFaqs(data)
    }
    fetchData()
  },[])

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="container" id="faq">
      <div className="main-copy-text">
        <h1>SIKÇA SORULAN SORULAR</h1>
      </div>
      <div className="section-title-underline"></div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <FaqList faqs={faqs} openFaqId={openFaqId} toggleFaq={toggleFaq} />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
