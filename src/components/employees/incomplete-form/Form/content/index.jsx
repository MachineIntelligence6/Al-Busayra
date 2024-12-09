import React from "react";
import ContactResidence from "./ContactResidence";
import EmiratesId from "./EmiratesId";
import DrivingLicense from "./DrivingLicense";
import Passport from "./Passport";
import Visa from "./Visa";
import Insurance from "./Insurance";
import OtherDetails from "./OtherDetails";
import BasicInfo from "./BasicInfo";

const ContentComponent = ({ activeStep, formData, setFormData }) => {
  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <BasicInfo
            formData={formData.BasicInfo}
            setFormData={(data) =>
              setFormData({ ...formData, BasicInfo: data })
            }
          />
        );
      case 1:
        return (
          <ContactResidence
            formData={formData.ContactResidence}
            setFormData={(data) =>
              setFormData({ ...formData, ContactResidence: data })
            }
          />
        );
      case 2:
        return (
          <EmiratesId
            formData={formData.EmiratesId}
            setFormData={(data) =>
              setFormData({ ...formData, EmiratesId: data })
            }
          />
        );
      case 3:
        return (
          <DrivingLicense
            formData={formData.DrivingLicense}
            setFormData={(data) =>
              setFormData({ ...formData, DrivingLicense: data })
            }
          />
        );
      case 4:
        return (
          <Passport
            formData={formData.Passport}
            setFormData={(data) => setFormData({ ...formData, Passport: data })}
          />
        );
      case 5:
        return (
          <Visa
            formData={formData.Visa}
            setFormData={(data) => setFormData({ ...formData, Visa: data })}
          />
        );
      case 6:
        return (
          <Insurance
            formData={formData.Insurance}
            setFormData={(data) =>
              setFormData({ ...formData, Insurance: data })
            }
          />
        );
      case 7:
        return (
          <OtherDetails
            formData={formData.OtherDetails}
            setFormData={(data) =>
              setFormData({ ...formData, OtherDetails: data })
            }
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default ContentComponent;
