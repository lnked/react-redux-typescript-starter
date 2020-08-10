// import styled from 'styled-components'
import styled from 'styled-components/macro';

export const Picture = styled.picture`
  font-size: 0;
  position: relative;
  display: inline-block;
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`;

export const Source = styled.img`
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`;

export const Loading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  font-size: 1.6rem;
  color: #444;
`;

// .iron-image-container {
//   position: relative;

//   width: 100%;
//   height: 100%;

//   overflow: hidden;
// }

// .iron-image-preload {
//   position: absolute;
//   z-index: 1;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;

//   background-size: cover;
// }

// .iron-image-loaded {
//   position: absolute;
//   z-index: 2;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;

//   background-size: cover;

//   opacity: 0;

//   transition: opacity 1s ease;
// }

// .iron-image-fade-in {
//   opacity: 1;
// }
