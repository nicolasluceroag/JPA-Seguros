// components/QuoteSection.tsx (o QuoteForm.tsx)
import React from "react";
import { useQuoteForm } from "../../hooks/useQuoteForm";
import { QuoteSidebar } from "./QuoteSidebar";
import { QuoteFormFields } from "./QuoteFormFields";
import { QuoteSuccess } from "./QuoteSuccess";

const QuoteSection: React.FC = () => {
  const {
    formData,
    loading,
    submitted,
    handleSubmit,
    handleReset,
    handleChange,
  } = useQuoteForm();

  return (
    <section id="cotizar" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
          {/* Componente Sidebar */}
          <QuoteSidebar />

          {/* Área dinámica */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            {!submitted ? (
              <QuoteFormFields
                formData={formData}
                loading={loading}
                onSubmit={handleSubmit}
                onChange={handleChange}
              />
            ) : (
              <QuoteSuccess
                fullName={formData.fullName}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
