import {useRef, useEffect, useState} from 'react'
import { motion, useInView, useAnimation } from "framer-motion";
import "../pages/HomepageStyle.css";
import Modal from '../pages/Modal.jsx'; 
import video1 from "/meVid.mp4";
import video3 from "/me11.mp4";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({text:'', image:''});
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  const handleCardClick = (text, image) => {
   
    setModalContent({text, image});
    setIsModalOpen(true);
  };
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,

      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('touchstart', function() {
        card.classList.add('card-hover');
      });

      card.addEventListener('touchend', function() {
        card.classList.remove('card-hover');
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('touchstart', function() {
          card.classList.add('card-hover');
        });

        card.removeEventListener('touchend', function() {
          card.classList.remove('card-hover');
        });
      });
    };
  }, []);

  return (
    <div>
    <div style={styles.container}>
      <div style={{width:"50%", minWidth:"400px", padding:"5%",display:"flex", alignItems:"center",marginTop:"30px"}}>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 style={{fontSize:"2.8rem"}}>Hello world, my name is</h1>
          <h1 style={styles.specialText}>Cledwyn</h1>
          <h1 style={{fontSize:"2rem"}}>and I am a student pursuing Computer Science</h1>
          
        </motion.div>
        
      </div>
      <div style={{margin:"20px", paddingTop:"20px"}}>
      <motion.img 
          src="./me1.jpg" 
          className="img-fluid" 
          style={{width:"100%", maxWidth:"550px", height:"80%", maxheight:"650px", objectFit:"cover", borderRadius:"50px", marginBottom:"3%"}}
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.01
            }
          }}
        />
      </div>
    </div>

    <section id="about" style={{minHeight: "100vh", backgroundImage: "url('./bg8a.jpeg')", backgroundSize:"cover", backgroundPosition:"top",scrollMarginTop: "30px"}}>
        
          <div style={{paddingTop:"5%", height:"80px",width:"100%", textAlign:"center", marginBottom:"5%",}}>
            <h1 style={styles.specialText2}>About Me</h1>
          </div>
          <motion.div
          style={{ ...styles.containerCard, maxHeight: "80vh", overflowY: "auto", padding: "20px", marginTop:"15%" }}
          initial="hidden"
          
        >
          <motion.div className="card" style={styles.card}>
              <div className="card-body" style={{marginTop:"50px", marginBottom:"50px"}}>
                  <h3 className="card-title">Passion</h3>
                  <p className="card-text">I'm passionate about AI for its potential to revolutionize industries and solve complex problems by automating tasks and analyzing data. I also love software development because it allows me to bring ideas to life through coding, problem-solving, and continuous learning.</p>
              </div>
          </motion.div>
          <motion.div className="card" style={styles.card} >
              <div className="card-body" style={{marginTop:"50px", marginBottom:"50px"}}>
                <h3 className="card-title">Hobbies</h3>
                <p className="card-text">In my free time, I enjoy traveling, with a special love for visiting Korea and exploring its culture. I’m also an active person who loves playing football and tennis, and I have a strong passion for gymming to stay fit and energized.</p>
              </div>
          </motion.div>
          <motion.div className="card" style={styles.card}>
              <div className="card-body" style={{marginTop:"50px", marginBottom:"50px"}}>
                <h3 className="card-title">More About Me</h3>
                <p className="card-text">I am currently in my sophomore year in Singapore Management University, pursing the bachelor's degree of Computer Science. I am planning to major in AI developments and also software development!</p>
                <a href="https://www.linkedin.com/in/cledwyn-chan/" target="_blank" className="btn btn-primary">My linkedin!</a>
              </div>
          </motion.div>
        </motion.div>
        
        
 
    </section>

      <section id="experience" style={{minHeight: "100vh", backgroundImage: "url('./bg2.jpeg')", backgroundSize:"cover", backgroundPosition:"top",scrollMarginTop: "1px"}} ref={workRef}>
          <div style={{paddingTop:"5%", height:"auto", maxHeight:"150px",width:"100%", textAlign:"center"}}>
            <h1 style={styles.specialText}>Working Experience</h1>
          </div>
          <motion.div
          style={{ ...styles.containerCard, maxHeight: "80vh", overflowY: "auto", padding: "20px" }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
           <div id="expContainer" className="container" style={styles.display}>
            
            <motion.div className="card" style={styles.cardContainer}  onClick={() => handleCardClick('As a retail associate at Nike, I provided top-tier customer service, assisting customers with product selection, offering personalized recommendations, and ensuring an exceptional in-store experience. I was responsible for maintaining an organized and visually appealing sales floor, handling transactions efficiently, and staying up-to-date with product knowledge to promote the latest merchandise. My role also included contributing to sales targets, managing stock, and fostering a positive, team-oriented environment to enhance customer satisfaction and loyalty.', 'src/assets/nike2.jpg')}>
                <img src="./nike.jpeg" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">Nike</h3>
                    <h4 className="sub-head">Sales Associate</h4>
                    <h5 className="year">Mar 2023 - Sep 2023</h5>
                    <p></p>
                </div>
            </motion.div>

            <motion.div className="card" style={styles.cardContainer} onClick={() => handleCardClick('During the Artbox 2023 expo exhibition, I worked as a salesperson for Oatbedient, where I quickly adapted to the fast-paced environment and effectively engaged with visitors. My ability to grasp new information swiftly allowed me to confidently present our products and address customer inquiries. This not only enhanced the company’s visibility at the event but also earned me positive feedback from my manager, who appreciated my enthusiasm and quick learning ability. My performance contributed to a successful exhibition, showcasing my aptitude for sales and client interaction.', 'src/assets/oat2.PNG')}>
                <img src="./oatbedient.JPG" style={styles.cardImg}/>
                <div className="layer"></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">Oatbedient</h3>
                    <h4 className="sub-head">Promoter</h4>
                    <h5 className="year">Jan 2023 - Feb 2023</h5>
                    <p></p>
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardContainer} onClick= {() => handleCardClick('Led a platoon of 15 in executing various high-stakes missions, including the National Day Parade (NDP). Additionally, played a key role in managing the networking infrastructure, ensuring seamless connectivity between critical equipment, such as establishing and maintaining reliable connections between cameras and the server.', 'src/assets/army2.jpg')}>
                <img src="./army.jpeg" style={{...styles.cardImg, minHeight:"400px"}}/>
                <div className="layer"></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">15C4I, SAF</h3>
                    <h4 className="sub-head">Platoon Sergeant</h4>
                    <h5 className="year">Oct 2021 - Nov 2022</h5>
                    <p></p>
                </div>
            </motion.div>
        </div>
          </motion.div>

          
      </section>
      <section id="education" style={{minHeight: "150vh", backgroundImage: "url('./bg6.jpeg')", backgroundSize:"cover",scrollMarginTop: "1px"}}>
          <div style={{paddingTop:"5%", height:"auto", maxHeight:"150px",width:"100%", textAlign:"center"}}>
            <h1 style={styles.specialText3}>Education</h1>
          </div>
          <motion.div
          style={{ ...styles.containerCard, maxHeight: "80vh", overflowY: "auto", padding: "20px" }}
         
        >
           <div id="expContainer" className="container" style={styles.display}>
            
            <motion.div {...fadeIn} className="card" style={styles.cardContainer} variants={cardVariants} onClick={() => handleCardClick('Clubs and Societies: Member of EYE Investment and SMU Paw club. \n ', 'src/assets/scis1.JPG')}>
                <img src="./scis.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">Singapore Management University</h3>
                    <h4 className="sub-head">Computer Science</h4>
                    <h5 className="year">Aug 2023 - Jun 2027</h5>
                    <p></p>
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardContainer} onClick={() => handleCardClick('Subject taken: H2 Chem, H2 Math, H2 Econs, H1 Hist\n Awards: Principal`s Honour for Promos and MYE', 'src/assets/cjc1.jpg')}>
                <img src="./CJC.png" style={styles.cardImg}/>
                <div className="layer"></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">Catholic Junior College</h3>
                    <h4 className="sub-head">Student</h4>
                    <h5 className="year">Jan 2019 - Dec 2020</h5>
                    <p></p>
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardContainer} >
                <img src="./manjuju.png" style={{...styles.cardImg}}/>
                <div className="layer"></div>
                <div className="info" style={{color:"white"}}>
                    <h3 className="heading">Manjusri Secondary School</h3>
                    <h4 className="sub-head">Student</h4>
                    <h5 className="year">Jan 2015 - Nov 2018</h5>
                    <p></p>
                </div>
            </motion.div>
        </div>
          </motion.div>
          <div style={{paddingTop:"5%", maxHeight:"150px",width:"100%", textAlign:"center"}}>
            <h1 style={styles.specialText3}>Skills</h1>
          </div>
          <motion.div
          style={{ ...styles.containerCard, height: "300px", overflowY: "auto", paddingTop:"30px" }}>
           <div id="skillsContainer" className="container" style={styles.display}>
            
            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Frontend development for full-stack projects') }>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">React</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Self-taught Java script programming for web app developments and fullstack')}>
                <img src="./JavaScript-logo.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">Javascript</h5>
                  
                </div>
            </motion.div>
            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Experienced in managing databases and creating an efficient database')}>
                <img src="./mysql.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">SQL</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} >
                <img src="./c.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">C</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Basic understanding of HTML and CSS')}>
                <img src="./htmlcss.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">HTML & CSS</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Exeperience in developing backend using spring framework and RESTful Apis')}>
                <img src="./spring.webp" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">Spring</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Advanced Java knowledge in terms of OOP and backend development')}>
                <img src="./java.jpeg" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">Java</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants}>
                <img src="./asm.png" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">Assembly</h5>
                  
                </div>
            </motion.div>

            <motion.div {...fadeIn} className="card" style={styles.cardSkillContainer} variants={cardVariants} onClick={() => handleCardClick('Have experiences using python for simple data analysis and training basic models')}>
                <img src="./python.jpeg" style={styles.cardImg}/>
                <div className="layer" ></div>
                <div className="info" style={{color:"white"}}> 
                    <h5 className="year">Python</h5>
                  
                </div>
            </motion.div>

            
        </div>
          </motion.div>
          
      </section>

      <section id="contact" style={{minHeight: "90vh", backgroundImage: "url('./bg.jpeg')", backgroundSize:"contain",scrollMarginTop: "30px"}} ref={aboutRef}>
        
          <div style={{paddingTop:"5%", height:"80px",width:"100%", textAlign:"center", marginBottom:"5%",}}>
            <h1 style={styles.specialText4}> Contact</h1>
          </div>
          <div style={{...styles.containerCard}}>
            <div  style={{ ...styles.containerCard, width:"50%",minWidth:"300px",overflowY: "auto", marginTop:"100px"}}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h4 style={{fontSize:"2rem", color:"white"}}>Want to know more about me?</h4>
                <h1 style={styles.specialText3}>Get in touch with me via these platforms!</h1>
                <div style={{marginTop:"80px"}}>
                  <a href="https://www.instagram.com/cledwyn__" target="_blank" rel="noopener noreferrer">
                      <FaInstagram style={{ color: "white" }} size={80} />
                  </a>
                  <a href="https://www.linkedin.com/in/cledwyn-chan/" target="_blank" rel="noopener noreferrer" style={{marginLeft:"5%"}}>
                      <FaLinkedin style={{ color: "white" }} size={80} />
                  </a>
                  <a href="mailto:cledwynchan@gmail.com" target="_blank" rel="noopener noreferrer" style={{marginLeft:"5%"}}>
                      <MdEmail style={{ color: "white" }} size={80} />
                  </a>
                </div>

                
              </motion.div>
        
            </div>

            <div style={{paddingTop: "20px", display:"flex", flexWrap:"wrap"}}>
              <motion.video
                ref={videoRef}
                muted={isMuted}
                src={video3}
                style={{objectFit:"cover",height:"500px", width: "400px", marginTop: "20px", borderRadius: "30px" }}
                autoPlay
                loop
                control
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                onClick={toggleMute}
              >
                
              </motion.video>
              
            </div>
          </div>


        
        
 
    </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "2%",
    height: "110vh",
    scrollMarginTop: "20px"
  },
  containerCard: {
    display:"flex", 
    justifyContent:"space-evenly",
    flexWrap: "wrap",
    marginTop:"6%",
    height:"100%",
    marginBottom:"5%"
  },

  specialText: {
    fontSize:"4rem", 
    backgroundImage:"url('./bg8.jpeg')",
    backgroundPosition:"center",
    backgroundClip:"text",
    color:"transparent",
  },

  specialText2: {
    fontSize:"4rem", 
    backgroundImage:"url('./bg10.jpeg')",
    backgroundPosition:"top",
    backgroundClip:"text",
    color:"transparent",
  },

  specialText3: {
    fontSize:"4rem", 
    backgroundImage:"url('./bg5.jpeg')",
    backgroundPosition:"top",
    backgroundClip:"text",
    color:"transparent",
  },

  specialText4: {
    fontSize:"4rem", 
    backgroundImage:"url('./bg5.jpeg')",
    backgroundPosition:"center",
    backgroundClip:"text",
    color:"transparent",
  },

  card: {
    width: "400px",marginBottom:"2%", overflowY: "auto", borderRadius:"30px",textAlign:"center", height:"auto"
  },


  display: {
    
    display: "flex",
    justifyContent:"space-evenly",
    gap: "5%",
    overscrollBehaviorX:"contain",
    scrollSnapType: "x mandatory",
    scrollBarWidth: "none",
    width:"100%",
    height:"100%"
  
},

cardContainer: {
 
    width:"30%",
    height:"30%",
    minWidth: "300px",
    maxWidth: "350px",
    minHeight:"300px",
    maxheight: "450px",
    borderRadius:" 35px",
    overflow: "hidden",
    position: "relative",
    transition: "0.5s"
},

cardImg: {
  width:"100%",
  height:"100%",
  maxHeight:"400px",
  objectFit:"cover",
  transition: "0.5s",
},

cardSkillContainer: {
 
  width:"200px",
  height:"200px",
  minWidth: "200px",
  maxWidth: "200px",
  minHeight:"200px",
  maxheight: "200px",
  borderRadius:" 35px",
  overflow: "hidden",
  position: "relative",
  transition: "0.5s"
},





}

