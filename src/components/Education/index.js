
// // import React from 'react'
// // import styled from 'styled-components'
// // import Timeline from '@mui/lab/Timeline';
// // import TimelineItem from '@mui/lab/TimelineItem';
// // import TimelineSeparator from '@mui/lab/TimelineSeparator';
// // import TimelineConnector from '@mui/lab/TimelineConnector';
// // import TimelineContent from '@mui/lab/TimelineContent';
// // import TimelineDot from '@mui/lab/TimelineDot';
// // import { education, experiences } from '../../data/constants';
// // import EducationCard from '../Cards/EducationCard';

// // const Container = styled.div`
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: center;
// //     position: relative;
// //     z-index: 1;
// //     align-items: center;
// //     padding: 0px 0px 60px 0px;
// //     @media (max-width: 960px) {
// //         padding: 0px;
// //     }
// // `;

// // const Wrapper = styled.div`
// //     position: relative;
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     flex-direction: column;
// //     width: 100%;
// //     max-width: 1350px;
// //     padding: 40px 0px 0px 0px;
// //     gap: 12px;
// //     @media (max-width: 960px) {
// //         flex-direction: column;
// //     }
// // `;

// // const Title = styled.div`
// // font-size: 42px;
// // text-align: center;
// // font-weight: 600;
// // margin-top: 20px;
// //   color: ${({ theme }) => theme.text_primary};
// //   @media (max-width: 768px) {
// //       margin-top: 12px;
// //       font-size: 32px;
// //   }
// // `;

// // const Desc = styled.div`
// //     font-size: 18px;
// //     text-align: center;
// //     max-width: 600px;
// //     color: ${({ theme }) => theme.text_secondary};
// //     @media (max-width: 768px) {
// //         margin-top: 12px;
// //         font-size: 16px;
// //     }
// // `;

// // const TimelineSection = styled.div`
// //     width: 100%;
// //     max-width: 1000px;
// //     margin-top: 10px;
// //     display: flex;
// //     flex-direction: column;
// //     align-items: center;
// //     justify-content: center;
// //     gap: 12px;
// //     @media (max-width: 660px) {
// //         align-items: end;
// //     }
// // `;



// // const index = () => {
// //     return (
// //         <Container id="education">
// //             <Wrapper>
// //                 <Title>Education</Title>
// //                 <Desc>
// //                     My education has been a journey of self-discovery and growth. My educational details are as follows.
// //                 </Desc>
// //                 <TimelineSection>
// //                     {/* <Timeline>
// //                         {education.map((education,index) => (
// //                             <TimelineItem >
// //                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
// //                                     <EducationCard education={education}/>
// //                                 </TimelineContent>
// //                                 <TimelineSeparator>
// //                                     <TimelineDot variant="outlined" color="secondary" />
// //                                     {index !== experiences.length -3  && <TimelineConnector style={{ background: '#854CE6' }} />}
// //                                 </TimelineSeparator>
// //                             </TimelineItem>
// //                         ))}
// //                     </Timeline> */}
// //                     <Timeline>
// //                         {education.map((edu, index) => (
// //                             <TimelineItem key={index}>
// //                                 <TimelineSeparator>
// //                                     {/* <TimelineDot variant="outlined" color="secondary" /> */}
// //                                     <TimelineDot
// //                                         sx={{
// //                                             backgroundColor: 'transparent',
// //                                             padding: 0,
// //                                             width: 40,
// //                                             height: 40,
// //                                             boxShadow: 'none',
// //                                         }}
// //                                         >
// //                                         <img
// //                                             src={edu.img}
// //                                             alt="icon"
// //                                             style={{
// //                                             width: '100%',
// //                                             height: '100%',
// //                                             borderRadius: '50%',
// //                                             objectFit: 'cover',
// //                                             }}
// //                                         />
// //                                     </TimelineDot>
// //                                     {index !== education.length  && (
// //                                     <TimelineConnector style={{ background: '#854CE6' }} />
// //                                     )}
// //                                 </TimelineSeparator>
// //                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
// //                                     <EducationCard education={edu} />
// //                                 </TimelineContent>
// //                             </TimelineItem>
// //                         ))}
// //                     </Timeline>
// //                 </TimelineSection>
// //             </Wrapper>
// //         </Container>
// //     )
// // }

// // export default index

// import React from 'react'
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import { education } from '../../data/constants';
// import EducationCard from '../Cards/EducationCard';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   padding: 0px 0px 60px 0px;

//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 40px 0px 0px 0px;
//   gap: 12px;

//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};

//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};

//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;

// const TimelineSection = styled.div`
//   width: 100%;
//   max-width: 1000px;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;

//   @media (max-width: 660px) {
//     align-items: end;
//   }
// `;

// // ✅ Responsive Image for TimelineDot
// const DotImage = styled.img`
//   width: 36px;
//   height: 36px;
//   max-width: 100%;
//   max-height: 100%;
//   border-radius: 50%;
//   object-fit: cover;

//   @media (max-width: 600px) {
//     width: 28px;
//     height: 28px;
//   }
// `;

// const EducationSection = () => {
//   return (
//     <Container id="education">
//       <Wrapper>
//         <Title>Education</Title>
//         <Desc>
//           My education has been a journey of self-discovery and growth. My educational details are as follows.
//         </Desc>
//         <TimelineSection>
//           <Timeline>
//             {education.map((edu, index) => (
//               <TimelineItem key={index}>
//                 <TimelineSeparator>
//                   <TimelineDot
//                     sx={{
//                       backgroundColor: 'transparent',
//                       padding: 0,
//                       width: 40,
//                       height: 40,
//                       boxShadow: 'none',
//                     }}
//                   >
//                     <DotImage src={edu.img} alt="icon" />
//                   </TimelineDot>
//                   {index !== education.length - 1 && (
//                     <TimelineConnector style={{ background: '#854CE6' }} />
//                   )}
//                 </TimelineSeparator>
//                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                   <EducationCard education={edu} />
//                 </TimelineContent>
//               </TimelineItem>
//             ))}
//           </Timeline>
//         </TimelineSection>
//       </Wrapper>
//     </Container>
//   )
// }

// export default EducationSection;

import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;

  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 16px 0px 16px; /* ✅ Horizontal padding added */
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 16px; /* ✅ Horizontal padding to prevent cutting on small screens */

  @media (max-width: 660px) {
    align-items: center; /* ✅ Keep it centered */
  }
`;

const DotImage = styled.img`
  width: 36px;
  height: 36px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
`;

const EducationSection = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: 'transparent',
                      padding: 0,
                      width: 40,
                      height: 40,
                      boxShadow: 'none',
                    }}
                  >
                    <DotImage src={edu.img} alt="icon" />
                  </TimelineDot>
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default EducationSection;
