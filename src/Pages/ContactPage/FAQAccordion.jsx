
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import vec from '/Assets/images/contact/vec.png'
import { styled } from '@mui/system';
import { withTranslation } from 'react-i18next';

const ExpandIcon = styled('img')({
    width: '20px',
    
  });

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginBottom: '1rem',
    borderRadius:"1rem",
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
  }));


  const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: '#FBC6AC',
  }));

const FAQAccordion = ({t}) => {
  const faqs = [
    {
      question: t("question1contact"),
      answer: t("answer1contact"),
    },
    {
      question: t("question2contact"),
      answer: t("answer2contact"),
    },
    
    {
        question: t("question3contact"),
        answer: t("answer3contact"),
      },
      {
        question: t("question4contact"),
        answer: t("answer4contact"),
      },
      {
        question: t("question5contact"),
        answer: t("answer5contact"),
      },
      {
        question: t("question6contact"),
        answer: t("answer6contact"),
      },
      {
        question: t("question7contact"),
        answer: t("answer7contact"),
      },
      {
        question: t("question8contact"),
        answer: t("answer8contact"),
      },
      {
        question: t("question9contact"),
        answer: t("answer9contact"),
      },
      {
        question: t("question10contact"),
        answer: t("answer10contact"),
      },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <StyledAccordion key={index} sx={{  }} >
          <AccordionSummary
            expandIcon={<ExpandIcon src={vec} alt="Expand" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: '#8A1848' ,color:'#FFFFFF' }}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <StyledAccordionDetails>
            <Typography>{faq.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
      
    </div>
  );
};

export default withTranslation()(FAQAccordion);