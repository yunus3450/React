import React from "react";

const FaqItem = ({ faq, isOpen, toggleFaq }) => {
  return (
    <div className="card animation-content">
      <div className="card-header" id={`heading${faq.id}`}>
        <button
          className="btn btn-link d-flex justify-content-between align-items-center"
          type="button"
          onClick={() => toggleFaq(faq.id)}
        >
          {faq.question}
          <span>{isOpen ? "-" : "+"}</span>
        </button>
      </div>
      {isOpen && (
        <div
          id={`collapse${faq.id}`}
          className="collapse show"
          data-parent="#accordionExample"
        >
          <div className="card-body">{faq.answer}</div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
