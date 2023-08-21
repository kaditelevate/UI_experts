import styled from 'styled-components';
import MyImage from './bgimage.jpg';



const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffa45b;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 1200px;
`;

const Image = styled.img`
  width: 60%;
  aspect-ratio:4/3;
  margin-top: 20px;
  object-fit:cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.p`
  color: #black;
  text-align: auto;
  margin: 20px;
  font-weight: bold;
`;
const UnderlinedHeading = styled.h1`
  text-decoration: underline;
  color:#fff;
  font-family:Impact;
  font-size:70px
  `;

  


function Home() {
  return (
    
        <>
          <div className='home'>
            <BoxContainer>
                <Image src={MyImage} alt="Image Description" />
                <Content>
                <UnderlinedHeading>KITE</UnderlinedHeading>
                Kite is a dynamic and innovative online learning website that provides a diverse range
                of educational opportunities to learners worldwide. Founded with a vision to revolutionize
                the way people access knowledge, Kadit offers a vast selection of courses across various
                fields, from technology and business to arts and personal development. Learners can
                benefit from expert instruction, practical assignments, and interactive learning
                experiences, all tailored to enhance their skills and career prospects. With a
                user-friendly interface and a strong commitment to quality education, Kite empowers
                individuals to pursue their passions and unlock their full potential, making learning
                accessible to all.
                </Content> {/* Add closing tag for Content */}
            </BoxContainer>
          </div>
        </>
      );
    }
    
    export default Home;