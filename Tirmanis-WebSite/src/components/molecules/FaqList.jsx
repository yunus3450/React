import React from "react";
import FaqItem from "./FaqItem";

const FaqList = ({ faqs, openFaqId, toggleFaq }) => {
  return (
    <div className="accordion" id="accordionExample">
      {faqs.map((faq) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          isOpen={openFaqId === faq.id}
          toggleFaq={toggleFaq}
        />
      ))}
    </div>
  );
};

export default FaqList;
