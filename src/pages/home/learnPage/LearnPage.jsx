import React from 'react'
import styles from "./style.module.css"
import { BsArrowRight } from 'react-icons/bs';
import pic1 from "./Capture1.PNG"
import pic2 from "./Capture2.PNG"
import pic3 from "./Capture3.PNG"
import pic4 from "./Capture4.PNG"
import pic5 from "./map.592c2dcc.webp"
import pic6 from "./accelerate1.3fa8c6c0.webp"
import pic7 from "./accelerate2.17c372b2.webp"
import pic8 from "./Capture5.PNG"
import NewComp from '../CompNew/NewComp';

const LearnPage = () => {
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.holder1}>
            <div className={styles.case1}>
                <div className={styles.map1}>
                    <h1>How you will <span>Learn</span></h1>
                    <p>Premium skills learning across the entire digital product lifecycle: data, design, development, marketing, and product management.</p>
                </div>
                <div className={styles.map2}>
                    <img src={pic5} alt=''/>
                </div>
            </div>
            <div className={styles.case2}>
                <div className={styles.path1}>
                    <div className={styles.phase1}>
                        <img src={pic1} alt=''/>
                    </div>
                    <div className={styles.phase2}>
                        <h3>Immersive Learning</h3>
                        <ul>
                            <li>Robust content and Videos</li>
                            <li>Self-paced + Live Classes</li>
                            <li>Assessments and projects</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.path2}>
                    <div className={styles.phase1}>
                        <img src={pic2} alt=''/>
                    </div>
                    <div className={styles.phase2}>
                        <h3>Lectures & Lab</h3>
                        <ul>
                            <li>Weekend classes</li>
                            <li>Intensive training</li>
                            <li>Focus on real business cases</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.path3}>
                    <div className={styles.phase1}>
                        <img src={pic3} alt=''/>
                    </div>
                    <div className={styles.phase2}>
                        <h3>Capstone Projects</h3>
                        <ul>
                            <li>Work on multiple projects</li>
                            <li>Get real-time feedback</li>
                            <li>Real-time mentoring</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.path4}>
                    <div className={styles.phase1}>
                        <img src={pic4} alt=''/>
                    </div>
                    <div className={styles.phase2}>
                        <h3>Job & Career Coaching</h3>
                        <ul>
                            <li>Learn to leverage LinkedIn</li>
                            <li>CV for tech industry</li>
                            <li>Access to job opportunities</li>
                            <li>Demo sessions on interviews</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.holder2}>
            <div className={styles.lap1}>
                <h1>Accelerate Your Growth. <span>Think it,</span> <div>become it with Utiva</div></h1>
            </div>
            <div className={styles.lap2}>
                <div className={styles.pad1}>
                    <div className={styles.box1}>
                        <h1>30K+</h1>
                        <p>Students Trained</p>
                    </div>
                    <div className={styles.box1}>
                        <img src={pic6} alt=''/>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.color}>
                            <h1>85%</h1>
                            <p>Hiring rate of Utiva<br/> Learners</p>
                        </div>
                    </div>
                    <div className={styles.box1}>
                    <img src={pic7} alt=''/>
                    </div>
                </div>
                <div className={styles.pad2}>
                    <p>We are a platform that helps you learn tech skills and turn projects into hiring visibility.</p>
                    <h3>Get Started &nbsp;&nbsp;&nbsp;<BsArrowRight style={{
                        color:"#F9B01E"}}/>
                    </h3>
                </div>
                <div className={styles.pad3}>
                    <img src={pic8} alt=''/>
                </div>
            </div>
        </div>
    </div>
    <NewComp/>
  </div>
  )
}

export default LearnPage