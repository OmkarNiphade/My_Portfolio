// import React from "react";
// import styled from "styled-components";
// import { FaMoon, FaSun } from "react-icons/fa";

// // Fixed toggle for desktop
// const DesktopToggleWrapper = styled.div`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// // Inline toggle for mobile menu
// const MobileToggleWrapper = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     margin-top: 16px;
//     justify-content: flex-start;
//     padding-left: 16px;
//   }
// `;

// const ToggleContainer = styled.div`
//   width: 64px;
//   height: 32px;
//   border-radius: 999px;
//   background: ${({ darkMode, theme }) =>
//     darkMode
//       ? `linear-gradient(90deg, ${theme.primary}, ${theme.text_primary})`
//       : `linear-gradient(90deg, #fceabb, #f8b500)`};
//   display: flex;
//   align-items: center;
//   padding: 4px;
//   cursor: pointer;
//   transition: background 0.4s ease, box-shadow 0.4s ease;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
// `;

// const ToggleCircle = styled.div`
//   height: 24px;
//   width: 24px;
//   background: white;
//   border-radius: 50%;
//   transition: all 0.3s ease-in-out;
//   transform: ${({ darkMode }) => (darkMode ? "translateX(32px)" : "translateX(0)")};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${({ darkMode }) => (darkMode ? "#005c97" : "#f8b500")};
//   font-size: 14px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
// `;

// const ThemeToggle = ({ darkMode, setDarkMode, isMobileMenuOpen }) => {
//   const toggleHandler = () => setDarkMode(!darkMode);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" || e.key === " ") toggleHandler();
//   };

//   const Toggle = (
//     <ToggleContainer
//       darkMode={darkMode}
//       onClick={toggleHandler}
//       aria-label="Toggle dark/light theme"
//       role="button"
//       tabIndex={0}
//       onKeyDown={handleKeyDown}
//     >
//       <ToggleCircle darkMode={darkMode}>
//         {darkMode ? <FaMoon /> : <FaSun />}
//       </ToggleCircle>
//     </ToggleContainer>
//   );

//   return (
//     <>
//       <DesktopToggleWrapper>{Toggle}</DesktopToggleWrapper>
//       {isMobileMenuOpen && <MobileToggleWrapper>{Toggle}</MobileToggleWrapper>}
//     </>
//   );
// };

// export default ThemeToggle;

// ---------------------------------------------------------------------------

import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

// Fixed toggle for desktop only
const DesktopToggleWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ToggleContainer = styled.div`
  width: 64px;
  height: 32px;
  border-radius: 999px;
  background: ${({ darkMode, theme }) =>
    darkMode
      ? `linear-gradient(90deg, ${theme.primary}, ${theme.text_primary})`
      : `linear-gradient(90deg, #fceabb, #f8b500)`};
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  transition: background 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
`;

const ToggleCircle = styled.div`
  height: 24px;
  width: 24px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  transform: ${({ darkMode }) => (darkMode ? "translateX(32px)" : "translateX(0)")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ darkMode }) => (darkMode ? "#005c97" : "#f8b500")};
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
`;

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const toggleHandler = () => setDarkMode(!darkMode);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") toggleHandler();
  };

  return (
    <DesktopToggleWrapper>
      <ToggleContainer
        darkMode={darkMode}
        onClick={toggleHandler}
        aria-label="Toggle dark/light theme"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <ToggleCircle darkMode={darkMode}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </ToggleCircle>
      </ToggleContainer>
    </DesktopToggleWrapper>
  );
};

export default ThemeToggle;

