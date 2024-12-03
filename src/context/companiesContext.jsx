'use client'
import React, { createContext, useState, useContext } from 'react';
const CompaniesContext = createContext();
export const useCompaniesContext = () => useContext(CompaniesContext);
export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const addCompany = (company) => {
    setCompanies((prevCompanies) => [...prevCompanies, company]);
  };
  const removeCompany = (companyId) => {
    setCompanies((prevCompanies) => prevCompanies.filter(company => company.id !== companyId));
  };
  return (
    <CompaniesContext.Provider value={{ companies, addCompany, removeCompany,isModalOpen,setIsModalOpen }}>
      {children}
    </CompaniesContext.Provider>
  );
};
